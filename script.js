/* ===========================
   Typing Effect
=========================== */

const typingText = "Professor • Scientific Content Creator";
const title = document.querySelector("header p");

let index = 0;

function typing() {

    if(index < typingText.length){

        title.textContent += typingText.charAt(index);
        index++;

        setTimeout(typing,70);

    }

}

title.textContent="";
typing();

/* ===========================
   Scroll Reveal
=========================== */

const reveals = document.querySelectorAll("section");

function revealSections(){

    const trigger = window.innerHeight * 0.85;

    reveals.forEach(section=>{

        const top = section.getBoundingClientRect().top;

        if(top < trigger){

            section.style.opacity="1";
            section.style.transform="translateY(0)";

        }

    });

}

reveals.forEach(section=>{

    section.style.opacity="0";
    section.style.transform="translateY(80px)";
    section.style.transition="1s";

});

window.addEventListener("scroll",revealSections);
revealSections();

/* ===========================
   Progress Bar
=========================== */

const progress = document.createElement("div");

progress.style.position="fixed";
progress.style.top="0";
progress.style.left="0";
progress.style.height="5px";
progress.style.background="cyan";
progress.style.width="0%";
progress.style.zIndex="9999";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

let totalHeight=document.documentElement.scrollHeight-window.innerHeight;

let progressHeight=(window.pageYOffset/totalHeight)*100;

progress.style.width=progressHeight+"%";

});

/* ===========================
   Back To Top Button
=========================== */

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.style.position="fixed";
topBtn.style.bottom="30px";
topBtn.style.right="30px";
topBtn.style.width="55px";
topBtn.style.height="55px";
topBtn.style.borderRadius="50%";
topBtn.style.background="cyan";
topBtn.style.border="none";
topBtn.style.cursor="pointer";
topBtn.style.fontSize="22px";
topBtn.style.display="none";
topBtn.style.boxShadow="0 0 20px cyan";
topBtn.style.zIndex="999";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

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

/* ===========================
   Navbar Active
=========================== */

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/* ===========================
   Contact Form
=========================== */

const form=document.querySelector("form");

form.addEventListener("submit",(e)=>{

e.preventDefault();

const nama=form.querySelector("input[type=text]").value;
const email=form.querySelector("input[type=email]").value;
const pesan=form.querySelector("textarea").value;

if(nama===""||email===""||pesan===""){

alert("Mohon lengkapi semua data.");

return;

}

alert("Terima kasih, pesan berhasil dikirim!");

form.reset();

});

/* ===========================
   Floating Particles
=========================== */

for(let i=0;i<35;i++){

const particle=document.createElement("span");

particle.style.position="fixed";
particle.style.width="4px";
particle.style.height="4px";
particle.style.background="cyan";
particle.style.borderRadius="50%";

particle.style.left=Math.random()*100+"vw";
particle.style.top=Math.random()*100+"vh";

particle.style.opacity=Math.random();

particle.style.pointerEvents="none";

particle.style.animation=`float ${5+Math.random()*10}s linear infinite`;

document.body.appendChild(particle);

}

const style=document.createElement("style");

style.innerHTML=`

@keyframes float{

0%{

transform:translateY(0px);

}

100%{

transform:translateY(-120vh);

}

}

.active{

background:cyan !important;
color:#07121f !important;

}

`;

document.head.appendChild(style);

/* ===========================
   Background Parallax
=========================== */

window.addEventListener("mousemove",(e)=>{

let x=e.clientX/window.innerWidth;
let y=e.clientY/window.innerHeight;

document.body.style.backgroundPosition=
`${x*40}px ${y*40}px`;

});