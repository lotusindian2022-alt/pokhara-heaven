/* =============================================================================
   Pokhara Heaven — site-wide content (contact, hours, delivery links)
   Centralized so the nav, footer, order band, location cards and reservation
   form all read from one place. Address/phone/email are placeholder copy from
   the handoff — replace with the real details.
   ========================================================================== */

export const site = {
  name: 'Pokhara Heaven',
  brandDevanagari: 'पोखरा',
  tagline: 'Cocina himalaya hecha a mano. Momos, sekuwa y thali de Nepal, en el centro de Madrid.',
  phone: '+34 910 000 000',
  phoneHref: 'tel:+34910000000',
  email: 'hola@pokharaheaven.es',
  instagram: { handle: '@pokharaheaven', url: 'https://instagram.com/pokharaheaven' },
  address: {
    line1: 'Calle del Ejemplo, 24',
    line2: '28012 Madrid',
    metro: 'Metro · Antón Martín',
    mapsUrl: 'https://maps.google.com/?q=Pokhara+Heaven+Madrid',
  },
  hours: [
    { days: 'Lun – Jue', time: '13–16 · 20–23:30' },
    { days: 'Vie – Sáb', time: '13–16:30 · 20–00' },
    { days: 'Domingo', time: '13 – 23:30' },
  ],
  /** Delivery / order platforms. Replace "#" with the real deep links. */
  delivery: [
    { name: 'Glovo', url: '#', dot: '#00A082' },
    { name: 'Uber Eats', url: '#', dot: '#06C167' },
    { name: 'Just Eat', url: '#', dot: '#FF8000' },
    { name: 'WhatsApp', url: '#', dot: '#25D366' },
  ],
} as const;

export type Site = typeof site;
