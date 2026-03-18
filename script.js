/* script.js - versão com todas as atualizações */

// ========== CONFIGURAÇÕES ==========
const WHATSAPP_NUMBER = '353832023836'
const WHATSAPP_HEADER_MESSAGE = 'Hello! I would like to place an order:'

// ========== LISTA DE PEDIDOS ==========
let orderList = []
let total = 0

// ========== TRADUÇÕES ==========
const translations = {
  en: {
    tagline: "Coxinhas • Pastéis • Massas",
    menu_home: "Home",
    menu_order: "Orders",
    menu_contact: "Contact",
    slide1_title: "Traditional Coxinha",
    slide1_desc: "Crispy on the outside, creamy on the inside — order now for your party!",
    slide2_title: "Hot Pastels",
    slide2_desc: "Fillings: beef, cheese, chicken — and more.",
    slide3_title: "Made with love",
    slide3_desc: "Artisanal recipes and fresh ingredients.",
    slide4_title: "Party Combo",
    slide4_desc: "Build your combo and get a discount for large quantities.",
    order_title: "Place your order",
    order_note: "Prices may vary according to quantity and promotions. Check via WhatsApp.",
    contact_title: "Order via WhatsApp",
    label_name: "Full name",
    label_address: "Address",
    label_phone: "Phone",
    label_details: "Order details",
    finish_order: "Finish Order",
    payment_title: "Payment & Delivery",
    payment_bank: "Bank transfer",
    payment_bank_desc: "Transfer (Revolut etc.). Arrange with the owner.",
    payment_cash: "Cash",
    payment_cash_desc: "Cash on delivery or pickup.",
    payment_delivery: "Delivery / Pickup",
    payment_delivery_desc: "We deliver to your home or pick up locally.",
    follow_us: "Follow us",
    address_hours: "Address & Hours",
    address: "Dublin Areas",
    hours: "Mon–Sat: 08:00 — 19:00",
    contact: "Contact",
    email_label: "Email",
    phone_label: "Phone",
    company_name: "Dublinha",
    rights: "All rights reserved.",
    prod_frango_cremoso: "Creamy Chicken",
    desc_frango_cremoso: "Traditional coxinha with seasoned creamy chicken.",
    prod_queijo: "Cheese",
    desc_queijo: "Coxinha stuffed with melted cheese. Yummy!",
    prod_calabresa: "Calabresa",
    desc_calabresa: "Coxinha with seasoned calabresa sausage.",
    prod_frango_queijo: "Chicken with Cheese",
    desc_frango_queijo: "Chicken coxinha with creamy cheese.",
    prod_costela: "Rib",
    desc_costela: "Coxinha filled with shredded ribs.",
    prod_bisteca: "Bisteca",
    desc_bisteca: "Vegan coxinha filled with palm heart.",
    add_button: "Add",
    quick_kits: "Quick Kits",
    50: "📦 Party Kit 50 units",
    100: "Party Kit 100 units",
    selected_items: "Selected items",
    subtotal: "Subtotal",
    form_note: "By clicking, you will be redirected to WhatsApp with the pre-filled message. No data is stored on this site.",
    added_to_cart: "Item added to cart!",
  },
  pt: {
    tagline: "Coxinhas • Pastéis • Massas",
    menu_home: "Início",
    menu_order: "Pedidos",
    menu_contact: "Contato",
    slide1_title: "Coxinha Tradicional",
    slide1_desc: "Crocante por fora, cremosa por dentro — peça já para sua festa!",
    slide2_title: "Pastéis Quentes",
    slide2_desc: "Recheios: carne, queijo, frango — e muito mais.",
    slide3_title: "Feito com amor",
    slide3_desc: "Receitas artesanais e ingredientes frescos.",
    slide4_title: "Combo Festa",
    slide4_desc: "Monte o seu combo e garanta desconto para grandes quantidades.",
    order_title: "Faça seu pedido",
    order_note: "Os preços podem variar conforme quantidade e promoções. Consulte no WhatsApp.",
    contact_title: "Pedido via WhatsApp",
    label_name: "Nome completo",
    label_address: "Endereço",
    label_phone: "Telefone",
    label_details: "Detalhes do pedido",
    finish_order: "Finalizar Pedido",
    payment_title: "Pagamento e Entrega",
    payment_bank: "Transferência bancária",
    payment_bank_desc: "Transferência (Revolut etc.). Combine com o responsável.",
    payment_cash: "Dinheiro",
    payment_cash_desc: "Pagamento em dinheiro na entrega ou retirada.",
    payment_delivery: "Entrega / Retirada",
    payment_delivery_desc: "Entregamos em sua casa ou retirada local.",
    follow_us: "Siga-nos",
    address_hours: "Endereço & Horários",
    address: "Regiões de Dublin",
    hours: "Seg–Sáb: 08:00 — 19:00",
    contact: "Contato",
    email_label: "Email",
    phone_label: "Telefone",
    company_name: "Dublinha",
    rights: "Todos os direitos reservados.",
    prod_frango_cremoso: "Frango Cremoso",
    desc_frango_cremoso: "Coxinha tradicional com frango cremoso temperado.",
    prod_queijo: "Queijo",
    desc_queijo: "Coxinha recheada com queijo derretido. HMMMMMMM",
    prod_calabresa: "Calabresa",
    desc_calabresa: "Coxinha com recheio de calabresa temperada.",
    prod_frango_queijo: "Frango com Queijo",
    desc_frango_queijo: "Coxinha de frango com queijo cremoso.",
    prod_costela: "Costela",
    desc_costela: "Coxinha recheada com costela desfiada.",
    prod_bisteca: "Bisteca",
    desc_bisteca: "Coxinha vegana recheada com palmito.",
    add_button: "Adicionar",
    quick_kits: "Kits Rápidos",
    50: "📦 Kit Festa 50 unidades",
    100: "📦 Kit Festa 100 unidades",
    selected_items: "Itens selecionados",
    subtotal: "Subtotal",
    form_note: "Ao clicar, você será redirecionado para o WhatsApp com a mensagem pré-preenchida. Nenhum dado é armazenado neste site.",
    added_to_cart: "Item adicionado ao carrinho!",
  },
  es: {
    tagline: "Coxinhas • Pasteles • Masas",
    menu_home: "Inicio",
    menu_order: "Pedidos",
    menu_contact: "Contacto",
    slide1_title: "Coxinha Tradicional",
    slide1_desc: "Crujiente por fuera, cremosa por dentro — ¡pídelo ya para tu fiesta!",
    slide2_title: "Pasteles Calientes",
    slide2_desc: "Rellenos: carne, queso, pollo — y más.",
    slide3_title: "Hecho con amor",
    slide3_desc: "Recetas artesanales e ingredientes frescos.",
    slide4_title: "Combo Fiesta",
    slide4_desc: "Arma tu combo y obtén descuento por grandes cantidades.",
    order_title: "Haz tu pedido",
    order_note: "Los precios pueden variar según cantidad y promociones. Consulta por WhatsApp.",
    contact_title: "Pedido por WhatsApp",
    label_name: "Nombre completo",
    label_address: "Dirección",
    label_phone: "Teléfono",
    label_details: "Detalles del pedido",
    finish_order: "Finalizar pedido",
    payment_title: "Pago y Entrega",
    payment_bank: "Transferencia bancaria",
    payment_bank_desc: "Transferencia (Revolut etc.). Coordinar con el propietario.",
    payment_cash: "Efectivo",
    payment_cash_desc: "Pago en efectivo en entrega o recogida.",
    payment_delivery: "Entrega / Recogida",
    payment_delivery_desc: "Entregamos a domicilio o recogida local.",
    follow_us: "Síguenos",
    address_hours: "Dirección y Horarios",
    address: "Áreas de Dublín",
    hours: "Lun–Sáb: 08:00 — 19:00",
    contact: "Contacto",
    email_label: "Email",
    phone_label: "Teléfono",
    company_name: "Dublinha",
    rights: "Todos los derechos reservados.",
    prod_frango_cremoso: "Pollo Cremoso",
    desc_frango_cremoso: "Coxinha tradicional con pollo cremoso sazonado.",
    prod_queijo: "Queso",
    desc_queijo: "Coxinha rellena de queso derretido. ¡Ñam! ¡Ñam!",
    prod_calabresa: "Calabresa",
    desc_calabresa: "Coxinha con salchicha calabresa sazonada.",
    prod_frango_queijo: "Pollo con Queso",
    desc_frango_queijo: "Coxinha de pollo con queso cremoso.",
    prod_costela: "Costilla",
    desc_costela: "Coxinha rellena de costilla desmenuzada.",
    prod_bisteca: "Bisteca",
    desc_bisteca: "Coxinha vegana rellena de palmito.",
    add_button: "Añadir",
    quick_kits: "Kits Rápidos",
    50: "📦 Kit Fiesta 50 unidades",
    100: "📦 Kit Fiesta 100 unidades",
    selected_items: "Artículos seleccionados",
    subtotal: "Subtotal",
    form_note: "Al hacer clic, serás redirigido a WhatsApp con el mensaje prellenado. No se almacenan datos en este sitio.",
    added_to_cart: "¡Artículo añadido al carrito!",
  }
}

let currentLang = localStorage.getItem('lang') || 'en';

// ========== FUNÇÃO DE TRADUÇÃO ==========
function setLanguage(lang) {
  localStorage.setItem("lang", lang)
  document.documentElement.lang = lang
  currentLang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n")
    if (translations[lang] && translations[lang][key]) {
      el.innerText = translations[lang][key]
    }
  })

  document.querySelectorAll(".language-selector button").forEach(btn => {
    btn.classList.remove("active")
  })

  document.getElementById("lang-" + lang)?.classList.add("active")
  document.getElementById("mobile-lang-" + lang)?.classList.add("active")
}

// ========== TROCA DE IDIOMA ==========
function showToast(text) {
  const toast = document.getElementById('toastMessage');
  if (!toast) return;
  toast.textContent = text;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2000);
}

// ========== INICIALIZAÇÃO ==========
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('year').textContent = new Date().getFullYear()

  // idioma salvo
  let savedLang = localStorage.getItem("lang") || "en"
  setLanguage(savedLang)

  // ========== SWIPER ==========
  new Swiper('.mySwiper', {
    loop: true,
    speed: 800,
    autoplay: { delay: 4000 },
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
  })

  // ========== TAMANHO ==========
  document.querySelectorAll(".size-btn").forEach(btn => {
    btn.addEventListener("click", function() {
      const parent = this.parentElement
      parent.querySelectorAll(".size-btn").forEach(b => b.classList.remove("active"))
      this.classList.add("active")
      const price = this.dataset.price
      this.closest(".product").querySelector(".price-value").innerText = price
    })
  })

  // ========== CONTADOR ==========
  document.querySelectorAll(".qty-btn").forEach(btn => {
    btn.addEventListener("click", function() {
      const control = this.parentElement
      const qtyEl = control.querySelector(".qty")
      let qty = parseInt(qtyEl.innerText)
      if (this.classList.contains("plus")) qty++
      if (this.classList.contains("minus") && qty > 1) qty--
      qtyEl.innerText = qty
    })
  })

  // ========== ADICIONAR PRODUTO ==========
  document.querySelectorAll(".add-item").forEach(btn => {
    btn.addEventListener("click", function() {
      const product = this.closest(".product")
      const name = product.dataset.product
      const activeSize = product.querySelector(".size-btn.active")
      const size = activeSize.dataset.size
      const price = parseFloat(activeSize.dataset.price)
      const qty = parseInt(product.querySelector(".qty").innerText)

      const existing = orderList.find(item => item.name === name && item.size === size)
      if (existing) {
        existing.qty += qty
      } else {
        orderList.push({ name, size, price, qty })
      }

      product.classList.add("added")
      setTimeout(() => {
        product.classList.remove("added")
      }, 300)
      

      updateOrder()

      showToast(translations[currentLang].added_to_cart || 'Item adicionado!');
    })
  })

  // ========== KITS ==========
  document.querySelectorAll(".kit-btn").forEach(btn => {
    btn.addEventListener("click", function() {
      const kit = parseInt(this.dataset.kit)
      const existing = orderList.find(item => item.name === "Coxinha Kit")
      if (existing) {
        existing.qty += kit
      } else {
        orderList.push({
          name: "Coxinha Kit",
          size: "Mix",
          price: 2.20,
          qty: kit
        })
      }
      updateOrder()
    })
  })
    // Clique no carrinho flutuante leva ao formulário
  const cartFloating = document.getElementById('cartFloating');
  if (cartFloating) {
    cartFloating.addEventListener('click', function() {
      document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // ========== MINI CART ==========
    const viewCartBtn = document.getElementById("viewCartBtn")
  if (viewCartBtn) {
    viewCartBtn.addEventListener("click", function() {
      document.getElementById("contato").scrollIntoView({ behavior: "smooth" })
    })
  }

  // ========== ENVIO WHATSAPP ==========
  document.getElementById('sendWhatsApp').addEventListener('click', function() {
    const name = document.getElementById('name').value.trim();
    const address = document.getElementById('address').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const details = document.getElementById('details').value.trim();

    if (!name || !address || !phone || !details) {
      alert('Please fill in all the fields on the form.\nPor favor, preencha todos os campos do formulário.\nPor favor, rellene todos los campos del formulario.');
      return;
    }

    if (orderList.length === 0) {
      alert('Adicione itens ao pedido.');
      return;
    }

    let message = `*Pedido via Site*\n\n`;
    message += `*Nome:* ${name}\n`;
    message += `*Endereço:* ${address}\n`;
    message += `*Telefone:* ${phone}\n`;
    message += `*Detalhes adicionais:* ${details}\n\n`;
    message += `*Itens do pedido:*\n`;

    orderList.forEach(item => {
      message += `- ${item.qty}x ${item.name} (${item.size}) - €${(item.price * item.qty).toFixed(2)}\n`;
    });

    const total = orderList.reduce((acc, item) => acc + (item.price * item.qty), 0);
    message += `\n*Total: €${total.toFixed(2)}*`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  });

 // ========== WHATSAPP FLUTUANTE ARRASTÁVEL (com clique funcionando) ==========
(function() {
  const whatsappBtn = document.getElementById('whatsappFloating');
  if (!whatsappBtn) return;

  // Estado do arrasto
  let isDragging = false;
  let startX, startY;
  let startLeft, startTop;
  let hasMoved = false;

  // Threshold para considerar como movimento (aumentado para 8px)
  const MOVE_THRESHOLD = 8;

  // Função para garantir que o botão permaneça dentro da viewport
  function clampPosition(left, top) {
    const btnWidth = whatsappBtn.offsetWidth;
    const btnHeight = whatsappBtn.offsetHeight;
    const maxLeft = window.innerWidth - btnWidth;
    const maxTop = window.innerHeight - btnHeight;
    left = Math.min(Math.max(left, 0), maxLeft);
    top = Math.min(Math.max(top, 0), maxTop);
    return { left, top };
  }

  // Inicializa a posição convertendo right/bottom para left/top
  function initializePosition() {
    const rect = whatsappBtn.getBoundingClientRect();
    let newLeft = rect.left;
    let newTop = rect.top;
    const clamped = clampPosition(newLeft, newTop);
    whatsappBtn.style.left = clamped.left + 'px';
    whatsappBtn.style.top = clamped.top + 'px';
    whatsappBtn.style.right = 'auto';
    whatsappBtn.style.bottom = 'auto';
  }

  // Chama a inicialização após o carregamento total
  if (document.readyState === 'complete') {
    initializePosition();
  } else {
    window.addEventListener('load', initializePosition);
  }

  // Reajusta a posição se a janela for redimensionada
  window.addEventListener('resize', () => {
    const currentLeft = parseFloat(whatsappBtn.style.left) || 0;
    const currentTop = parseFloat(whatsappBtn.style.top) || 0;
    const clamped = clampPosition(currentLeft, currentTop);
    whatsappBtn.style.left = clamped.left + 'px';
    whatsappBtn.style.top = clamped.top + 'px';
  });

  // ----- Funções de arrasto -----
  function startDrag(clientX, clientY) {
    isDragging = true;
    hasMoved = false;  // reseta o flag de movimento
    const rect = whatsappBtn.getBoundingClientRect();
    startLeft = rect.left;
    startTop = rect.top;
    startX = clientX;
    startY = clientY;
  }

  function onDrag(clientX, clientY) {
    if (!isDragging) return;

    const dx = clientX - startX;
    const dy = clientY - startY;

    // Se o movimento ultrapassar o threshold, marca como arrasto
    if (Math.abs(dx) > MOVE_THRESHOLD || Math.abs(dy) > MOVE_THRESHOLD) {
      hasMoved = true;
    }

    let newLeft = startLeft + dx;
    let newTop = startTop + dy;

    const clamped = clampPosition(newLeft, newTop);
    whatsappBtn.style.left = clamped.left + 'px';
    whatsappBtn.style.top = clamped.top + 'px';
  }

  function endDrag() {
    isDragging = false;
    // Não resetamos hasMoved aqui porque ele será usado no clique.
    // O hasMoved será resetado no próximo startDrag.
  }

  // ----- Eventos Touch -----
  whatsappBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // evita rolagem da página
    const touch = e.touches[0];
    startDrag(touch.clientX, touch.clientY);
  }, { passive: false });

  whatsappBtn.addEventListener('touchmove', (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    onDrag(touch.clientX, touch.clientY);
  }, { passive: false });

  whatsappBtn.addEventListener('touchend', (e) => {
    endDrag();
    // Se não houve movimento e o clique não foi disparado (raro), forçamos a abertura do link
    if (!hasMoved) {
      // O navegador normalmente dispara o evento de click, mas se não disparar,
      // podemos simular o clique manualmente. No entanto, isso pode causar duplicidade.
      // Por segurança, deixamos o próprio evento click lidar com isso.
      // (O código abaixo é opcional e pode ser removido se o click funcionar)
      // whatsappBtn.click(); 
    }
  });

  whatsappBtn.addEventListener('touchcancel', endDrag);

  // ----- Eventos Mouse -----
  whatsappBtn.addEventListener('mousedown', (e) => {
    e.preventDefault();
    startDrag(e.clientX, e.clientY);
  });

  window.addEventListener('mousemove', (e) => {
    onDrag(e.clientX, e.clientY);
  });

  window.addEventListener('mouseup', endDrag);

  // ----- Impede a abertura do link se houve arrasto -----
  whatsappBtn.addEventListener('click', (e) => {
    if (hasMoved) {
      e.preventDefault();
      e.stopPropagation();
      // Reset hasMoved para garantir que o próximo clique sem arrasto funcione
      hasMoved = false;
    }
    // Se hasMoved for false, o link abre normalmente.
  });

})();

  // ========== MENU HAMBURGER ==========
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  navToggle.addEventListener('click', function() {
    mobileMenu.classList.toggle('show');
  });

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('show');
    });
  });
})

// ========== ATUALIZAR PEDIDO ==========
function updateOrder() {
  const container = document.getElementById("orderItems");
  container.innerHTML = "";
  total = 0;

  orderList.forEach((item, index) => {
    const subtotal = item.price * item.qty;
    total += subtotal;

    const token = document.createElement("div");
    token.className = "token";
    token.innerHTML = `
      <strong>${item.qty}x</strong> ${item.name} ${item.size} €${subtotal.toFixed(2)}
      <button onclick="removeItem(${index})">x</button>
    `;
    container.appendChild(token);
  });

  document.getElementById("orderTotal").innerText = total.toFixed(2);

  // Atualiza o preview do carrinho

  const preview = document.getElementById('cartItemsPreview');
if (preview) {
  preview.innerHTML = '';
  orderList.forEach(item => {
    const div = document.createElement('div');
    div.className = 'preview-item';
    div.innerHTML = `<span>${item.qty}x ${item.name} (${item.size})</span><span>€${(item.price * item.qty).toFixed(2)}</span>`;
    preview.appendChild(div);
  });
  document.getElementById('dropdownTotal').innerText = total.toFixed(2);
}

  // --- Atualiza o novo carrinho flutuante ---
  const cartBadge = document.getElementById('cartCountBadge');
  const cartSub = document.getElementById('cartSubtotalFloating');
  if (cartBadge) {
    let totalItems = orderList.reduce((acc, item) => acc + item.qty, 0);
    cartBadge.innerText = totalItems;
  }
  if (cartSub) {
    cartSub.innerText = '€' + total.toFixed(2);
  }

  // --- (Opcional) Atualiza elementos antigos, caso ainda existam ---
  const oldCartCount = document.getElementById("cartCount");
  const oldCartSubtotal = document.getElementById("cartSubtotal");
  if (oldCartCount) {
    let count = orderList.reduce((acc, item) => acc + item.qty, 0);
    oldCartCount.innerText = count + " items";
  }
  if (oldCartSubtotal) {
    oldCartSubtotal.innerText = "€" + total.toFixed(2);
  }
}

// ========== REMOVER ITEM ==========
function removeItem(index) {
  orderList.splice(index, 1)
  updateOrder()
}

// TOAST MESSAGE (função para mostrar mensagens temporárias)
function showToast(text) {
  const toast = document.getElementById('toastMessage');
  toast.textContent = text;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2000);
}

// ========== BOTAO DE FECHAR OS PRODUTOS DO CARRINHO ==========
document.getElementById('closeCartDropdown').addEventListener('click', function() {
  document.getElementById('cartDropdown').style.display = 'none';
});