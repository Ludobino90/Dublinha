/* script.js — versão completa com todas as atualizações */

const WHATSAPP_NUMBER = '353832023836'

let orderList = []
let total = 0

// ========== TRADUÇÕES ==========
const translations = {
  en: {
    tagline: "Coxinhas • Pastéis",
    menu_home: "Home", menu_order: "Orders", menu_contact: "Contact",
    slide1_title: "Traditional Coxinha",
    slide1_desc: "Crispy on the outside, creamy on the inside — order now for your party!",
    slide2_title: "Hot Pastels", slide2_desc: "Fillings: beef, cheese, chicken — and more.",
    slide3_title: "Made with love", slide3_desc: "Artisanal recipes and fresh ingredients.",
    slide4_title: "Party Combo", slide4_desc: "Build your combo and get a discount for large quantities.",
    slide_order_btn: "Order Now",
    our_dough_1: "🥔 Our dough",
    our_dough_1_desc: "Made with a special potato base, giving it that perfect crispy exterior and soft interior.",
    party_kits: "🎉 Party Kits", party_kits_desc: "30g coxinhas perfect for events. Mix and match flavors as you like.",
    delivery: "🚚 Delivery", delivery_desc: "We deliver to your home or local pickup.",
    how_it_works: "⏱️ How it works",
    how_it_works_desc: "We produce on the day and deliver the next day. Fresh and frozen to keep the flavor.",
    // Prova social
    sp_badge: "⭐ Real Reviews",
    sp_title: "What our customers say",
    sp_subtitle: "Over 500 orders delivered in Dublin with lots of love and flavor!",
    sp_stat_orders: "Orders", sp_stat_rating: "Rating", sp_stat_happy: "Satisfaction",
    review1_text: '"The best coxinha I\'ve ever had in Dublin! The dough is perfect and the creamy chicken melts in your mouth. Already ordered 3 times!"',
    review1_name: "Ana Silva", review1_loc: "Dublin 4",
    review2_text: '"I ordered a kit of 100 coxinhas for my daughter\'s birthday and everyone loved it! They arrived fresh and crispy. Highly recommend!"',
    review2_name: "Marcos Oliveira", review2_loc: "Dublin 15",
    review3_text: '"Homesickness solved! The cheese pastel is incredible. On-time delivery, well packed. Dublinha is a reference here in Dublin!"',
    review3_name: "Carla Mendes", review3_loc: "Dublin 8",
    review4_text: '"Incredible coxinhas! I tried them at a friend\'s party and immediately ordered for my own event. Crispy outside, perfect filling inside!"',
    review4_name: "Sarah O'Brien", review4_loc: "Dublin 2",
    review5_text: '"Since I discovered Dublinha I can\'t eat coxinha anywhere else. The shredded rib is spectacular!"',
    review5_name: "Ricardo Souza", review5_loc: "Dublin 6",
    review6_text: '"¡Las mejores coxinhas de Dublín! Pedí para mi cumpleaños y todos mis amigos quedaron encantados. ¡Ya hice mi segundo pedido!"',
    review6_name: "Laura García", review6_loc: "Dublin 1",
    // Pedidos
    order_title: "Place your order",
    order_note: "Prices may vary according to quantity and promotions. Check via WhatsApp.",
    cat_coxinhas: "🍗 Coxinhas", cat_pasteis: "🥟 Pastéis",
    contact_title: "Order via WhatsApp",
    label_name: "Full name", label_address: "Address", label_phone: "Phone", label_details: "Order details",
    finish_order: "Finish Order",
    payment_title: "Payment & Delivery",
    payment_bank: "Bank transfer", payment_bank_desc: "Transfer (Revolut etc.). Arrange with the owner.",
    payment_cash: "Cash", payment_cash_desc: "Cash on delivery or pickup.",
    payment_delivery: "Delivery / Pickup", payment_delivery_desc: "We deliver to your home or pick up locally.",
    follow_us: "Follow us", address_hours: "Address & Hours",
    address: "Dublin Areas",
    hours: "ORDERS: Mon - Wed - Fri: 08:00 — 14:00",
    hours2: "DELIVERY: Tue - Thu - Sat: 08:00 — 14:00",
    contact: "Contact", email_label: "Email", phone_label: "Phone",
    company_name: "Dublinha", rights: "All rights reserved.",
    // Coxinhas
    prod_frango_cremoso: "Creamy Chicken", desc_frango_cremoso: "Traditional coxinha with seasoned creamy chicken.",
    prod_queijo: "Cheese", desc_queijo: "Coxinha stuffed with melted cheese. Yummy!",
    prod_carne: "Minced Beef", desc_carne: "Minced beef with small pieces of tomato, seasoned to perfection.",
    prod_calabresa: "Calabresa", desc_calabresa: "Coxinha with seasoned calabresa sausage.",
    prod_frango_queijo: "Chicken with Cheese", desc_frango_queijo: "Chicken coxinha with creamy cheese.",
    prod_costela: "Rib", desc_costela: "Coxinha filled with shredded ribs.",
    prod_bisteca: "Pork chop", desc_bisteca: "Pork chop Coxinha, quite juicy.",
    // Pastéis
    prod_pastel_carne: "Beef Pastel", desc_pastel_carne: "Crispy pastel filled with seasoned minced beef.",
    prod_pastel_queijo: "Cheese Pastel", desc_pastel_queijo: "Crispy pastel with melted cheese filling. Irresistible!",
    prod_pastel_frango: "Chicken Pastel", desc_pastel_frango: "Pastel with creamy seasoned chicken.",
    prod_pastel_calabresa: "Calabresa Pastel", desc_pastel_calabresa: "Pastel filled with smoked calabresa sausage and cheese.",
    // Kits
    kit_name: "Coxinha Kit",
    kit_50: "📦 Coxinhas Party Kit 50", kit_100: "📦 Coxinhas Party Kit 100",
    quick_kits: "Quick Kits", premium_kits_title: "🎁 Special Kits",
    kit_brigadeiro_name: "🍫 Brigadeiro Kit",
    kit_brigadeiro_desc: "Artisanal brigadeiros made with quality cocoa. Perfect for parties and special events. Portions of 12 units.",
    kit_beijinho_name: "🥥 Beijinho Kit",
    kit_beijinho_desc: "Fresh coconut beijinhos, soft and irresistible. Ideal to complete your dessert table. Portions of 12 units.",
    kit_massa_pastel_name: "🥟 Pastel Dough Kit",
    kit_massa_pastel_desc: "Fresh artisanal pastel dough, ready to fry at home. Crispy, light and authentic. Pack of 20 units.",
    kit_brigadeiro: "Brigadeiro Kit", kit_beijinho: "Beijinho Kit", kit_massa_pastel: "Pastel Dough Kit",
    // Geral
    size_small: "Small (30g)", size_medium: "Medium (60g)", size_large: "Large (100g)", size_mix: "Mix",
    cart_items_title: "Your items", total_label: "Total", view_order: "View order",
    add_button: "Add", selected_items: "Selected items", subtotal: "Subtotal",
    form_note: "By clicking, you will be redirected to WhatsApp with the pre-filled message. No data is stored on this site.",
    added_to_cart: "Item added to cart!",
  },
  pt: {
    tagline: "Coxinhas • Pastéis",
    menu_home: "Início", menu_order: "Pedidos", menu_contact: "Contato",
    slide1_title: "Coxinha Tradicional", slide1_desc: "Crocante por fora, cremosa por dentro — peça já para sua festa!",
    slide2_title: "Pastéis Quentes", slide2_desc: "Recheios: carne, queijo, frango — e muito mais.",
    slide3_title: "Feito com amor", slide3_desc: "Receitas artesanais e ingredientes frescos.",
    slide4_title: "Combo Festa", slide4_desc: "Monte o seu combo e garanta desconto para grandes quantidades.",
    slide_order_btn: "Ver Produtos",
    our_dough_1: "🥔 Nossa massa",
    our_dough_1_desc: "Feita com uma base especial de batata, proporcionando uma crosta crocante e interior macio.",
    party_kits: "🎉 Kits festa", party_kits_desc: "Coxinhas de 30g perfeitas para eventos. Misture os sabores como quiser.",
    delivery: "🚚 Entrega", delivery_desc: "Retirada no centro de Dublin ou entrega no seu endereço. Primeiro delivery grátis.",
    how_it_works: "⏱️ Como funciona",
    how_it_works_desc: "Produzimos no dia e entregamos no dia seguinte. Frescas e congeladas para manter o sabor.",
    // Prova social
    sp_badge: "⭐ Avaliações Reais",
    sp_title: "O que nossos clientes dizem",
    sp_subtitle: "Mais de 500 pedidos entregues em Dublin com muito amor e sabor!",
    sp_stat_orders: "Pedidos", sp_stat_rating: "Avaliação", sp_stat_happy: "Satisfação",
    review1_text: '"A melhor coxinha que já comi em Dublin! A massa é perfeita e o frango cremoso derrete na boca. Já pedi 3 vezes!"',
    review1_name: "Ana Silva", review1_loc: "Dublin 4",
    review2_text: '"Pedi o kit de 100 coxinhas para o aniversário da minha filha e todo mundo amou! Chegaram fresquinhas e crocantes. Super recomendo!"',
    review2_name: "Marcos Oliveira", review2_loc: "Dublin 15",
    review3_text: '"Saudade de casa resolvida! O pastel de queijo é incrível. Entrega pontual e bem embalado. Dublinha é referência aqui em Dublin!"',
    review3_name: "Carla Mendes", review3_loc: "Dublin 8",
    review4_text: '"Coxinhas incríveis! Provei na festa de um amigo e imediatamente pedi para o meu evento. Crocante por fora, recheio perfeito!"',
    review4_name: "Sarah O'Brien", review4_loc: "Dublin 2",
    review5_text: '"Desde que descobri a Dublinha não consigo comer coxinha de outro lugar. A costela desfiada é um espetáculo!"',
    review5_name: "Ricardo Souza", review5_loc: "Dublin 6",
    review6_text: '"¡Las mejores coxinhas de Dublín! Pedí para mi cumpleaños y todos mis amigos quedaron encantados. ¡Ya hice mi segundo pedido!"',
    review6_name: "Laura García", review6_loc: "Dublin 1",
    // Pedidos
    order_title: "Faça seu pedido",
    order_note: "Os preços podem variar conforme quantidade e promoções. Consulte no WhatsApp.",
    cat_coxinhas: "🍗 Coxinhas", cat_pasteis: "🥟 Pastéis",
    contact_title: "Pedido via WhatsApp",
    label_name: "Nome completo", label_address: "Endereço", label_phone: "Telefone", label_details: "Detalhes do pedido",
    finish_order: "Finalizar Pedido",
    payment_title: "Pagamento e Entrega",
    payment_bank: "Transferência bancária", payment_bank_desc: "Transferência (Revolut etc.). Combine com o responsável.",
    payment_cash: "Dinheiro", payment_cash_desc: "Pagamento em dinheiro na entrega ou retirada.",
    payment_delivery: "Entrega / Retirada", payment_delivery_desc: "Entregamos em sua casa ou retirada local.",
    follow_us: "Siga-nos", address_hours: "Endereço & Horários",
    address: "Regiões de Dublin",
    hours: "Pedidos: Seg - Qua - Sex: 08:00 — 14:00",
    hours2: "Entrega: Ter - Qui - Sáb: 08:00 — 19:00",
    contact: "Contato", email_label: "Email", phone_label: "Telefone",
    company_name: "Dublinha", rights: "Todos os direitos reservados.",
    prod_frango_cremoso: "Frango Cremoso", desc_frango_cremoso: "Coxinha tradicional com frango cremoso temperado.",
    prod_queijo: "Queijo", desc_queijo: "Coxinha recheada com queijo derretido. HMMMMMMM",
    prod_carne: "Carne", desc_carne: "Coxinha recheada com carne desfiada.",
    prod_calabresa: "Calabresa", desc_calabresa: "Coxinha com recheio de calabresa temperada.",
    prod_frango_queijo: "Frango com Queijo", desc_frango_queijo: "Coxinha de frango com queijo cremoso.",
    prod_costela: "Costela", desc_costela: "Coxinha recheada com costela desfiada.",
    prod_bisteca: "Bisteca", desc_bisteca: "Coxinha de bisteca, suculenta.",
    prod_pastel_carne: "Pastel de Carne", desc_pastel_carne: "Pastel crocante recheado com carne moída temperada.",
    prod_pastel_queijo: "Pastel de Queijo", desc_pastel_queijo: "Pastel crocante com recheio de queijo derretido. Irresistível!",
    prod_pastel_frango: "Pastel de Frango", desc_pastel_frango: "Pastel com frango cremoso temperado e muito sabor.",
    prod_pastel_calabresa: "Pastel de Calabresa", desc_pastel_calabresa: "Pastel com recheio de calabresa defumada e queijo.",
    kit_name: "Coxinha Kit",
    kit_50: "📦 Coxinhas Kit de Festa 50", kit_100: "📦 Coxinhas Kit de Festa 100",
    quick_kits: "Kits Rápidos", premium_kits_title: "🎁 Kits Especiais",
    kit_brigadeiro_name: "🍫 Kit Brigadeiro",
    kit_brigadeiro_desc: "Brigadeiros artesanais feitos com cacau de qualidade. Perfeitos para festas e eventos especiais. Porções de 12 unidades.",
    kit_beijinho_name: "🥥 Kit Beijinho",
    kit_beijinho_desc: "Beijinhos de coco fresquinhos, suaves e irresistíveis. Ideais para completar sua mesa de doces. Porções de 12 unidades.",
    kit_massa_pastel_name: "🥟 Kit Massa de Pastel",
    kit_massa_pastel_desc: "Massa artesanal fresca para pastel, pronta para fritar em casa. Crocante, sequinha e com o sabor autêntico. Pacote com 20 unidades.",
    kit_brigadeiro: "Kit Brigadeiro", kit_beijinho: "Kit Beijinho", kit_massa_pastel: "Kit Massa de Pastel",
    size_small: "Pequena (30g)", size_medium: "Média (60g)", size_large: "Grande (100g)", size_mix: "Misto",
    cart_items_title: "Seus itens", total_label: "Total", view_order: "Ver pedido",
    add_button: "Adicionar", selected_items: "Itens selecionados", subtotal: "Subtotal",
    form_note: "Ao clicar, você será redirecionado para o WhatsApp com a mensagem pré-preenchida. Nenhum dado é armazenado neste site.",
    added_to_cart: "Item adicionado ao carrinho!",
  },
  es: {
    tagline: "Coxinhas • Pasteles • Masas",
    menu_home: "Inicio", menu_order: "Pedidos", menu_contact: "Contacto",
    slide1_title: "Coxinha Tradicional", slide1_desc: "Crujiente por fuera, cremosa por dentro — ¡pídelo ya para tu fiesta!",
    slide2_title: "Pasteles Calientes", slide2_desc: "Rellenos: carne, queso, pollo — y más.",
    slide3_title: "Hecho con amor", slide3_desc: "Recetas artesanales e ingredientes frescos.",
    slide4_title: "Combo Fiesta", slide4_desc: "Arma tu combo y obtén descuento por grandes cantidades.",
    slide_order_btn: "Ver Productos",
    our_dough_1: "🥔 Nuestra masa",
    our_dough_1_desc: "Está hecha con una base especial de papa, dándole ese exterior crujiente perfecto y un interior suave.",
    party_kits: "🎉 Kits fiesta", party_kits_desc: "Coxinhas de 30g perfectas para eventos. Mezcla los sabores como quieras.",
    delivery: "🚚 Entrega", delivery_desc: "Entregamos en tu casa o retirada local.",
    how_it_works: "⏱️ Cómo funciona",
    how_it_works_desc: "Producimos el día y entregamos al día siguiente. Frescas y congeladas para mantener el sabor.",
    // Prova social
    sp_badge: "⭐ Reseñas Reales",
    sp_title: "Lo que dicen nuestros clientes",
    sp_subtitle: "¡Más de 500 pedidos entregados en Dublín con mucho amor y sabor!",
    sp_stat_orders: "Pedidos", sp_stat_rating: "Calificación", sp_stat_happy: "Satisfacción",
    review1_text: '"¡La mejor coxinha que he comido en Dublín! La masa es perfecta y el pollo cremoso se derrite en la boca. ¡Ya pedí 3 veces!"',
    review1_name: "Ana Silva", review1_loc: "Dublin 4",
    review2_text: '"Pedí el kit de 100 coxinhas para el cumpleaños de mi hija y a todos les encantó. ¡Llegaron frescas y crujientes. Muy recomendado!"',
    review2_name: "Marcos Oliveira", review2_loc: "Dublin 15",
    review3_text: '"¡Nostalgia resuelta! El pastel de queso es increíble. Entrega puntual y bien empacado. ¡Dublinha es referencia aquí en Dublín!"',
    review3_name: "Carla Mendes", review3_loc: "Dublin 8",
    review4_text: '"Incredible coxinhas! I tried them at a friend\'s party and immediately ordered for my own event. Crispy outside, perfect filling inside!"',
    review4_name: "Sarah O'Brien", review4_loc: "Dublin 2",
    review5_text: '"Desde que descubrí Dublinha no puedo comer coxinha en otro lugar. ¡La costilla deshebrada es un espectáculo!"',
    review5_name: "Ricardo Souza", review5_loc: "Dublin 6",
    review6_text: '"¡Las mejores coxinhas de Dublín! Pedí para mi cumpleaños y todos mis amigos quedaron encantados. ¡Ya hice mi segundo pedido!"',
    review6_name: "Laura García", review6_loc: "Dublin 1",
    // Pedidos
    order_title: "Haz tu pedido",
    order_note: "Los precios pueden variar según cantidad y promociones. Consulta por WhatsApp.",
    cat_coxinhas: "🍗 Coxinhas", cat_pasteis: "🥟 Pasteles",
    contact_title: "Pedido por WhatsApp",
    label_name: "Nombre completo", label_address: "Dirección", label_phone: "Teléfono", label_details: "Detalles del pedido",
    finish_order: "Finalizar pedido",
    payment_title: "Pago y Entrega",
    payment_bank: "Transferencia bancaria", payment_bank_desc: "Transferencia (Revolut etc.). Coordinar con el propietario.",
    payment_cash: "Efectivo", payment_cash_desc: "Pago en efectivo en entrega o recogida.",
    payment_delivery: "Entrega / Recogida", payment_delivery_desc: "Entregamos a domicilio o recogida local.",
    follow_us: "Síguenos", address_hours: "Dirección y Horarios",
    address: "Áreas de Dublín",
    hours: "Lun - Mie - Ver: 08:00 — 14:00",
    hours2: "Entrega: Mar – Jue – Sáb: 08:00 — 14:00",
    contact: "Contacto", email_label: "Email", phone_label: "Teléfono",
    company_name: "Dublinha", rights: "Todos los derechos reservados.",
    prod_frango_cremoso: "Pollo Cremoso", desc_frango_cremoso: "Coxinha tradicional con pollo cremoso sazonado.",
    prod_queijo: "Queso", desc_queijo: "Coxinha rellena de queso derretido. ¡Ñam!",
    prod_carne: "Carne Picada", desc_carne: "Carne picada con trocitos de tomate, sazonada a la perfección.",
    prod_calabresa: "Calabresa", desc_calabresa: "Coxinha con salchicha calabresa sazonada.",
    prod_frango_queijo: "Pollo con Queso", desc_frango_queijo: "Coxinha de pollo con queso cremoso.",
    prod_costela: "Costilla", desc_costela: "Coxinha rellena de costilla desmenuzada.",
    prod_bisteca: "Chuletón", desc_bisteca: "Coxinha de filete desmenuzado, jugoso.",
    prod_pastel_carne: "Pastel de Carne", desc_pastel_carne: "Pastel crujiente relleno de carne picada sazonada.",
    prod_pastel_queijo: "Pastel de Queso", desc_pastel_queijo: "Pastel crujiente con relleno de queso derretido. ¡Irresistible!",
    prod_pastel_frango: "Pastel de Pollo", desc_pastel_frango: "Pastel con pollo cremoso sazonado.",
    prod_pastel_calabresa: "Pastel de Calabresa", desc_pastel_calabresa: "Pastel relleno de calabresa ahumada y queso.",
    kit_name: "Kit de Coxinhas",
    kit_50: "📦 Kit Fiesta Coxinhas 50", kit_100: "📦 Kit Fiesta Coxinhas 100",
    quick_kits: "Kits Rápidos", premium_kits_title: "🎁 Kits Especiales",
    kit_brigadeiro_name: "🍫 Kit Brigadeiro",
    kit_brigadeiro_desc: "Brigadeiros artesanales hechos con cacao de calidad. Perfectos para fiestas. Porciones de 12 unidades.",
    kit_beijinho_name: "🥥 Kit Beijinho",
    kit_beijinho_desc: "Beijinhos de coco frescos, suaves e irresistibles. Ideales para tu mesa de postres. Porciones de 12 unidades.",
    kit_massa_pastel_name: "🥟 Kit Masa de Pastel",
    kit_massa_pastel_desc: "Masa artesanal fresca para pastel, lista para freír en casa. Paquete de 20 unidades.",
    kit_brigadeiro: "Kit Brigadeiro", kit_beijinho: "Kit Beijinho", kit_massa_pastel: "Kit Masa de Pastel",
    size_small: "Pequeña (30g)", size_medium: "Mediana (60g)", size_large: "Grande (100g)", size_mix: "Mixto",
    cart_items_title: "Tus artículos", total_label: "Total", view_order: "Ver pedido",
    add_button: "Añadir", selected_items: "Artículos seleccionados", subtotal: "Subtotal",
    form_note: "Al hacer clic, serás redirigido a WhatsApp con el mensaje prellenado. No se almacenan datos en este sitio.",
    added_to_cart: "¡Artículo añadido al carrito!",
  }
}

let currentLang = localStorage.getItem('lang') || 'en'

// ========== TRADUÇÃO ==========
function setLanguage(lang) {
  localStorage.setItem("lang", lang)
  document.documentElement.lang = lang
  currentLang = lang
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n")
    if (translations[lang]?.[key]) el.innerText = translations[lang][key]
  })
  document.querySelectorAll(".language-selector button").forEach(btn => btn.classList.remove("active"))
  document.getElementById("lang-" + lang)?.classList.add("active")
  document.getElementById("mobile-lang-" + lang)?.classList.add("active")
  updateOrder()
}

// ========== TOAST ==========
function showToast(text) {
  const toast = document.getElementById('toastMessage')
  if (!toast) return
  toast.textContent = text
  toast.classList.add('show')
  setTimeout(() => toast.classList.remove('show'), 2000)
}

// ========== VISIBILIDADE DO CARRINHO ==========
function updateCartVisibility() {
  const cart = document.getElementById('cartFloating')
  if (!cart) return
  if (orderList.length > 0) {
    if (cart.style.display === 'none' || cart.style.display === '') {
      cart.style.display = 'flex'
    }
  } else {
    cart.style.display = 'none'
    const dropdown = document.getElementById('cartDropdown')
    if (dropdown) dropdown.style.display = 'none'
  }
}

// ========== ATUALIZAR PEDIDO ==========
function updateOrder() {
  const container = document.getElementById("orderItems")
  container.innerHTML = ""
  total = 0

  orderList.forEach((item, index) => {
    const subtotal = item.price * item.qty
    total += subtotal
    const productName = translations[currentLang][item.productKey] || item.productKey
    const sizeName = translations[currentLang][item.sizeKey] || item.sizeKey

    // Token no formulário — lixeira em vez de X
    const token = document.createElement("div")
    token.className = "token"
    token.innerHTML = `
      <strong>${item.qty}x</strong> ${productName} (${sizeName}) €${subtotal.toFixed(2)}
      <button class="token-remove" onclick="removeItem(${index})" title="Remover">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    `
    container.appendChild(token)
  })

  document.getElementById("orderTotal").innerText = total.toFixed(2)

  // Dropdown do carrinho — com foto miniatura + lixeira
  const preview = document.getElementById('cartItemsPreview')
  if (preview) {
    preview.innerHTML = ''
    orderList.forEach((item, index) => {
      const productName = translations[currentLang][item.productKey] || item.productKey
      const sizeName = translations[currentLang][item.sizeKey] || item.sizeKey
      const div = document.createElement('div')
      div.className = 'preview-item'

      // Fallback de imagem
      const imgSrc = item.imgSrc || 'images/icon.png'

      div.innerHTML = `
        <img class="preview-item-thumb" src="${imgSrc}" alt="${productName}" onerror="this.style.display='none'">
        <div class="preview-item-info">
          <strong>${item.qty}x ${productName}</strong>
          <small>€${(item.price * item.qty).toFixed(2)}</small>
        </div>
        <button class="preview-item-remove" onclick="removeItemFromDropdown(event, ${index})" title="Remover">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      `
      preview.appendChild(div)
    })
    document.getElementById('dropdownTotal').innerText = total.toFixed(2)
  }

  // Badge e subtotal
  const cartBadge = document.getElementById('cartCountBadge')
  const cartSub = document.getElementById('cartSubtotalFloating')
  if (cartBadge) cartBadge.innerText = orderList.reduce((acc, item) => acc + item.qty, 0)
  if (cartSub) cartSub.innerText = '€' + total.toFixed(2)

  updateCartVisibility()
}

// ========== REMOVER ITENS ==========
function removeItem(index) {
  orderList.splice(index, 1)
  updateOrder()
}

function removeItemFromDropdown(e, index) {
  if (e?.stopPropagation) e.stopPropagation()
  orderList.splice(index, 1)
  updateOrder()
}

// ========== PAÍSES ==========
const COUNTRIES = [
  { name: "Ireland", dial: "+353", flag: "🇮🇪", code: "IE" },
  { name: "Brazil", dial: "+55", flag: "🇧🇷", code: "BR" },
  { name: "Portugal", dial: "+351", flag: "🇵🇹", code: "PT" },
  { name: "United Kingdom", dial: "+44", flag: "🇬🇧", code: "GB" },
  { name: "Spain", dial: "+34", flag: "🇪🇸", code: "ES" },
  { name: "United States", dial: "+1", flag: "🇺🇸", code: "US" },
  { name: "Canada", dial: "+1", flag: "🇨🇦", code: "CA" },
  { name: "Argentina", dial: "+54", flag: "🇦🇷", code: "AR" },
  { name: "Mexico", dial: "+52", flag: "🇲🇽", code: "MX" },
  { name: "Colombia", dial: "+57", flag: "🇨🇴", code: "CO" },
  { name: "Venezuela", dial: "+58", flag: "🇻🇪", code: "VE" },
  { name: "Chile", dial: "+56", flag: "🇨🇱", code: "CL" },
  { name: "Peru", dial: "+51", flag: "🇵🇪", code: "PE" },
  { name: "Uruguay", dial: "+598", flag: "🇺🇾", code: "UY" },
  { name: "Paraguay", dial: "+595", flag: "🇵🇾", code: "PY" },
  { name: "Bolivia", dial: "+591", flag: "🇧🇴", code: "BO" },
  { name: "Ecuador", dial: "+593", flag: "🇪🇨", code: "EC" },
  { name: "France", dial: "+33", flag: "🇫🇷", code: "FR" },
  { name: "Germany", dial: "+49", flag: "🇩🇪", code: "DE" },
  { name: "Italy", dial: "+39", flag: "🇮🇹", code: "IT" },
  { name: "Netherlands", dial: "+31", flag: "🇳🇱", code: "NL" },
  { name: "Belgium", dial: "+32", flag: "🇧🇪", code: "BE" },
  { name: "Switzerland", dial: "+41", flag: "🇨🇭", code: "CH" },
  { name: "Austria", dial: "+43", flag: "🇦🇹", code: "AT" },
  { name: "Poland", dial: "+48", flag: "🇵🇱", code: "PL" },
  { name: "Romania", dial: "+40", flag: "🇷🇴", code: "RO" },
  { name: "Ukraine", dial: "+380", flag: "🇺🇦", code: "UA" },
  { name: "Russia", dial: "+7", flag: "🇷🇺", code: "RU" },
  { name: "China", dial: "+86", flag: "🇨🇳", code: "CN" },
  { name: "Japan", dial: "+81", flag: "🇯🇵", code: "JP" },
  { name: "India", dial: "+91", flag: "🇮🇳", code: "IN" },
  { name: "Australia", dial: "+61", flag: "🇦🇺", code: "AU" },
  { name: "New Zealand", dial: "+64", flag: "🇳🇿", code: "NZ" },
  { name: "South Africa", dial: "+27", flag: "🇿🇦", code: "ZA" },
  { name: "Nigeria", dial: "+234", flag: "🇳🇬", code: "NG" },
  { name: "Angola", dial: "+244", flag: "🇦🇴", code: "AO" },
  { name: "Mozambique", dial: "+258", flag: "🇲🇿", code: "MZ" },
  { name: "Cape Verde", dial: "+238", flag: "🇨🇻", code: "CV" },
  { name: "Sweden", dial: "+46", flag: "🇸🇪", code: "SE" },
  { name: "Norway", dial: "+47", flag: "🇳🇴", code: "NO" },
  { name: "Denmark", dial: "+45", flag: "🇩🇰", code: "DK" },
  { name: "Finland", dial: "+358", flag: "🇫🇮", code: "FI" },
  { name: "Greece", dial: "+30", flag: "🇬🇷", code: "GR" },
  { name: "Turkey", dial: "+90", flag: "🇹🇷", code: "TR" },
  { name: "Israel", dial: "+972", flag: "🇮🇱", code: "IL" },
  { name: "Saudi Arabia", dial: "+966", flag: "🇸🇦", code: "SA" },
  { name: "UAE", dial: "+971", flag: "🇦🇪", code: "AE" },
  { name: "Pakistan", dial: "+92", flag: "🇵🇰", code: "PK" },
  { name: "Bangladesh", dial: "+880", flag: "🇧🇩", code: "BD" },
  { name: "Indonesia", dial: "+62", flag: "🇮🇩", code: "ID" },
  { name: "Philippines", dial: "+63", flag: "🇵🇭", code: "PH" },
  { name: "Vietnam", dial: "+84", flag: "🇻🇳", code: "VN" },
  { name: "Thailand", dial: "+66", flag: "🇹🇭", code: "TH" },
  { name: "South Korea", dial: "+82", flag: "🇰🇷", code: "KR" },
]

let selectedCountry = COUNTRIES[0]

function buildCountryList(filter = "") {
  const list = document.getElementById('countryList')
  if (!list) return
  list.innerHTML = ''
  const term = filter.toLowerCase().trim()
  const filtered = COUNTRIES.filter(c =>
    c.name.toLowerCase().includes(term) || c.dial.includes(term) || c.code.toLowerCase().includes(term)
  )
  filtered.forEach(c => {
    const li = document.createElement('li')
    if (c.code === selectedCountry.code) li.classList.add('selected')
    li.innerHTML = `<span class="c-flag">${c.flag}</span><span class="c-name">${c.name}</span><span class="c-dial">${c.dial}</span>`
    li.addEventListener('click', () => selectCountry(c))
    list.appendChild(li)
  })
}

function selectCountry(country) {
  selectedCountry = country
  document.getElementById('selectedFlag').textContent = country.flag
  document.getElementById('selectedCode').textContent = country.dial
  closeCountryDropdown()
}

function closeCountryDropdown() {
  document.getElementById('countryDropdown')?.classList.remove('open')
  document.getElementById('countrySelector')?.classList.remove('open')
}

function initCountrySelector() {
  const btn = document.getElementById('countryBtn')
  const dropdown = document.getElementById('countryDropdown')
  const selector = document.getElementById('countrySelector')
  const searchInput = document.getElementById('countrySearch')
  if (!btn || !dropdown) return
  buildCountryList()
  btn.addEventListener('click', e => {
    e.stopPropagation()
    if (dropdown.classList.contains('open')) {
      closeCountryDropdown()
    } else {
      dropdown.classList.add('open')
      selector.classList.add('open')
      if (searchInput) { searchInput.value = ''; buildCountryList(); setTimeout(() => searchInput.focus(), 50) }
    }
  })
  if (searchInput) {
    searchInput.addEventListener('input', () => buildCountryList(searchInput.value))
    searchInput.addEventListener('keydown', e => { if (e.key === 'Escape') closeCountryDropdown() })
  }
  document.addEventListener('click', e => { if (!selector.contains(e.target)) closeCountryDropdown() })
}

// ========== INICIALIZAÇÃO ==========
document.addEventListener('DOMContentLoaded', function () {

  document.getElementById('year').textContent = new Date().getFullYear()
  setLanguage(localStorage.getItem("lang") || "en")

  // SWIPER
  new Swiper('.mySwiper', {
    loop: true, speed: 800, autoplay: { delay: 4000 }, slidesPerView: 1, spaceBetween: 10,
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
  })

  // BOTÃO VER PRODUTOS NO SLIDE
  document.getElementById('slideOrderBtn')?.addEventListener('click', e => {
    e.preventDefault()
    document.getElementById('encomendas').scrollIntoView({ behavior: 'smooth' })
  })

  // ABAS DE CATEGORIA
  document.querySelectorAll('.cat-tab').forEach(tab => {
    tab.addEventListener('click', function () {
      document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'))
      this.classList.add('active')
      const cat = this.dataset.cat
      document.getElementById('grid-coxinhas').style.display = cat === 'coxinhas' ? 'grid' : 'none'
      document.getElementById('grid-pasteis').style.display  = cat === 'pasteis'  ? 'grid' : 'none'
    })
  })

  // TAMANHO
  document.querySelectorAll(".size-btn").forEach(btn => {
    btn.addEventListener("click", function () {
      this.parentElement.querySelectorAll(".size-btn").forEach(b => b.classList.remove("active"))
      this.classList.add("active")
      this.closest(".product").querySelector(".price-value").innerText = this.dataset.price
    })
  })

  // CONTADOR
  document.querySelectorAll(".qty-btn").forEach(btn => {
    btn.addEventListener("click", function () {
      const qtyInput = this.parentElement.querySelector(".qty")
      let qty = parseInt(qtyInput.value) || 1
      if (this.classList.contains("plus")) qty++
      if (this.classList.contains("minus") && qty > 1) qty--
      qtyInput.value = qty
    })
  })
  document.querySelectorAll(".qty").forEach(input => {
    input.addEventListener("input", function () {
      let val = parseInt(this.value)
      if (isNaN(val) || val < 1) this.value = 1
      if (val > 999) this.value = 999
    })
    input.addEventListener("blur", function () {
      if (!this.value || parseInt(this.value) < 1) this.value = 1
    })
  })

  // ADICIONAR PRODUTO (cards normais) — captura imagem do article
  document.querySelectorAll(".add-item").forEach(btn => {
    btn.addEventListener("click", function () {
      const product = this.closest(".product")
      if (!product) return
      const productKey = product.dataset.productKey
      const activeSize = product.querySelector(".size-btn.active")
      const sizeKey = activeSize.dataset.sizeKey
      const price = parseFloat(activeSize.dataset.price)
      const qty = parseInt(product.querySelector(".qty").value) || 1
      const imgSrc = product.dataset.img || product.querySelector('.product-img')?.src || ''

      const existing = orderList.find(i => i.productKey === productKey && i.sizeKey === sizeKey)
      if (existing) { existing.qty += qty } else { orderList.push({ productKey, sizeKey, price, qty, imgSrc }) }

      product.classList.add("added")
      setTimeout(() => product.classList.remove("added"), 300)
      updateOrder()
      showToast(translations[currentLang].added_to_cart || 'Item adicionado!')
    })
  })

  // KITS RÁPIDOS
  document.querySelectorAll(".kit-btn").forEach(btn => {
    btn.addEventListener("click", function () {
      const kit = parseInt(this.dataset.kit)
      const productKey = "kit_name"
      const kitSizeKey = "size_mix"
      const imgSrc = this.dataset.kitImg || 'images/slide1.jpg'
      const existing = orderList.find(i => i.productKey === productKey && i.sizeKey === kitSizeKey)
      if (existing) { existing.qty += kit } else { orderList.push({ productKey, sizeKey: kitSizeKey, price: 2.20, qty: kit, imgSrc }) }
      updateOrder()
      showToast(translations[currentLang].added_to_cart || 'Item adicionado!')
    })
  })

  // KITS PREMIUM
  document.querySelectorAll(".add-item-kit").forEach(btn => {
    btn.addEventListener("click", function () {
      const productKey = this.dataset.productKey
      const sizeKey = this.dataset.sizeKey
      const price = parseFloat(this.dataset.price)
      const imgSrc = this.dataset.img || ''
      const existing = orderList.find(i => i.productKey === productKey && i.sizeKey === sizeKey)
      if (existing) { existing.qty += 1 } else { orderList.push({ productKey, sizeKey, price, qty: 1, imgSrc }) }
      this.classList.add("added")
      setTimeout(() => this.classList.remove("added"), 300)
      updateOrder()
      showToast(translations[currentLang].added_to_cart || 'Item adicionado!')
    })
  })

  // ========== CARRINHO FLUTUANTE - ARRASTAR ==========
  ;(function () {
    const cartFloating = document.getElementById('cartFloating')
    if (!cartFloating) return

    let isDragging = false, hasMoved = false
    let startX, startY, startLeft, startTop
    const MOVE_THRESHOLD = 8

    function clamp(left, top) {
      const w = cartFloating.offsetWidth, h = cartFloating.offsetHeight
      return { left: Math.min(Math.max(left, 0), window.innerWidth - w), top: Math.min(Math.max(top, 0), window.innerHeight - h) }
    }
    //ATUALIZACAO//
    function isInsideScrollableArea(target) {
  return target.closest('.product-list, #cartDropdown, .preview-item, .dropdown-content')
}
//ATUALIZACAO//
    function initPos() {
      const r = cartFloating.getBoundingClientRect()
      const c = clamp(r.left, r.top)
      cartFloating.style.left = c.left + 'px'; cartFloating.style.top = c.top + 'px'
      cartFloating.style.right = 'auto'; cartFloating.style.bottom = 'auto'
    }
    if (document.readyState === 'complete') initPos(); else window.addEventListener('load', initPos)
    window.addEventListener('resize', () => {
      const c = clamp(parseFloat(cartFloating.style.left) || 0, parseFloat(cartFloating.style.top) || 0)
      cartFloating.style.left = c.left + 'px'; cartFloating.style.top = c.top + 'px'
    })

    function startDrag(cx, cy) {
      isDragging = true; hasMoved = false
      const r = cartFloating.getBoundingClientRect()
      startLeft = r.left; startTop = r.top; startX = cx; startY = cy
    }
    function onDrag(cx, cy) {
      if (!isDragging) return
      const dx = cx - startX, dy = cy - startY
      if (Math.abs(dx) > MOVE_THRESHOLD || Math.abs(dy) > MOVE_THRESHOLD) hasMoved = true
      const c = clamp(startLeft + dx, startTop + dy)
      cartFloating.style.left = c.left + 'px'; cartFloating.style.top = c.top + 'px'
    }
    function endDrag() { isDragging = false }

    cartFloating.addEventListener('touchstart', e => {
  if (isInsideScrollableArea(e.target)) return
  startDrag(e.touches[0].clientX, e.touches[0].clientY)
}, { passive: true })

    cartFloating.addEventListener('touchmove', e => {
  if (!isDragging) return
  if (isInsideScrollableArea(e.target)) return

  e.preventDefault()
  onDrag(e.touches[0].clientX, e.touches[0].clientY)
}, { passive: false })

    cartFloating.addEventListener('touchend', endDrag)
    cartFloating.addEventListener('touchcancel', endDrag)
    cartFloating.addEventListener('mousedown', e => { e.preventDefault(); startDrag(e.clientX, e.clientY) })
    window.addEventListener('mousemove', e => onDrag(e.clientX, e.clientY))
    window.addEventListener('mouseup', endDrag)

    // Dropdown
    const cartDropdown = document.getElementById('cartDropdown')
    const closeDropdown = document.getElementById('closeCartDropdown')
    const goToOrderButton = document.querySelector('.dropdown-footer button')

    cartFloating.addEventListener('click', function (e) {
      if (hasMoved) { hasMoved = false; return }
      if (e.target.closest('.close-dropdown') || e.target.closest('.dropdown-footer button') || e.target.closest('.preview-item-remove')) return
      cartDropdown.style.display = cartDropdown.style.display === 'block' ? 'none' : 'block'
    })
    closeDropdown?.addEventListener('click', e => { e.stopPropagation(); cartDropdown.style.display = 'none' })
    goToOrderButton?.addEventListener('click', e => {
      e.stopPropagation()
      document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })
      cartDropdown.style.display = 'none'
    })
    document.addEventListener('click', e => { if (!cartFloating.contains(e.target)) cartDropdown.style.display = 'none' })
  })()

  // ========== WHATSAPP FLUTUANTE ARRASTÁVEL ==========
  ;(function () {
    const btn = document.getElementById('whatsappFloating')
    if (!btn) return
    let isDragging = false, hasMoved = false
    let startX, startY, startLeft, startTop
    const MOVE_THRESHOLD = 8

    function clamp(left, top) {
      const w = btn.offsetWidth, h = btn.offsetHeight
      return { left: Math.min(Math.max(left, 0), window.innerWidth - w), top: Math.min(Math.max(top, 0), window.innerHeight - h) }
    }
    function initPos() {
      const r = btn.getBoundingClientRect()
      const c = clamp(r.left, r.top)
      btn.style.left = c.left + 'px'; btn.style.top = c.top + 'px'
      btn.style.right = 'auto'; btn.style.bottom = 'auto'
    }
    if (document.readyState === 'complete') initPos(); else window.addEventListener('load', initPos)
    window.addEventListener('resize', () => {
      const c = clamp(parseFloat(btn.style.left) || 0, parseFloat(btn.style.top) || 0)
      btn.style.left = c.left + 'px'; btn.style.top = c.top + 'px'
    })

    function startDrag(cx, cy) {
      isDragging = true; hasMoved = false
      const r = btn.getBoundingClientRect()
      startLeft = r.left; startTop = r.top; startX = cx; startY = cy
    }
    function onDrag(cx, cy) {
      if (!isDragging) return
      const dx = cx - startX, dy = cy - startY
      if (Math.abs(dx) > MOVE_THRESHOLD || Math.abs(dy) > MOVE_THRESHOLD) hasMoved = true
      const c = clamp(startLeft + dx, startTop + dy)
      btn.style.left = c.left + 'px'; btn.style.top = c.top + 'px'
    }
    function endDrag() { isDragging = false }

    btn.addEventListener('touchstart', e => { startDrag(e.touches[0].clientX, e.touches[0].clientY) }, { passive: true })
    btn.addEventListener('touchmove', e => { e.preventDefault(); onDrag(e.touches[0].clientX, e.touches[0].clientY) }, { passive: false })
    btn.addEventListener('touchend', endDrag)
    btn.addEventListener('touchcancel', endDrag)
    btn.addEventListener('mousedown', e => { e.preventDefault(); startDrag(e.clientX, e.clientY) })
    window.addEventListener('mousemove', e => onDrag(e.clientX, e.clientY))
    window.addEventListener('mouseup', endDrag)
    btn.addEventListener('click', e => { if (hasMoved) { e.preventDefault(); e.stopPropagation(); hasMoved = false } })
  })()

  // SELETOR DE PAÍS
  initCountrySelector()

  // MENU HAMBURGER
  const navToggle = document.getElementById('navToggle')
  const mobileMenu = document.getElementById('mobileMenu')
  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', () => mobileMenu.classList.toggle('show'))
    document.querySelectorAll('.mobile-link').forEach(link => link.addEventListener('click', () => mobileMenu.classList.remove('show')))
  }

  // ENVIO WHATSAPP
  document.getElementById('sendWhatsApp').addEventListener('click', function () {
    const name = document.getElementById('name').value.trim()
    const address = document.getElementById('address').value.trim()
    const phoneRaw = document.getElementById('phone').value.trim()
    const phone = selectedCountry.dial + ' ' + phoneRaw
    const details = document.getElementById('details').value.trim()

    if (!name || !address || !phoneRaw || !details) {
      alert('Please fill in all the fields.\nPor favor, preencha todos os campos.\nPor favor, rellene todos los campos.')
      return
    }
    if (orderList.length === 0) { alert('Adicione itens ao pedido.'); return }

    let message = `*Pedido via Site*\n\n*Nome:* ${name}\n*Endereço:* ${address}\n*Telefone:* ${phone}\n*Detalhes:* ${details}\n\n*Itens:*\n`
    orderList.forEach(item => {
      const pName = translations[currentLang][item.productKey] || item.productKey
      const sName = translations[currentLang][item.sizeKey] || item.sizeKey
      message += `- ${item.qty}x ${pName} (${sName}) - €${(item.price * item.qty).toFixed(2)}\n`
    })
    const totalVal = orderList.reduce((acc, i) => acc + i.price * i.qty, 0)
    message += `\n*Total: €${totalVal.toFixed(2)}*`
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank')
  })
})