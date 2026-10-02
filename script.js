const menu=document.querySelector(".menu"),links=document.querySelector(".nav-links");menu?.addEventListener("click",()=>links.classList.toggle("open"));document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("open")));
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("visible")),{threshold:.12});document.querySelectorAll(".reveal").forEach(e=>io.observe(e));
const progress=document.querySelector(".scroll-progress");window.addEventListener("scroll",()=>{const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(scrollY/max*100)+"%"});
const glow=document.querySelector(".cursor-glow");window.addEventListener("pointermove",e=>{glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px"});
document.querySelectorAll(".service,.value,.about-cards div,.process-item").forEach(card=>{card.addEventListener("mousemove",e=>{const r=card.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`translateY(-7px) rotateX(${y*-2}deg) rotateY(${x*2}deg)`});card.addEventListener("mouseleave",()=>card.style.transform="")});

// Gentle magnetic feel for primary CTAs.
document.querySelectorAll(".btn.primary").forEach(btn=>{
  btn.addEventListener("mousemove", e=>{
    const r=btn.getBoundingClientRect();
    const x=(e.clientX-r.left-r.width/2)*0.08;
    const y=(e.clientY-r.top-r.height/2)*0.08;
    btn.style.transform=`translate(${x}px,${y}px)`;
  });
  btn.addEventListener("mouseleave",()=>btn.style.transform="");
});

// Animate numeric-style hero bars when they enter the viewport.
const bars=document.querySelectorAll(".data i u");
const barObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add("grow");
  });
},{threshold:.5});
bars.forEach(b=>barObserver.observe(b));
