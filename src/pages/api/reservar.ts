import type { APIRoute } from 'astro';

// On-demand serverless route (everything else on the site is static/prerendered).
export const prerender = false;

interface Payload {
  nombre?: string;
  telefono?: string;
  email?: string;
  fecha?: string;
  hora?: string;
  personas?: string | number;
  notas?: string;
  website?: string; // honeypot
}

const str = (v: unknown): string => (typeof v === 'string' ? v.trim() : v == null ? '' : String(v).trim());

/** Env is read at runtime; cast avoids needing @types/node while staying typechecked. */
const importEnv = import.meta.env as unknown as Record<string, string | undefined>;
const procEnv = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env;
const getEnv = (key: string): string | undefined => importEnv[key] ?? procEnv?.[key];

async function readBody(request: Request): Promise<Payload> {
  const ct = request.headers.get('content-type') || '';
  if (ct.includes('application/json')) {
    return (await request.json().catch(() => ({}))) as Payload;
  }
  const fd = await request.formData();
  return Object.fromEntries(fd.entries()) as Payload;
}

const wantsJson = (request: Request): boolean =>
  (request.headers.get('accept') || '').includes('application/json');

const jsonResponse = (data: unknown, status: number): Response =>
  new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json' } });

export const POST: APIRoute = async ({ request, redirect }) => {
  const body = await readBody(request);

  // Honeypot filled → almost certainly a bot. Acknowledge without doing anything.
  if (str(body.website)) {
    return wantsJson(request) ? jsonResponse({ ok: true }, 200) : redirect('/gracias', 303);
  }

  const nombre = str(body.nombre);
  const telefono = str(body.telefono);
  const email = str(body.email);
  const fecha = str(body.fecha);
  const hora = str(body.hora);
  const personasNum = parseInt(String(body.personas ?? ''), 10);
  const notas = str(body.notas);

  const errors: string[] = [];
  if (!nombre) errors.push('nombre');
  if (!telefono) errors.push('teléfono');
  if (!fecha) errors.push('fecha');
  if (!hora) errors.push('hora');
  if (!Number.isFinite(personasNum) || personasNum < 1 || personasNum > 30) errors.push('comensales');

  if (errors.length) {
    const msg = `Faltan o son inválidos estos campos: ${errors.join(', ')}.`;
    if (wantsJson(request)) return jsonResponse({ error: msg }, 400);
    return new Response(
      `<!doctype html><meta charset="utf-8"><title>Reserva incompleta</title>` +
        `<body style="font-family:system-ui;max-width:36rem;margin:4rem auto;padding:0 1rem;line-height:1.6">` +
        `<h1>Reserva incompleta</h1><p>${msg}</p><p><a href="/#reservar">← Volver e intentarlo de nuevo</a></p>`,
      { status: 400, headers: { 'content-type': 'text/html; charset=utf-8' } },
    );
  }

  const summary = [
    `Nueva solicitud de reserva — Pokhara Heaven`,
    ``,
    `Nombre:     ${nombre}`,
    `Teléfono:   ${telefono}`,
    `Email:      ${email || '—'}`,
    `Fecha:      ${fecha}`,
    `Hora:       ${hora}`,
    `Comensales: ${personasNum}`,
    `Notas:      ${notas || '—'}`,
  ].join('\n');

  const apiKey = getEnv('RESEND_API_KEY');
  const to = getEnv('RESERVATION_TO_EMAIL');
  const from = getEnv('RESERVATION_FROM_EMAIL');

  if (apiKey && to && from) {
    try {
      const r = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: `Pokhara Heaven <${from}>`,
          to: [to],
          reply_to: email || undefined,
          subject: `Reserva — ${nombre}, ${personasNum}p · ${fecha} ${hora}`,
          text: summary,
        }),
      });
      if (!r.ok) {
        console.error('[reservar] Resend responded', r.status, await r.text().catch(() => ''));
        // Still acknowledge to the guest — the restaurant can follow up by phone.
      }
    } catch (err) {
      console.error('[reservar] email send failed', err);
    }
  } else {
    console.warn('[reservar] Email not configured (set RESEND_API_KEY / RESERVATION_*). Received:\n' + summary);
  }

  return wantsJson(request) ? jsonResponse({ ok: true }, 200) : redirect('/gracias', 303);
};

// Guard other verbs so the route is explicit.
export const GET: APIRoute = () =>
  new Response('Method Not Allowed', { status: 405, headers: { Allow: 'POST' } });
