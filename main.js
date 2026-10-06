
// Sincere Seekers Revival Labour
// WhatsApp number in international format without the leading + sign.
const WHATSAPP_NUMBER = "2347039238501";
const waMessage = encodeURIComponent("Hello Sincere Seekers Revival Labour, I would like to know more about your ministry and activities.");

document.querySelectorAll("[data-whatsapp]").forEach(el=>{
  el.href=`https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`;
});

const menu=document.querySelector(".menu"), nav=document.querySelector("nav");
if(menu && nav){menu.addEventListener("click",()=>nav.classList.toggle("open"));}
