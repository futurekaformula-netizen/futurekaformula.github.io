// ======================================
// Future Ka Formula
// Version 2.0
// ======================================

// Smooth Navigation
document.querySelectorAll('nav a').forEach(anchor => {

anchor.addEventListener('click', function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute('href'));

if(target){

target.scrollIntoView({

behavior:'smooth'

});

}

});

});


// ===========================
// Sticky Header Shadow
// ===========================

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.boxShadow="0 8px 20px rgba(0,0,0,.2)";

}else{

header.style.boxShadow="none";

}

});


// ===========================
// Counter Animation
// ===========================

const counters=document.querySelectorAll(".trust h2");

counters.forEach(counter=>{

const update=()=>{

const target=parseInt(counter.innerText);

let count=+counter.getAttribute("data-count")||0;

const increment=Math.ceil(target/60);

if(count<target){

count+=increment;

counter.setAttribute("data-count",count);

counter.innerText=count+(counter.innerText.includes("%")?"%":"+");

setTimeout(update,25);

}else{

counter.innerText=counter.innerText;

}

};

update();

});


// ===========================
// Fade Animation
// ===========================

const observer=new IntersectionObserver(entries=>{

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


// ===========================
// Form Submit
// ===========================

const form=document.getElementById("leadForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("🎉 Thank You!\n\nYour request has been received.\n\nGaurav Srivastava will contact you shortly.");

form.reset();

});

}


// ===========================
// Floating WhatsApp
// ===========================

const whatsapp=document.createElement("a");

whatsapp.href="https://wa.me/919711615445";

whatsapp.target="_blank";

whatsapp.innerHTML="💬";

whatsapp.title="Chat on WhatsApp";

whatsapp.style.cssText=`
position:fixed;
right:20px;
bottom:20px;
width:60px;
height:60px;
background:#25D366;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
font-size:30px;
text-decoration:none;
color:#fff;
box-shadow:0 5px 15px rgba(0,0,0,.3);
z-index:999;
`;

document.body.appendChild(whatsapp);


// ===========================
// Floating Call Button
// ===========================

const call=document.createElement("a");

call.href="tel:+919711615445";

call.innerHTML="📞";

call.title="Call Now";

call.style.cssText=`
position:fixed;
right:20px;
bottom:95px;
width:60px;
height:60px;
background:#002b5b;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
font-size:28px;
text-decoration:none;
color:white;
box-shadow:0 5px 15px rgba(0,0,0,.3);
z-index:999;
`;

document.body.appendChild(call);


// ===========================
// Back To Top Button
// ===========================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.style.cssText=`
position:fixed;
left:20px;
bottom:20px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#FFD700;
font-size:24px;
cursor:pointer;
display:none;
z-index:999;
`;

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


// ===========================
// Footer Year
// ===========================

const year=document.querySelector("footer p");

if(year){

year.innerHTML="© "+new Date().getFullYear()+" Future Ka Formula | All Rights Reserved";

  }
