// ==========================
// Future Ka Formula
// script.js
// ==========================

// Smooth Scrolling
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){
            target.scrollIntoView({
                behavior:'smooth'
            });
        }
    });
});

// Contact Form
const form = document.querySelector("form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert(
"✅ Thank you for contacting Future Ka Formula!\n\nGaurav Srivastava will contact you shortly."
);

form.reset();

});

}

// Fade In Animation
const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll("section").forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(40px)";

section.style.transition="all .8s ease";

observer.observe(section);

});

// Floating WhatsApp Button
const whatsapp=document.createElement("a");

whatsapp.href="https://wa.me/919711615445";

whatsapp.target="_blank";

whatsapp.innerHTML="💬";

whatsapp.style.position="fixed";
whatsapp.style.bottom="20px";
whatsapp.style.right="20px";
whatsapp.style.width="60px";
whatsapp.style.height="60px";
whatsapp.style.borderRadius="50%";
whatsapp.style.background="#25D366";
whatsapp.style.color="#fff";
whatsapp.style.fontSize="32px";
whatsapp.style.display="flex";
whatsapp.style.justifyContent="center";
whatsapp.style.alignItems="center";
whatsapp.style.textDecoration="none";
whatsapp.style.boxShadow="0 8px 20px rgba(0,0,0,.25)";
whatsapp.style.zIndex="9999";

document.body.appendChild(whatsapp);

// Footer Year
const footer=document.querySelector("footer p");

if(footer){

footer.innerHTML="© "+new Date().getFullYear()+" Future Ka Formula | All Rights Reserved";

}
