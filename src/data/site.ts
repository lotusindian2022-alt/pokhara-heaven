/* =============================================================================
   Pokhara Heaven — site-wide content (contact, hours, delivery links)
   Centralized so the nav, footer, order band, location cards and reservation
   form all read from one place. Real contact details below; the exact street
   address + metro are still pending from the owner (see address.line1 TODO).
   ========================================================================== */

export const site = {
  name: 'Pokhara Heaven',
  brandDevanagari: 'पोखरा',
  tagline: 'Cocina himalaya hecha a mano. Momos, sekuwa y thali de Nepal, en Parla, Madrid.',
  /** Landline — main phone. */
  phone: '910 11 69 30',
  phoneHref: 'tel:+34910116930',
  /** Mobile — also the WhatsApp number. */
  whatsapp: '625 58 77 31',
  whatsappHref: 'tel:+34625587731',
  whatsappUrl: 'https://wa.me/34625587731',
  email: 'Pokharaheaven5@gmail.com',
  instagram: { handle: '@pokharaheaven', url: 'https://instagram.com/pokharaheaven' },
  address: {
    line1: 'C. del Planeta Venus, 8',
    line2: '28983 Parla, Madrid',
    metro: '',
    mapsUrl:
      'https://www.google.com/maps/place//data=!4m2!3m1!1s0xd41f563bce21325:0xdcfe0ed92b3bf0c2?sa=X&ved=1t:8290&ictx=111',
    // Keyless Google Maps embed (no API key needed) for the location iframe.
    mapsEmbedUrl:
      'https://www.google.com/maps?q=C.+del+Planeta+Venus,+8,+28983+Parla,+Madrid&output=embed',
  },
  hours: [
    { days: 'Mar – Dom', time: '13:00–16:30 · 20:00–24:00' },
    { days: 'Lunes', time: 'Cerrado' },
  ],
  /** Delivery / order platforms. Glovo / Uber / Just Eat deep links still pending. */
  delivery: [
    { name: 'Glovo', url: '#', dot: '#00A082' },
    { name: 'Uber Eats', url: '#', dot: '#06C167' },
    { name: 'Just Eat', url: '#', dot: '#FF8000' },
    { name: 'WhatsApp', url: 'https://wa.me/34625587731', dot: '#25D366' },
  ],
} as const;

export type Site = typeof site;
