/* script.js - versão com tokens agrupados + traduções completas */

// ========== CONFIGURAÇÕES ==========
const WHATSAPP_NUMBER = '353832023836'
const WHATSAPP_HEADER_MESSAGE = 'Hello! I would like to place an order:'

// ========== LISTA DE PEDIDOS ==========
let orderList=[]
let total=0

// ========== TRADUÇÕES ==========
const translations = {

en:{
tagline:"Coxinhas • Pastéis • Massas",
menu_home:"Home",
menu_order:"Orders",
menu_contact:"Contact",
order_title:"Place your order",
order_note:"Prices may vary according to quantity and promotions. Check via WhatsApp.",
contact_title:"Order via WhatsApp",
label_name:"Full name",
label_address:"Address",
label_phone:"Phone",
label_details:"Order details",
finish_order:"Finish Order",
payment_title:"Payment & Delivery",
payment_bank:"Bank transfer",
payment_bank_desc:"Transfer (Revolut etc.). Arrange with the owner.",
payment_cash:"Cash",
payment_cash_desc:"Cash on delivery or pickup.",
payment_delivery:"Delivery / Pickup",
payment_delivery_desc:"We deliver to your home or pick up locally.",
follow_us:"Follow us",
address_hours:"Address & Hours",
address:"Dublin Areas",
hours:"Mon–Sat: 08:00 — 19:00",
contact:"Contact",
email_label:"Email",
phone_label:"Phone",
company_name:"Dublinha",
rights:"All rights reserved."
},

pt:{
tagline:"Coxinhas • Pastéis • Massas",
menu_home:"Início",
menu_order:"Pedidos",
menu_contact:"Contato",
order_title:"Faça seu pedido",
order_note:"Os preços podem variar conforme quantidade e promoções. Consulte no WhatsApp.",
contact_title:"Pedido via WhatsApp",
label_name:"Nome completo",
label_address:"Endereço",
label_phone:"Telefone",
label_details:"Detalhes do pedido",
finish_order:"Finalizar Pedido",
payment_title:"Pagamento e Entrega",
payment_bank:"Transferência bancária",
payment_bank_desc:"Transferência (Revolut etc.). Combine com o responsável.",
payment_cash:"Dinheiro",
payment_cash_desc:"Pagamento em dinheiro na entrega ou retirada.",
payment_delivery:"Entrega / Retirada",
payment_delivery_desc:"Entregamos em sua casa ou retirada local.",
follow_us:"Siga-nos",
address_hours:"Endereço & Horários",
address:"Regiões de Dublin",
hours:"Seg–Sáb: 08:00 — 19:00",
contact:"Contato",
email_label:"Email",
phone_label:"Telefone",
company_name:"Dublinha",
rights:"Todos os direitos reservados."
},

es:{
tagline:"Coxinhas • Pasteles • Masas",
menu_home:"Inicio",
menu_order:"Pedidos",
menu_contact:"Contacto",
order_title:"Haz tu pedido",
order_note:"Los precios pueden variar según cantidad y promociones. Consulta por WhatsApp.",
contact_title:"Pedido por WhatsApp",
label_name:"Nombre completo",
label_address:"Dirección",
label_phone:"Teléfono",
label_details:"Detalles del pedido",
finish_order:"Finalizar pedido",
payment_title:"Pago y Entrega",
payment_bank:"Transferencia bancaria",
payment_bank_desc:"Transferencia (Revolut etc.). Coordinar con el propietario.",
payment_cash:"Efectivo",
payment_cash_desc:"Pago en efectivo en entrega o recogida.",
payment_delivery:"Entrega / Recogida",
payment_delivery_desc:"Entregamos a domicilio o recogida local.",
follow_us:"Síguenos",
address_hours:"Dirección y Horarios",
address:"Áreas de Dublín",
hours:"Lun–Sáb: 08:00 — 19:00",
contact:"Contacto",
email_label:"Email",
phone_label:"Teléfono",
company_name:"Dublinha",
rights:"Todos los derechos reservados."
}

}

// ========== FUNÇÃO DE TRADUÇÃO ==========
function setLanguage(lang){

localStorage.setItem("lang",lang)

document.documentElement.lang=lang

document.querySelectorAll("[data-i18n]").forEach(el=>{

const key=el.getAttribute("data-i18n")

if(translations[lang] && translations[lang][key]){
el.innerText=translations[lang][key]
}

})

document.querySelectorAll(".language-selector button").forEach(btn=>{
btn.classList.remove("active")
})

document.getElementById("lang-"+lang)?.classList.add("active")
document.getElementById("mobile-lang-"+lang)?.classList.add("active")

}

// ========== INICIALIZAÇÃO ==========
document.addEventListener('DOMContentLoaded',function(){

document.getElementById('year').textContent=new Date().getFullYear()

// idioma salvo
let savedLang=localStorage.getItem("lang") || "en"
setLanguage(savedLang)

// ========== SWIPER ==========
new Swiper('.mySwiper',{
loop:true,
speed:800,
autoplay:{delay:4000},
slidesPerView:1,
spaceBetween:10,
pagination:{el:'.swiper-pagination',clickable:true},
navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'}
})

// ========== TAMANHO ==========
document.querySelectorAll(".size-btn").forEach(btn=>{

btn.addEventListener("click",function(){

const parent=this.parentElement

parent.querySelectorAll(".size-btn").forEach(b=>b.classList.remove("active"))

this.classList.add("active")

const price=this.dataset.price

this.closest(".product").querySelector(".price-value").innerText=price

})

})

// ========== CONTADOR ==========
document.querySelectorAll(".qty-btn").forEach(btn=>{

btn.addEventListener("click",function(){

const control=this.parentElement
const qtyEl=control.querySelector(".qty")

let qty=parseInt(qtyEl.innerText)

if(this.classList.contains("plus")) qty++

if(this.classList.contains("minus") && qty>1) qty--

qtyEl.innerText=qty

})

})

// ========== ADICIONAR PRODUTO ==========
document.querySelectorAll(".add-item").forEach(btn=>{

btn.addEventListener("click",function(){

const product=this.closest(".product")

const name=product.dataset.product

const activeSize=product.querySelector(".size-btn.active")

const size=activeSize.dataset.size
const price=parseFloat(activeSize.dataset.price)

const qty=parseInt(product.querySelector(".qty").innerText)

const existing=orderList.find(item=>item.name===name && item.size===size)

if(existing){
existing.qty+=qty
}else{
orderList.push({name,size,price,qty})
}

product.classList.add("added")

setTimeout(()=>{
product.classList.remove("added")
},300)

updateOrder()

})

})

// ========== KITS ==========
document.querySelectorAll(".kit-btn").forEach(btn=>{

btn.addEventListener("click",function(){

const kit=parseInt(this.dataset.kit)

const existing=orderList.find(item=>item.name==="Coxinha Kit")

if(existing){
existing.qty+=kit
}else{
orderList.push({
name:"Coxinha Kit",
size:"Mix",
price:2.20,
qty:kit
})
}

updateOrder()

})

})

// ========== MINI CART ==========
const viewCartBtn=document.getElementById("viewCartBtn")

if(viewCartBtn){

viewCartBtn.addEventListener("click",function(){

document.getElementById("contato").scrollIntoView({
behavior:"smooth"
})

})

}

})

// ========== ATUALIZAR PEDIDO ==========
function updateOrder(){

const container=document.getElementById("orderItems")

container.innerHTML=""

total=0

orderList.forEach((item,index)=>{

const subtotal=item.price*item.qty

total+=subtotal

const token=document.createElement("div")

token.className="token"

token.innerHTML=`
<strong>${item.qty}x</strong> ${item.name} ${item.size} €${subtotal.toFixed(2)}
<button onclick="removeItem(${index})">x</button>
`

container.appendChild(token)

})

document.getElementById("orderTotal").innerText=total.toFixed(2)

const cartCount=document.getElementById("cartCount")
const cartSubtotal=document.getElementById("cartSubtotal")

if(cartCount){

let count=0
orderList.forEach(i=>count+=i.qty)

cartCount.innerText=count+" items"

}

if(cartSubtotal){
cartSubtotal.innerText="€"+total.toFixed(2)
}

}

// ========== REMOVER ITEM ==========
function removeItem(index){

orderList.splice(index,1)

updateOrder()

}