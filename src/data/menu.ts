/* =============================================================================
   Pokhara Heaven — menu dataset (single source of truth)

   Lifted verbatim from the design handoff's Component.renderVals(). Editing a
   dish here updates the whole Menu page. Keep prices as strings (they carry the
   "€" and locale comma, and some are ranges like "9,50 / 10,95€").
   ========================================================================== */

export interface RawItem {
  name: string;
  price: string;
  /** Marked vegetarian in the source (may be downgraded if it contains dairy — see NON_VEGAN). */
  veg?: boolean;
  /** Chef's recommendation. */
  chef?: boolean;
  /** Spice label, shown as a badge and used by the "Picante" filter, e.g. "Picante" / "Muy picante". */
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
  /** "1" when the Veg filter should match this dish, else "". */
  vegF: string;
  /** "1" when the Picante filter should match this dish, else "". */
  spiceF: string;
  /** Lowercased "name + desc" used by the search filter. */
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
    { name: 'Nepalí Famous Chatpate', price: '5,50€', veg: true, desc: 'Arroz crujiente, patata, garbanzo, guisante, cebolla, pepino, cilantro, lima, tomate y especias.' },
    { name: 'Cheese Roll', price: '5,95€', veg: true, desc: 'Pan relleno de queso rebozado, enrollado en tubo, con especias.' },
    { name: 'Pokhara Entrantes Mixto', price: '8,95€', chef: true, desc: 'Keema samosa, verdura samosa, pollo tikka, sheek kebab y verdura pakora.' },
    { name: 'Nepalí Taco', price: '5,90€', desc: 'Pan nepalí con tomate, cebolla, pollo tikka, mayonesa y especias.' },
    { name: 'Kalo Chana with Bhuja', price: '6,50€', veg: true, desc: 'Garbanzo negro cocido con especias, servido con arroz crujiente.' } ] },
  { id: 'sopas', title: 'Sopas y ensaladas', short: 'Sopas', en: 'Soup & salad', accent: '#176B5F', tint: 'rgba(27,153,139,0.13)', items: [
    { name: 'Dal Soup', price: '4,95€', veg: true, desc: 'Sopa de lentejas.' },
    { name: 'Vegetable Soup', price: '4,50€', veg: true, desc: 'Sopa de verduras.' },
    { name: 'Chicken Soup', price: '5,50€', desc: 'Sopa de pollo.' },
    { name: "Noodle's Soup", price: '6,95€', desc: 'Sopa de noodles — famosa en Nepal.' },
    { name: 'Chicken Salad', price: '6,95€', desc: 'Ensalada con pollo.' },
    { name: 'Garden Salad', price: '5,95€', veg: true, desc: 'Tomate, lechuga, cebolla, pepino y lima.' } ] },
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
    { name: 'Chicken Sekuwa', price: '12,90€', chef: true, desc: 'Famoso de Nepal: pollo marinado con yogur, pimienta negra, sal, jengibre, ajo y especias.' },
    { name: 'Lamb Sekuwa', price: '15,95€', chef: true, desc: 'Famoso de Nepal: cordero marinado con yogur, pimienta negra, sal, jengibre, ajo y especias.' },
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
    { name: 'Chicken Dhansak', price: '11,75€', desc: 'Pollo y lentejas, agridulce y picante.' },
    { name: 'Chicken Pathiya', price: '11,95€', desc: 'Mango chutney, tamarindo. Poco picante.' },
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
    { name: 'Prawn Chilly', price: '14,50€', desc: 'Gambas con cebolla, ajo, jengibre, pimientos, especias y soja.' },
    { name: 'Combo Especial Pokhara', price: '18,50€', chef: true, desc: 'Mustang aloo, pollo momo, ensalada, chicken sekuwa y tandoori chicken.' },
    { name: 'Lamb Especial', price: '13,75€', desc: 'Cordero sin hueso en curry picante madras.' },
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
    { name: 'Steam Rice', price: '4,20€' }, { name: 'Pilau Rice', price: '4,90€' }, { name: 'Egg Fried Rice', price: '5,95€' },
    { name: 'Mushroom Rice', price: '5,50€' }, { name: 'Kashmiri Rice', price: '6,50€' }, { name: 'Garlic Rice', price: '5,60€' },
    { name: 'Keema Rice', price: '5,75€' }, { name: 'Plain Naan', price: '2,95€' }, { name: 'Butter Naan', price: '3,75€' },
    { name: 'Cheese Naan', price: '4,95€' }, { name: 'Onion Naan', price: '3,20€' }, { name: 'Garlic Naan', price: '3,20€' },
    { name: 'Peshwari Naan', price: '3,95€' }, { name: 'Keema Naan', price: '3,90€' }, { name: 'Tandoori Roti', price: '2,95€' },
    { name: 'Paratha', price: '4,50€' }, { name: 'Aloo Paratha', price: '4,95€' }, { name: 'Papadam', price: '1,25€' },
    { name: 'Mango / Mint Chutney', price: '1,50€' }, { name: 'Raita', price: '3,95€' } ] },
  { id: 'bebidas', title: 'Bebidas', short: 'Bebidas', en: 'Drinks', accent: '#176B5F', tint: 'rgba(27,153,139,0.13)', grouped: true, groups: [
    { name: 'Refrescos', items: [
      { name: 'Agua / Agua con gas', price: '2,50€' }, { name: 'Coca-Cola / Zero / Fanta / Nestea', price: '2,90€' },
      { name: 'Aquarius (limón / naranja)', price: '2,90€' }, { name: 'Schweppes / Soda Water', price: '2,95€' },
      { name: 'Zumos (naranja, manzana, piña)', price: '2,90€' }, { name: 'Salt Lassi / Mango Lassi', price: '3,50€' } ] },
    { name: 'Cervezas', items: [
      { name: 'Caña', price: '2,50€' }, { name: 'Jarra', price: '3,50€' }, { name: 'Mahou / Estrella Galicia', price: '2,90€' },
      { name: 'Cobra / Kingfisher (India)', price: '3,00€' }, { name: 'Sin alcohol', price: '2,50€' } ] },
    { name: 'Vinos y sangría', items: [
      { name: 'Copa (blanco / tinto / rosado)', price: '3,75€' }, { name: 'Sangría / Tinto de verano (vaso)', price: '3,50€' },
      { name: 'Sangría (jarra)', price: '8,50€' }, { name: 'El Coto Crianza (Rioja) · botella', price: '15,95€' },
      { name: 'Ramón Bilbao Crianza (Rioja) · botella', price: '19,95€' }, { name: 'Protos Verdejo (Rueda) · botella', price: '16,50€' } ] },
    { name: 'Cócteles', items: [
      { name: 'Mojito clásico', price: '4,95€' }, { name: 'Tequila Sunrise', price: '5,50€' }, { name: 'Sex on the Beach', price: '5,45€' },
      { name: 'Piña Colada', price: '5,95€' }, { name: 'Blue Lagoon', price: '5,75€' }, { name: 'San Francisco (sin alcohol)', price: '4,90€' } ] } ] },
  { id: 'postres', title: 'Postres, té y café', short: 'Postres', en: 'Dessert', accent: '#9E2B25', tint: 'rgba(192,57,43,0.1)', items: [
    { name: 'Gulab Jamun', price: '5,20€', desc: 'Bolitas de leche fritas en almíbar.' },
    { name: 'Mango Kulfi', price: '5,20€', desc: 'Helado casero de mango.' },
    { name: 'Pistacho Kulfi', price: '5,45€', desc: 'Helado casero de pistacho.' },
    { name: 'Gajar ka Halwa', price: '4,25€', desc: 'Tarta de zanahoria.' },
    { name: 'Helados', price: '3,95€', desc: 'Vainilla, chocolate o fresa.' },
    { name: 'Chai Masala Nepalí', price: '2,50€', desc: 'Té especiado de Nepal.' },
    { name: 'Café', price: '1,90€', desc: 'Con leche, solo, cortado o americano.' },
    { name: 'Infusiones', price: '1,50€', desc: 'Té verde o poleo menta.' } ] },
];

/**
 * "Veg"-tagged dishes that actually contain dairy/egg — downgraded so the Veg
 * filter is dairy-aware (they keep no green "Veg" badge). Preserved verbatim.
 */
const NON_VEGAN = new Set<string>([
  'Samosa Chat', 'Chana Chat', 'Cheese Roll', 'Vegetable Thali', 'Paneer Tikka',
  'Mix Vegetable Tandoori', 'Alu ka Tikka Tandoori', 'Dal Tadka / Dal Makhni',
  'Mix Vegetable Korma', 'Paneer Chili', 'Butter Paneer', 'Palak Paneer',
  'Matar Paneer', 'Malai Kofta', 'Veg Soya Curry', 'Vegetable Chowmein', 'Vegetable Biryani',
]);

function mk(it: RawItem): MenuItem {
  const veg = !!it.veg && !NON_VEGAN.has(it.name);
  return {
    ...it,
    hasDesc: !!it.desc,
    veg,
    chef: !!it.chef,
    spice: it.spice || null,
    vegF: veg ? '1' : '',
    spiceF: it.spice ? '1' : '',
    search: (it.name + ' ' + (it.desc || '')).toLowerCase(),
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

/**
 * Number of food dishes (flat items). Drinks in the grouped "Bebidas" section
 * are not counted as "platos" — this matches the live filter's count, which
 * only tallies `.m-food` rows, so the hero stat and the filter count agree.
 */
export const totalDishes: number = sections.reduce((n, s) => n + s.items.length, 0);

/** Number of menu categories. */
export const totalCategories: number = sections.length;
