/* =============================================================================
   Pokhara Heaven — menu dataset (single source of truth)

   Transcribed from the restaurant's real PDF menu. Obvious spelling typos from
   the PDF were cleaned up for the live site; dish names and prices are kept.
   Prices use the Spanish comma format. Edit a dish here and it updates the whole
   Menu page, the filters, the jump-to-category list and the counts.
   ========================================================================== */

export interface RawItem {
  name: string;
  price: string;
  /** Vegetarian (shows the Veg badge and matches the Veg filter). */
  veg?: boolean;
  /** Chef's recommendation / house signature. */
  chef?: boolean;
  /** Spice label shown as a badge and matched by the Picante filter, e.g. 'Picante' / 'Muy picante'. */
  spice?: string;
  desc?: string;
}

export interface RawGroup {
  name: string;
  items: RawItem[];
}

export interface RawSection {
  id: string;
  title: string;
  short: string;
  en: string;
  accent: string;
  tint: string;
  items?: RawItem[];
  grouped?: boolean;
  groups?: RawGroup[];
}

/** A dish after processing — the shape templates consume. */
export interface MenuItem extends RawItem {
  hasDesc: boolean;
  veg: boolean;
  chef: boolean;
  spice: string | null;
  /** Unique URL-safe anchor id, e.g. "chicken-karahi" — used for deep links from images. */
  slug: string;
  vegF: string;
  spiceF: string;
  search: string;
}

export interface MenuGroup {
  name: string;
  items: MenuItem[];
}

export interface MenuSection extends RawSection {
  grouped: boolean;
  flat: boolean;
  chipHref: string;
  items: MenuItem[];
  groups: MenuGroup[];
}

const raw: RawSection[] = [
  { id: 'entrantes', title: 'Entrantes', short: 'Entrantes', en: 'Starters', accent: '#A0522D', tint: 'rgba(160,82,45,0.12)', items: [
    { name: 'Pani Puri', price: '5,95€', veg: true, desc: 'Bolas crujientes rellenas de cebolla, patata, guisante y garbanzo, con agua de tamarindo y limón.' },
    { name: 'Aloo Samosa', price: '4,95€', veg: true, desc: 'Empanadillas de patata, guisante y especias.' },
    { name: 'Keema Samosa', price: '5,95€', desc: 'Empanadillas de carne picada de pollo y especias.' },
    { name: 'Peanut Sadeko', price: '5,95€', veg: true, desc: 'Cacahuetes con tomate, cebolla, cilantro y especias.' },
    { name: 'Verdura Pakora', price: '4,90€', veg: true, desc: 'Verduras variadas rebozadas en harina de garbanzo.' },
    { name: 'Pollo Pakora', price: '5,50€', desc: 'Pechuga de pollo rebozada en harina de garbanzo.' },
    { name: 'Gambas Pakora', price: '6,30€', desc: 'Tiras de gambas rebozadas en harina de garbanzo.' },
    { name: 'Steam Momo', price: '6,95€', desc: 'Masa rellena de pollo y especias, al vapor.' },
    { name: 'Prawn Puri', price: '6,75€', desc: 'Gambas cocidas con especias, servidas con pan crujiente.' },
    { name: 'Chicken Puri', price: '5,95€', desc: 'Pollo cocido con especias, servido con pan crujiente.' },
    { name: 'Samosa Chat', price: '6,75€', veg: true, desc: 'Aloo samosa, yogur, tamarindo, salsa de menta, cilantro, pepino y cebolla.' },
    { name: 'Chana Chat', price: '5,75€', veg: true, desc: 'Garbanzo, yogur, tamarindo, pepino, cebolla, patata y especias.' },
    { name: 'Aloo Tikki', price: '4,95€', veg: true, desc: 'Croquetas de patata con cilantro y especias.' },
    { name: 'Nepalí Famous Chatpate', price: '5,50€', veg: true, chef: true, desc: 'Arroz crujiente, patata, garbanzo, guisante, cebolla, pepino, cilantro, lima, tomate y especias.' },
    { name: 'Cheese Roll', price: '5,95€', veg: true, desc: 'Pan relleno de queso, rebozado y enrollado, con especias.' },
    { name: 'Pokhara Entrantes Mixto', price: '8,95€', chef: true, desc: 'Keema samosa, verdura samosa, pollo tikka, sheek kebab y verdura pakora.' },
    { name: 'Nepalí Taco', price: '5,90€', desc: 'Pan nepalí con tomate, cebolla, pollo tikka, mayonesa y especias.' },
    { name: 'Kalo Chana with Bhuja', price: '6,50€', veg: true, desc: 'Garbanzo negro cocido con especias, servido con arroz crujiente.' } ] },

  { id: 'sopas', title: 'Sopas y ensaladas', short: 'Sopas', en: 'Soup & salad', accent: '#176B5F', tint: 'rgba(27,153,139,0.13)', items: [
    { name: 'Dal Soup', price: '4,95€', veg: true, desc: 'Sopa de lentejas.' },
    { name: 'Vegetable Soup', price: '4,50€', veg: true, desc: 'Sopa de verduras.' },
    { name: 'Chicken Soup', price: '5,50€', desc: 'Sopa de pollo.' },
    { name: "Noodle's Soup", price: '6,95€', chef: true, desc: 'Sopa de noodles — famosa en Nepal.' },
    { name: 'Chicken Salad', price: '6,95€', desc: 'Ensalada con pollo.' },
    { name: 'Garden Salad', price: '5,95€', veg: true, desc: 'Tomate, lechuga, cebolla, pepino y lima.' } ] },

  { id: 'infantil', title: 'Menú infantil', short: 'Infantil', en: 'Kids menu', accent: '#8A6D3B', tint: 'rgba(138,109,59,0.14)', items: [
    { name: 'Pollo Pakora', price: '5,50€', desc: 'Pechuga de pollo rebozada en harina de garbanzo.' },
    { name: 'Nuggets y Patatas', price: '5,50€', desc: 'Nuggets de pollo con patatas fritas.' },
    { name: 'Salchicha con Patatas', price: '5,95€', desc: 'Salchicha con patatas fritas.' },
    { name: 'Alitas de Pollo', price: '5,95€', desc: 'Alitas de pollo con especias.' },
    { name: 'Butter Chicken con Arroz', price: '6,95€', desc: 'Pollo en salsa de tomate, cebolla, nata, mantequilla y especias, con arroz blanco.' },
    { name: 'Chicken Korma con Arroz', price: '6,95€', desc: 'Pollo con coco, crema, anacardo y especias, con arroz blanco.' },
    { name: 'Chicken Curry con Arroz', price: '6,75€', desc: 'Pollo con salsa de tomate, cebolla y especias, con arroz blanco.' } ] },

  { id: 'momos', title: 'Momos', short: 'Momos', en: 'Al vapor', accent: '#9E2B25', tint: 'rgba(192,57,43,0.1)', items: [
    { name: 'Chicken Momo', price: '10,95€', chef: true, desc: 'Masa doblada a mano, rellena de pollo y especias, al vapor.' },
    { name: 'Chilly Momo', price: '11,50€', desc: 'Momos salteados con pimiento verde, cebolla, especias y salsa del chef.' },
    { name: 'Jhol Momo', price: '6,95€', chef: true, desc: 'Momos servidos en su caldo especiado.' } ] },

  { id: 'thali', title: 'Thali Set', short: 'Thali', en: 'De Nepal', accent: '#B8860B', tint: 'rgba(154,100,16,0.13)', items: [
    { name: 'Chicken Thali', price: '22,95€', chef: true, desc: 'Arroz basmati, curry de pollo, pickle, lentejas negras, raita, gulab jamun, papadum y ensalada.' },
    { name: 'Lamb Thali', price: '24,75€', desc: 'Arroz basmati, curry de cordero, pickle, lentejas negras, raita, gulab jamun, papadum y ensalada.' },
    { name: 'Vegetable Thali', price: '20,95€', veg: true, desc: 'Arroz basmati, curry de verdura, pickle, lentejas negras, raita, gulab jamun, papadum y ensalada.' } ] },

  { id: 'tandoori', title: 'Tandoori al horno', short: 'Tandoori', en: 'A la brasa', accent: '#B23A2B', tint: 'rgba(178,58,43,0.11)', items: [
    { name: 'Chicken Tandoori', price: '12,50€', desc: 'Muslo de pollo marinado con yogur, jengibre, ajo, lima y especias.' },
    { name: 'Chicken Tikka', price: '12,95€', desc: 'Trozos de pollo marinados con yogur, jengibre, ajo, lima y especias.' },
    { name: 'Lamb Tikka', price: '15,95€', desc: 'Piezas de cordero marinadas con yogur, jengibre, ajo, lima y especias.' },
    { name: 'Nepalí Famous Chicken Sekuwa', price: '12,90€', chef: true, desc: 'Pollo marinado con yogur, pimienta negra, sal, jengibre, ajo, lima y especias.' },
    { name: 'Nepalí Famous Lamb Sekuwa', price: '15,95€', chef: true, desc: 'Cordero marinado con yogur, pimienta negra, sal, jengibre, ajo, lima y especias.' },
    { name: 'Chicken Mint Tikka', price: '12,95€', desc: 'Pollo marinado con salsa de menta, yogur, jengibre, ajo y especias.' },
    { name: 'Paneer Tikka', price: '11,50€', veg: true, desc: 'Queso nepalí marinado con yogur, jengibre, ajo, limón y especias.' },
    { name: 'Salmon Tikka', price: '14,90€', desc: 'Salmón marinado con yogur, jengibre, ajo, lima y especias.' },
    { name: 'Malai Tikka', price: '12,90€', desc: 'Pollo marinado con yogur, crema, queso y especias.' },
    { name: 'King Prawn Tandoori', price: '14,95€', desc: 'Langostinos marinados con especias, yogur, jengibre, ajo y limón.' },
    { name: 'Sheek Kebab', price: '11,90€', desc: 'Carne de cordero picada con especias, al pincho.' },
    { name: 'Mix Vegetable Tandoori', price: '11,95€', veg: true, desc: 'Brócoli, coliflor, tomate, queso nepalí, patata y pimiento, al horno.' },
    { name: 'Chicken Tikka Sashlik', price: '13,95€', desc: 'Pollo marinado con pimiento verde y rojo, cebolla, cilantro y especias.' },
    { name: 'Pokhara Mix Grill', price: '16,90€', chef: true, desc: 'Pollo tikka, pollo tandoori, cordero tikka, sheek kebab y langostino.' },
    { name: 'Alu ka Tikka Tandoori', price: '8,95€', veg: true, desc: 'Patata marinada con especias, yogur y ajo. Plato seco.' } ] },

  { id: 'pollo', title: 'Platos de pollo', short: 'Pollo', en: 'Chicken', accent: '#A0522D', tint: 'rgba(160,82,45,0.12)', items: [
    { name: 'Chicken Tikka Masala', price: '12,50€', desc: 'Salsa de tomate, cebolla, nata, anacardo y especias.' },
    { name: 'Butter Chicken', price: '12,95€', chef: true, desc: 'Salsa de tomate, cebolla, mantequilla y especias.' },
    { name: 'Chicken Korma', price: '12,50€', desc: 'Coco, crema, anacardo y especias nepalíes.' },
    { name: 'Chicken Mango', price: '12,50€', desc: 'Trozos de pollo en salsa de mango.' },
    { name: 'Chicken Curry', price: '11,50€', desc: 'Cebolla, tomate y especias nepalíes.' },
    { name: 'Chicken Karahi', price: '12,50€', desc: 'Salsa de tomate, ajo, cebolla y pimientos con especias.' },
    { name: 'Chicken Tikka Karahi', price: '12,95€', desc: 'Pollo tikka con tomate, ajo, cebolla y pimientos.' },
    { name: 'Chicken Jhalfrezi', price: '12,50€', desc: 'Tomate, zanahoria, cebolla, pimiento verde y especias.' },
    { name: 'Garlic Chicken', price: '11,95€', desc: 'Salsa de ajo fresco, pimiento, cebolla y especias.' },
    { name: 'Chicken Roganjosh', price: '12,50€', desc: 'Yogur, salsa de cebolla, tomate y especias.' },
    { name: 'Chicken Dhansak', price: '11,75€', desc: 'Pollo y lentejas, agridulce y con un toque picante.' },
    { name: 'Chicken Pathiya', price: '11,95€', desc: 'Mango chutney y tamarindo. Poco picante.' },
    { name: 'Chicken Madras', price: '11,95€', spice: 'Picante', desc: 'Curry con un toque picante.' },
    { name: 'Chicken Vindaloo', price: '12,20€', spice: 'Muy picante', desc: 'Muy picante, con tomate, cebolla y especias.' },
    { name: 'Chicken Bhuna', price: '11,95€', desc: 'Salsa de tomate, jengibre, ajo y especias.' },
    { name: 'Chicken Dopieza', price: '12,20€', desc: 'Con cebolla, en salsa de tomate y especias.' },
    { name: 'Chicken Saag', price: '11,95€', desc: 'Curry de pollo con espinacas frescas.' },
    { name: 'Chicken Balti', price: '12,50€', desc: 'Pimiento verde y rojo, cebolla y especias.' } ] },

  { id: 'cordero', title: 'Platos de cordero', short: 'Cordero', en: 'Lamb', accent: '#7E3A2E', tint: 'rgba(126,58,46,0.12)', items: [
    { name: 'Lamb Tikka Masala', price: '13,75€', desc: 'Salsa de tomate, cebolla, nata, anacardo y especias.' },
    { name: 'Lamb Korma', price: '13,50€', desc: 'Coco, crema, anacardo y especias.' },
    { name: 'Lamb Curry', price: '13,30€', desc: 'Cebolla, tomate y especias nepalíes.' },
    { name: 'Lamb Karahi', price: '13,50€', desc: 'Tomate, ajo, cebolla y pimientos con especias.' },
    { name: 'Lamb Jhalfrezi', price: '13,50€', desc: 'Tomate, zanahoria, cebolla, pimiento verde y especias.' },
    { name: 'Garlic Lamb', price: '13,20€', desc: 'Salsa de ajo fresco, pimiento, cebolla y especias.' },
    { name: 'Lamb Roganjosh', price: '13,50€', desc: 'Yogur, salsa de cebolla, tomate y especias.' },
    { name: 'Lamb Methi', price: '13,20€', desc: 'Hoja de fenogreco y cilantro fresco.' },
    { name: 'Lamb Madras', price: '13,20€', spice: 'Picante', desc: 'Curry con un toque picante.' },
    { name: 'Lamb Vindaloo', price: '13,20€', spice: 'Muy picante', desc: 'Muy picante, con tomate, cebolla y especias.' },
    { name: 'Lamb Saag', price: '13,95€', desc: 'Curry de cordero con espinacas frescas.' },
    { name: 'Lamb Balti', price: '13,50€', desc: 'Pimiento verde y rojo, cebolla y especias.' } ] },

  { id: 'pescado', title: 'Pescado y gambas', short: 'Pescado', en: 'Fish & prawn', accent: '#176B5F', tint: 'rgba(27,153,139,0.13)', items: [
    { name: 'Macha ko Jhol', price: '13,95€', chef: true, desc: 'Curry de pescado en salsa especial del chef.' },
    { name: 'Fish Madras', price: '13,75€', spice: 'Picante', desc: 'Pescado en salsa picante y especias.' },
    { name: 'Salmon Jalfrezi', price: '14,75€', desc: 'Salmón con tomate, zanahoria, cebolla, pimientos y especias.' },
    { name: 'Prawn Curry', price: '13,95€', desc: 'Gambas en salsa de cebolla, tomate y especias.' },
    { name: 'Prawn Jhalfrezi', price: '13,95€', desc: 'Gambas con tomate, zanahoria, cebolla, pimientos y especias.' },
    { name: 'Prawn Madras', price: '13,95€', spice: 'Picante', desc: 'Gambas con tomate, ajo, cebolla y pimiento verde.' },
    { name: 'Prawn Saag', price: '14,20€', desc: 'Curry de gambas con espinacas y especias.' },
    { name: 'Prawn Bhuna', price: '13,95€', desc: 'Gambas con tomate, jengibre, ajo y especias.' } ] },

  { id: 'verduras', title: 'Verduras', short: 'Verduras', en: 'Vegetable curry', accent: '#2E7D46', tint: 'rgba(46,125,70,0.13)', items: [
    { name: 'Dal Tadka / Dal Makhni', price: '9,50 / 10,95€', veg: true, desc: 'Lentejas amarillas o negras en salsa de tomate, cebolla y especias.' },
    { name: 'Mix Vegetable Curry', price: '10,50€', veg: true, desc: 'Verduras variadas en salsa de cebolla y tomate.' },
    { name: 'Berenjena Bhaji', price: '8,75€', veg: true, desc: 'Berenjena en salsa de tomate, cebolla y especias.' },
    { name: 'Aloo Gobi', price: '9,50€', veg: true, desc: 'Coliflor y patata en salsa de tomate y especias.' },
    { name: 'Chana Masala', price: '8,95€', veg: true, desc: 'Garbanzos en salsa ligera de tomate y cebolla.' },
    { name: 'Bhindi Bhaji', price: '10,20€', veg: true, desc: 'Curry de okra con tomate, ajo, jengibre y especias.' },
    { name: 'Mix Vegetable Korma', price: '10,50€', veg: true, desc: 'Verduras con coco, crema, anacardos y especias.' },
    { name: 'Paneer Chili', price: '11,50€', veg: true, desc: 'Queso con ajo, cebolla, jengibre, pimientos, especias y soja.' },
    { name: 'Butter Paneer', price: '11,20€', veg: true, desc: 'Queso en salsa de tomate, mantequilla y especias.' },
    { name: 'Palak Paneer', price: '11,50€', veg: true, desc: 'Curry de queso con espinacas y especias.' },
    { name: 'Matar Paneer', price: '11,20€', veg: true, desc: 'Guisantes con queso, tomate, cebolla y especias.' },
    { name: 'Palak Aloo', price: '8,95€', veg: true, desc: 'Curry de patata con espinacas.' },
    { name: 'Mustang Aloo', price: '6,95€', veg: true, chef: true, desc: 'Muy famoso en Nepal: patata, cebolla, ajo, jengibre, cilantro y especias. Poco picante.' },
    { name: 'Mushroom Bhaji', price: '8,95€', veg: true, desc: 'Curry de champiñón con tomate, cebolla y especias.' },
    { name: 'Malai Kofta', price: '10,95€', veg: true, desc: 'Albóndigas de queso y patata en salsa cremosa.' },
    { name: 'Veg Soya Curry', price: '10,95€', veg: true, desc: 'Verduras con cebolla, ajo, mantequilla y jengibre.' } ] },

  { id: 'casa', title: 'Especialidades de la casa', short: 'Especialidades', en: 'Chef · Chowmein · Biryani', accent: '#B8860B', tint: 'rgba(154,100,16,0.13)', items: [
    { name: 'Chef Especial', price: '14,50€', chef: true, desc: 'Gambas tandoori y pollo tikka con salsa y especias.' },
    { name: 'Tawa Especial', price: '13,50€', desc: 'Pollo tikka con salsa, cebolla y especias.' },
    { name: 'Chicken Chilly', price: '12,95€', desc: 'Pollo con cebolla, ajo, jengibre, pimientos, especias y soja. Con cilantro fresco.' },
    { name: 'Prawn Chilly', price: '14,50€', desc: 'Gambas con cebolla, ajo, jengibre, pimientos, especias y soja. Con cilantro fresco.' },
    { name: 'Combo Especial Pokhara', price: '18,50€', chef: true, desc: 'Mustang aloo, pollo momo, ensalada, chicken sekuwa y tandoori chicken.' },
    { name: 'Lamb Especial', price: '13,75€', spice: 'Picante', desc: 'Cordero sin hueso en curry picante madras.' },
    { name: 'Lamb Achari', price: '13,75€', desc: 'Cordero en salsa poco picante, con pickle y especias.' },
    { name: 'Keema Matar', price: '12,50€', desc: 'Carne picada de pollo y cordero con guisantes, tomate, cebolla y especias.' },
    { name: 'Pangra with Khaja Set', price: '10,95€', desc: 'Arroz crujiente, cacahuetes, cebolla, cilantro, papadum, pickle y mollejas de pollo.' },
    { name: 'Chicken Sadeko Khaja Set', price: '11,95€', desc: 'Arroz crujiente, cacahuetes, cebolla, cilantro, papadum, pickle, ensalada y pollo.' },
    { name: 'Chicken Tikka Chowmein', price: '10,50€', desc: 'Tallarines con pollo tikka.' },
    { name: 'Vegetable Chowmein', price: '7,75€', veg: true, desc: 'Tallarines con verduras.' },
    { name: 'Prawn Chowmein', price: '11,95€', desc: 'Tallarines con gambas.' },
    { name: 'Chicken Biryani', price: '11,95€', desc: 'Arroz basmati aromático con pollo.' },
    { name: 'Lamb Biryani', price: '12,90€', desc: 'Arroz basmati aromático con cordero.' },
    { name: 'Prawn Biryani', price: '12,95€', desc: 'Arroz basmati aromático con gambas.' },
    { name: 'Vegetable Biryani', price: '10,50€', veg: true, desc: 'Arroz basmati aromático con verduras.' },
    { name: 'Pokhara Especial Biryani', price: '14,50€', chef: true, desc: 'Arroz basmati aromático con pollo, cordero y gambas.' } ] },

  { id: 'arroz', title: 'Arroz, pan y acompañamientos', short: 'Arroz y pan', en: 'Rice · naan · sides', accent: '#8A6D3B', tint: 'rgba(138,109,59,0.14)', items: [
    { name: 'Steam Rice', price: '4,20€', veg: true, desc: 'Arroz basmati al vapor.' },
    { name: 'Pilau Rice', price: '4,90€', veg: true, desc: 'Arroz basmati con cardamomo y azafrán.' },
    { name: 'Egg Fried Rice', price: '5,95€', veg: true, desc: 'Arroz basmati con huevo y guisante.' },
    { name: 'Mushroom Rice', price: '5,50€', veg: true, desc: 'Arroz basmati con champiñón.' },
    { name: 'Kashmiri Rice', price: '6,50€', veg: true, desc: 'Arroz basmati con pasas, frutos secos y azúcar.' },
    { name: 'Garlic Rice', price: '5,60€', veg: true, desc: 'Arroz basmati con ajo.' },
    { name: 'Keema Rice', price: '5,75€', desc: 'Arroz basmati con carne picada.' },
    { name: 'Plain Naan', price: '2,95€', veg: true, desc: 'Pan naan.' },
    { name: 'Butter Naan', price: '3,75€', veg: true, desc: 'Pan naan con mantequilla.' },
    { name: 'Cheese Naan', price: '4,95€', veg: true, desc: 'Pan naan con queso.' },
    { name: 'Onion Naan', price: '3,20€', veg: true, desc: 'Pan naan con cebolla.' },
    { name: 'Garlic Naan', price: '3,20€', veg: true, desc: 'Pan naan con ajo.' },
    { name: 'Peshwari Naan', price: '3,95€', veg: true, desc: 'Pan naan con frutos secos.' },
    { name: 'Keema Naan', price: '3,90€', desc: 'Pan naan con carne picada.' },
    { name: 'Tandoori Roti', price: '2,95€', veg: true, desc: 'Pan de harina integral.' },
    { name: 'Paratha', price: '4,50€', veg: true, desc: 'Pan frito con mantequilla.' },
    { name: 'Aloo Paratha', price: '4,95€', veg: true, desc: 'Pan frito con patata y mantequilla.' },
    { name: 'Papadam', price: '1,25€', veg: true, desc: 'Pan de lentejas crujiente.' },
    { name: 'Mango / Mint Chutney', price: '1,50€', veg: true, desc: 'Salsa de mango o menta.' },
    { name: 'Raita', price: '3,95€', veg: true, desc: 'Yogur, pepino, cebolla, cilantro y especias.' } ] },

  { id: 'bebidas', title: 'Bebidas', short: 'Bebidas', en: 'Drinks', accent: '#176B5F', tint: 'rgba(27,153,139,0.13)', grouped: true, groups: [
    { name: 'Refrescos', items: [
      { name: 'Agua', price: '2,50€' }, { name: 'Agua con gas', price: '2,50€' },
      { name: 'Coca-Cola', price: '2,90€' }, { name: 'Coca-Cola Zero', price: '2,90€' }, { name: 'Coca-Cola Zero Zero', price: '2,90€' },
      { name: 'Aquarius Limón', price: '2,90€' }, { name: 'Aquarius Naranja', price: '2,90€' },
      { name: 'Fanta Limón', price: '2,90€' }, { name: 'Fanta Naranja', price: '2,90€' },
      { name: 'Nestea', price: '2,90€' }, { name: 'Schweppes', price: '2,95€' }, { name: 'Soda Water', price: '2,95€' },
      { name: 'Zumos (naranja, manzana, piña)', price: '2,90€' }, { name: 'Salt Lassi', price: '3,50€' } ] },
    { name: 'Cervezas', items: [
      { name: 'Jarra', price: '3,50€' }, { name: 'Caña', price: '2,50€' }, { name: 'Mahou', price: '2,90€' },
      { name: 'Estrella Galicia', price: '2,90€' }, { name: 'Cobra (India)', price: '3,00€' },
      { name: 'Kingfisher (India)', price: '3,00€' }, { name: 'Sin alcohol', price: '2,50€' } ] },
    { name: 'Vinos por copa y sangría', items: [
      { name: 'Copa (blanco / tinto / rosado)', price: '3,75€' }, { name: 'Sangría (vaso)', price: '3,50€' },
      { name: 'Sangría (jarra)', price: '8,50€' }, { name: 'Tinto de verano', price: '3,50€' } ] },
    { name: 'Whisky', items: [
      { name: 'Red Label', price: '4,25€' }, { name: 'Black Label', price: '5,95€' },
      { name: "Jack Daniel's", price: '5,25€' }, { name: "Ballantine's", price: '4,10€' } ] },
    { name: 'Ron', items: [
      { name: 'Bacardí', price: '4,10€' }, { name: 'Barceló', price: '4,10€' }, { name: 'Havana Club', price: '8,50€' } ] },
    { name: 'Gin', items: [
      { name: 'Larios', price: '4,10€' }, { name: 'Tanqueray', price: '4,50€' }, { name: 'Bombay Sapphire', price: '5,00€' },
      { name: 'Puerta de Indias (fresa)', price: '4,95€' }, { name: "Hendrick's", price: '6,95€' } ] },
    { name: 'Vodka', items: [
      { name: 'Smirnoff', price: '4,45€' }, { name: 'Absolut', price: '5,45€' } ] },
    { name: 'Brandy y licores', items: [
      { name: 'Veterano', price: '4,50€' }, { name: 'Limoncello', price: '2,90€' }, { name: 'Crema de Orujo', price: '2,90€' },
      { name: 'Orujo de Hierbas', price: '2,90€' }, { name: 'Pacharán', price: '2,90€' },
      { name: 'Martini Rosado', price: '3,60€' }, { name: 'Martini Blanco', price: '3,60€' } ] },
    { name: 'Vinos tintos (botella)', items: [
      { name: 'El Coto · Rioja Crianza', price: '15,95€' }, { name: 'Ramón Bilbao · Rioja Crianza', price: '19,95€' },
      { name: 'Protos · Ribera, Tempranillo', price: '16,00€' } ] },
    { name: 'Vinos blancos y rosado (botella)', items: [
      { name: 'Protos · Rueda, Verdejo', price: '16,50€' }, { name: 'Alma · Madrid, Malvar', price: '14,50€' },
      { name: 'Viña Sol · Cataluña', price: '14,50€' }, { name: 'El Coto Rosado · Rioja', price: '15,50€' } ] },
    { name: 'Cócteles', items: [
      { name: 'Mojito clásico', price: '4,95€' }, { name: 'Tequila Sunrise', price: '5,50€' }, { name: 'Sex on the Beach', price: '5,45€' },
      { name: 'Piña Colada', price: '5,95€' }, { name: 'Blue Lagoon', price: '5,75€' }, { name: 'San Francisco (sin alcohol)', price: '4,90€' } ] } ] },

  { id: 'postres', title: 'Postres, té y café', short: 'Postres', en: 'Dessert · tea · coffee', accent: '#9E2B25', tint: 'rgba(192,57,43,0.1)', items: [
    { name: 'Mango Lassi', price: '4,20€', veg: true, desc: 'Batido de mango.' },
    { name: 'Gulab Jamun', price: '5,20€', veg: true, desc: 'Bolitas de leche fritas en almíbar.' },
    { name: 'Mango Kulfi', price: '5,20€', veg: true, desc: 'Helado casero de mango.' },
    { name: 'Pistacho Kulfi', price: '5,45€', veg: true, desc: 'Helado casero de pistacho.' },
    { name: 'Gajar ka Halwa', price: '4,25€', veg: true, desc: 'Tarta de zanahoria.' },
    { name: 'Helado de Vainilla', price: '3,95€', veg: true, desc: 'Helado de vainilla.' },
    { name: 'Helado de Chocolate', price: '3,95€', veg: true, desc: 'Helado de chocolate.' },
    { name: 'Helado de Fresa', price: '3,95€', veg: true, desc: 'Helado de fresa.' },
    { name: 'Chai Masala Nepalí', price: '2,50€', desc: 'Té especiado de Nepal.' },
    { name: 'Té Verde', price: '1,50€', desc: 'Té verde.' },
    { name: 'Poleo Menta', price: '1,50€', desc: 'Infusión de poleo menta.' },
    { name: 'Café con Leche', price: '1,90€', desc: 'Café con leche.' },
    { name: 'Café Solo', price: '1,90€', desc: 'Café solo.' },
    { name: 'Café Cortado', price: '1,90€', desc: 'Café cortado.' },
    { name: 'Café Americano', price: '1,90€', desc: 'Café americano.' },
    { name: 'Café Exprés', price: '1,90€', desc: 'Café exprés.' } ] },
];

/** URL-safe slug from a dish name (accents stripped, non-alphanumerics → dashes). */
const slugify = (s: string): string =>
  s
    .toLowerCase()
    .replace(/[áàâä]/g, 'a')
    .replace(/[éèêë]/g, 'e')
    .replace(/[íìîï]/g, 'i')
    .replace(/[óòôö]/g, 'o')
    .replace(/[úùûü]/g, 'u')
    .replace(/ñ/g, 'n')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

// Guarantees globally-unique slugs across the whole menu (appends -2, -3… on collision).
const slugCounts = new Map<string, number>();
const uniqueSlug = (name: string): string => {
  const base = slugify(name);
  const n = (slugCounts.get(base) ?? 0) + 1;
  slugCounts.set(base, n);
  return n === 1 ? base : `${base}-${n}`;
};

function mk(it: RawItem): MenuItem {
  const veg = !!it.veg;
  return {
    ...it,
    hasDesc: !!it.desc,
    veg,
    chef: !!it.chef,
    spice: it.spice || null,
    vegF: veg ? '1' : '',
    spiceF: it.spice ? '1' : '',
    search: (it.name + ' ' + (it.desc || '')).toLowerCase(),
    slug: uniqueSlug(it.name),
  };
}

export const sections: MenuSection[] = raw.map((s) => ({
  ...s,
  grouped: !!s.grouped,
  flat: !s.grouped,
  chipHref: '#' + s.id,
  items: (s.items || []).map(mk),
  groups: (s.groups || []).map((g) => ({ ...g, items: g.items.map(mk) })),
}));

/** Number of food dishes (flat items) — drinks in the grouped Bebidas section aren't counted. */
export const totalDishes: number = sections.reduce((n, s) => n + s.items.length, 0);

/** Number of menu categories. */
export const totalCategories: number = sections.length;
