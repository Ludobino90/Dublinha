/* script.js - Versão final com tradução completa de todos os textos */

// ========== CONFIGURAÇÕES ==========
const WHATSAPP_NUMBER = '353832023836'; // Número para Irlanda (exemplo)
const WHATSAPP_HEADER_MESSAGE = 'Hello! I would like to place an order:';

// ========== TRADUÇÕES ==========
const translations = {
  en: {
    // Menu
    menu_home: "Home",
    menu_order: "Orders",
    menu_contact: "Contact",
    tagline: "Coxinhas • Pastéis • Massas",
    // Seção de encomendas
    order_title: "Place your order",
    order_note: "Prices may vary according to quantity and promotions. Check via WhatsApp.",
    contact_title: "Order via WhatsApp",
    label_name: "Full name",
    label_address: "Address (street, number, etc.)",
    label_phone: "Phone (with area code)",
    label_details: "Order details",
    finish_order: "Finish Order",
    form_note: "By clicking, you will be redirected to WhatsApp with the pre-filled message. No data is stored on this site.",
    // Produtos
    prod1_name: "Creamy chicken",
    prod1_desc: "Creamy chicken coxinha with catupiry — crispy dough, juicy filling.",
    prod2_name: "Chicken with cheese",
    prod2_desc: "Chicken coxinha with cheese pieces, balanced and tasty.",
    prod3_name: "Calabresa",
    prod3_desc: "Calabresa sausage pastel with onion and special seasoning.",
    prod4_name: "Ribs",
    prod4_desc: "Savory filled with shredded and seasoned ribs.",
    unit: "unit",
    // Carrossel
    slide1_title: "Traditional Coxinha",
    slide1_desc: "Crispy on the outside, creamy inside — order for your party!",
    slide2_title: "Hot Pastels",
    slide2_desc: "Fillings: beef, cheese, chicken — and more.",
    slide3_title: "Made with love",
    slide3_desc: "Homemade recipes and fresh ingredients.",
    slide4_title: "Party Combo",
    slide4_desc: "Create your combo and get a discount for large quantities.",
    // Pagamento
    payment_title: "Payment & Delivery",
    payment_bank: "Bank transfer",
    payment_bank_desc: "PIX / Transfer (Revolut etc.). Arrange with the owner.",
    payment_cash: "Cash",
    payment_cash_desc: "Cash on delivery or pickup.",
    payment_delivery: "Delivery / Pickup",
    payment_delivery_desc: "We deliver to your home or pick up locally. Check delivery fee.",
    // Rodapé
    follow_us: "Follow us",
    address_hours: "Address & Hours",
    address: "123 Example St — Dublin",
    hours: "Mon–Sat: 08:00 — 19:00",
    contact: "Contact",
    email_label: "Email",
    phone_label: "Phone",
    company_name: "Salgados & Cia",
    rights: "All rights reserved."
  },
  pt: {
    menu_home: "Início",
    menu_order: "Encomendas",
    menu_contact: "Contato",
    tagline: "Coxinhas • Pastéis • Massas",
    order_title: "Faça sua encomenda",
    order_note: "Valores podem variar conforme quantidade e promoções. Consulte pelo WhatsApp.",
    contact_title: "Pedido via WhatsApp",
    label_name: "Nome completo",
    label_address: "Endereço (rua, número, etc.)",
    label_phone: "Telefone (com DDD)",
    label_details: "Detalhes do pedido",
    finish_order: "Finalizar pedido",
    form_note: "Ao clicar, você será redirecionado para o WhatsApp com a mensagem preenchida. Nenhum dado é armazenado.",
    prod1_name: "Frango cremoso",
    prod1_desc: "Coxinha de frango cremoso com catupiry — massa crocante, recheio suculento.",
    prod2_name: "Frango com queijo",
    prod2_desc: "Coxinha de frango com pedaços de queijo, equilibrado e saboroso.",
    prod3_name: "Calabresa",
    prod3_desc: "Pastel de calabresa com cebola e tempero especial.",
    prod4_name: "Costela",
    prod4_desc: "Salgado recheado com costela desfiada e temperada.",
    unit: "unidade",
    slide1_title: "Coxinha Tradicional",
    slide1_desc: "Crocante por fora, cremosa por dentro — peça já para sua festa!",
    slide2_title: "Pastéis Quentes",
    slide2_desc: "Recheios: carne, queijo, frango — e muito mais.",
    slide3_title: "Feito com amor",
    slide3_desc: "Receitas artesanais e ingredientes frescos.",
    slide4_title: "Combo Festa",
    slide4_desc: "Monte o seu combo e garanta desconto para grandes quantidades.",
    payment_title: "Pagamento & Entrega",
    payment_bank: "Transferência bancária",
    payment_bank_desc: "PIX / Transferência (Revolut etc.). Combine com o proprietário.",
    payment_cash: "Dinheiro",
    payment_cash_desc: "Pagamento em dinheiro na entrega ou retirada.",
    payment_delivery: "Delivery / Retirada",
    payment_delivery_desc: "Entregamos em sua casa ou retire no local. Consulte taxa de entrega.",
    follow_us: "Siga-nos",
    address_hours: "Endereço & Horário",
    address: "Rua Exemplo, 123 — Dublin",
    hours: "Seg–Sáb: 08:00 — 19:00",
    contact: "Contato",
    email_label: "Email",
    phone_label: "Telefone",
    company_name: "Salgados & Cia",
    rights: "Todos os direitos reservados."
  },
  es: {
    menu_home: "Inicio",
    menu_order: "Pedidos",
    menu_contact: "Contacto",
    tagline: "Coxinhas • Pasteles • Masas",
    order_title: "Haz tu pedido",
    order_note: "Los precios pueden variar según la cantidad y promociones. Consulta por WhatsApp.",
    contact_title: "Pedido por WhatsApp",
    label_name: "Nombre completo",
    label_address: "Dirección (calle, número, etc.)",
    label_phone: "Teléfono (con código de área)",
    label_details: "Detalles del pedido",
    finish_order: "Finalizar pedido",
    form_note: "Al hacer clic, serás redirigido a WhatsApp con el mensaje prellenado. No se almacenan datos.",
    prod1_name: "Pollo cremoso",
    prod1_desc: "Coxinha de pollo cremoso con catupiry — masa crujiente, relleno jugoso.",
    prod2_name: "Pollo con queso",
    prod2_desc: "Coxinha de pollo con trozos de queso, equilibrado y sabroso.",
    prod3_name: "Calabresa",
    prod3_desc: "Pastel de salchicha calabresa con cebolla y condimento especial.",
    prod4_name: "Costilla",
    prod4_desc: "Relleno de costilla desmenuzada y sazonada.",
    unit: "unidad",
    slide1_title: "Coxinha Tradicional",
    slide1_desc: "Crujiente por fuera, cremosa por dentro — ¡pide ya para tu fiesta!",
    slide2_title: "Pasteles Calientes",
    slide2_desc: "Rellenos: carne, queso, pollo — y más.",
    slide3_title: "Hecho con amor",
    slide3_desc: "Recetas caseras e ingredientes frescos.",
    slide4_title: "Combo Fiesta",
    slide4_desc: "Arma tu combo y obtén descuento por grandes cantidades.",
    payment_title: "Pago & Entrega",
    payment_bank: "Transferencia bancaria",
    payment_bank_desc: "PIX / Transferencia (Revolut etc.). Acuerda con el propietario.",
    payment_cash: "Efectivo",
    payment_cash_desc: "Pago en efectivo al recibir o retirar.",
    payment_delivery: "Delivery / Retiro",
    payment_delivery_desc: "Entregamos a domicilio o retira localmente. Consulta tarifa.",
    follow_us: "Síguenos",
    address_hours: "Dirección & Horario",
    address: "Calle Ejemplo, 123 — Dublín",
    hours: "Lun–Sáb: 08:00 — 19:00",
    contact: "Contacto",
    email_label: "Correo",
    phone_label: "Teléfono",
    company_name: "Salgados & Cia",
    rights: "Todos los derechos reservados."
  }
};

// ========== FUNÇÃO DE TRADUÇÃO ==========
function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang; // atualiza atributo lang do HTML

  // Atualiza todos os elementos com data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });

  // Atualiza classe active nos botões de idioma (desktop e mobile)
  document.querySelectorAll(".language-selector button").forEach(btn => {
    btn.classList.remove("active");
  });
  document.getElementById("lang-" + lang)?.classList.add("active");
  document.getElementById("mobile-lang-" + lang)?.classList.add("active");
}

// ========== INICIALIZAÇÃO ==========
document.addEventListener('DOMContentLoaded', function () {
  // Atualiza ano do rodapé
  document.getElementById('year').textContent = new Date().getFullYear();

  // Inicializa Swiper
  const swiper = new Swiper('.mySwiper', {
    loop: true,
    speed: 800,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // Formulário WhatsApp
  const sendBtn = document.getElementById('sendWhatsApp');
  sendBtn.addEventListener('click', function () {
    const name = document.getElementById('name').value.trim();
    const address = document.getElementById('address').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const details = document.getElementById('details').value.trim();

    if (!name || !address || !phone || !details) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    const msgLines = [];
    if (WHATSAPP_HEADER_MESSAGE) msgLines.push(WHATSAPP_HEADER_MESSAGE);
    msgLines.push('');
    msgLines.push(`*Name:* ${name}`);
    msgLines.push(`*Address:* ${address}`);
    msgLines.push(`*Phone:* ${phone}`);
    msgLines.push(`*Order:* ${details}`);
    msgLines.push('');
    msgLines.push('Please confirm availability and time.');

    const message = encodeURIComponent(msgLines.join('\n'));
    const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(waLink, '_blank');
  });

  // Mobile menu toggle
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  navToggle.addEventListener('click', () => {
    const open = mobileMenu.style.display === 'flex';
    mobileMenu.style.display = open ? 'none' : 'flex';
  });

  // Fecha menu mobile ao clicar em link
  document.querySelectorAll('.mobile-link').forEach(a => {
    a.addEventListener('click', () => {
      mobileMenu.style.display = 'none';
    });
  });

  // Back to top
  const backToTop = document.getElementById('backToTop');
  backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // WhatsApp flutuante (link padrão)
  const whatsappFloating = document.getElementById('whatsappFloating');
  whatsappFloating.addEventListener('click', function (e) {
    e.preventDefault();
    const defaultMsg = encodeURIComponent('Hello! I want information about ordering and delivery.');
    const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${defaultMsg}`;
    window.open(link, '_blank');
  });

  // Inicializa idioma (padrão: 'en')
  let savedLang = localStorage.getItem("lang") || "en";
  setLanguage(savedLang);

  // Torna o ícone do WhatsApp arrastável
  makeElementDraggable(whatsappFloating, { constrainToViewport: true });
});

// ========== FUNÇÃO ARRASTAR ==========
function makeElementDraggable(el, options = {}) {
  options = Object.assign({ constrainToViewport: true }, options);

  let isPointerDown = false;
  let startX = 0, startY = 0;
  let elStartLeft = 0, elStartTop = 0;

  function getComputedPos() {
    const rect = el.getBoundingClientRect();
    return { left: rect.left, top: rect.top, width: rect.width, height: rect.height };
  }

  function setPosition(left, top) {
    if (options.constrainToViewport) {
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
      const rect = el.getBoundingClientRect();
      const w = rect.width, h = rect.height;
      left = Math.min(Math.max(6, left), vw - w - 6);
      top = Math.min(Math.max(6, top), vh - h - 6);
    }
    el.style.left = `${left}px`;
    el.style.top = `${top}px`;
    el.style.right = 'auto';
    el.style.bottom = 'auto';
    el.style.position = 'fixed';
  }

  if (window.PointerEvent) {
    el.addEventListener('pointerdown', pointerDown);
    window.addEventListener('pointermove', pointerMove);
    window.addEventListener('pointerup', pointerUp);
    el.addEventListener('dragstart', e => e.preventDefault());
  } else {
    el.addEventListener('mousedown', pointerDown);
    window.addEventListener('mousemove', pointerMove);
    window.addEventListener('mouseup', pointerUp);
    el.addEventListener('touchstart', pointerDown, { passive: false });
    window.addEventListener('touchmove', pointerMove, { passive: false });
    window.addEventListener('touchend', pointerUp);
  }

  function pointerDown(e) {
    isPointerDown = true;
    el.style.transition = 'none';
    const pos = getComputedPos();
    elStartLeft = pos.left;
    elStartTop = pos.top;

    if (e.touches && e.touches[0]) {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    } else {
      startX = e.clientX;
      startY = e.clientY;
      e.preventDefault?.();
    }

    el.style.transform = 'scale(1.03)';
    el.style.boxShadow = '0 18px 36px rgba(0,0,0,0.2)';
  }

  function pointerMove(e) {
    if (!isPointerDown) return;
    let clientX, clientY;
    if (e.touches && e.touches[0]) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }
    const dx = clientX - startX;
    const dy = clientY - startY;
    const newLeft = elStartLeft + dx;
    const newTop = elStartTop + dy;

    setPosition(newLeft, newTop);
    if (e.cancelable) e.preventDefault();
  }

  function pointerUp() {
    if (!isPointerDown) return;
    isPointerDown = false;
    el.style.transition = 'all 180ms ease';
    el.style.transform = 'scale(1)';
    el.style.boxShadow = '';
  }

  function setInitialPosition() {
    const rect = el.getBoundingClientRect();
    const curLeft = el.style.left;
    const curTop = el.style.top;
    if (!curLeft && !curTop) {
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
      const left = vw - rect.width - 18;
      const top = vh - rect.height - 18;
      setPosition(left, top);
    }
  }
  setTimeout(setInitialPosition, 50);
}