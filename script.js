/* script.js - Versão final corrigida com tokens agrupados e traduções completas */

// ========== CONFIGURAÇÕES ==========
const WHATSAPP_NUMBER = '353832023836';
const WHATSAPP_HEADER_MESSAGE = 'Hello! I would like to place an order:';

// ========== LISTA DE PEDIDOS ==========
let orderList=[]
let total=0

// ========== TRADUÇÕES ==========
const translations = window.translations || {}

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

// ========== SWIPER ==========
const swiper=new Swiper('.mySwiper',{
loop:true,
speed:800,
autoplay:{
delay:4000,
disableOnInteraction:false,
pauseOnMouseEnter:true
},
slidesPerView:1,
spaceBetween:10,
pagination:{
el:'.swiper-pagination',
clickable:true
},
navigation:{
nextEl:'.swiper-button-next',
prevEl:'.swiper-button-prev'
}
})

// ========== FORM WHATSAPP ==========
const sendBtn=document.getElementById('sendWhatsApp')

sendBtn.addEventListener('click',function(){

const name=document.getElementById('name').value.trim()
const address=document.getElementById('address').value.trim()
const phone=document.getElementById('phone').value.trim()
const details=document.getElementById('details').value.trim()

if(!name || !address || !phone || !details){
alert('Please fill in all fields before submitting.')
return
}

const msgLines=[]

if(WHATSAPP_HEADER_MESSAGE) msgLines.push(WHATSAPP_HEADER_MESSAGE)

msgLines.push("")
msgLines.push(`*Name:* ${name}`)
msgLines.push(`*Address:* ${address}`)
msgLines.push(`*Phone:* ${phone}`)
msgLines.push("*Items:*")

orderList.forEach(item=>{

msgLines.push(`• ${item.qty}x ${item.name} ${item.size} €${(item.price*item.qty).toFixed(2)}`)

})

msgLines.push("")
msgLines.push(`Subtotal: €${total.toFixed(2)}`)

msgLines.push("")
msgLines.push(`Notes: ${details}`)

msgLines.push("")
msgLines.push("Please confirm availability and time.")

const message=encodeURIComponent(msgLines.join('\n'))

const waLink=`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`

window.open(waLink,'_blank')

})

// ========== MENU MOBILE ==========
const navToggle=document.getElementById('navToggle')
const mobileMenu=document.getElementById('mobileMenu')

navToggle.addEventListener('click',()=>{

const open=mobileMenu.style.display==='flex'
mobileMenu.style.display=open?'none':'flex'

})

document.querySelectorAll('.mobile-link').forEach(a=>{
a.addEventListener('click',()=>{
mobileMenu.style.display='none'
})
})

// ========== BACK TO TOP ==========
const backToTop=document.getElementById('backToTop')

backToTop.addEventListener('click',(e)=>{
e.preventDefault()
window.scrollTo({top:0,behavior:'smooth'})
})

// ========== WHATSAPP FLOAT ==========
const whatsappFloating=document.getElementById('whatsappFloating')

whatsappFloating.addEventListener('click',function(e){

e.preventDefault()

const defaultMsg=encodeURIComponent('Hello! I want information about ordering and delivery.')

window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${defaultMsg}`,'_blank')

})

// ========== IDIOMA ==========
let savedLang=localStorage.getItem("lang") || "en"
setLanguage(savedLang)

// ========== SISTEMA TAMANHO ==========
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

// verifica se item já existe
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