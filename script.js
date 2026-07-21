// ==========================
// FADE IN ON SCROLL
// ==========================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

cards.forEach(card=>{

    observer.observe(card);

});

// ==========================
// HERO BUTTON
// ==========================

const button = document.querySelector(".button");

button.addEventListener("click",(e)=>{

    e.preventDefault();

    document.querySelector("#messages").scrollIntoView({

        behavior:"smooth"

    });

});

// ==========================
// 3D CARD EFFECT
// ==========================

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = (x / rect.width - 0.5) * 10;
        const rotateX = (0.5 - y / rect.height) * 10;

        card.style.transform =
        `
        perspective(900px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)
        `;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="";

    });

});

// ==========================
// LOGO GLOW
// ==========================

const logo = document.querySelector(".logo");

document.addEventListener("mousemove",(e)=>{

    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    const moveX = (x-0.5)*20;
    const moveY = (y-0.5)*20;

    logo.style.setProperty(
        "--mouseX",
        `${moveX}px`
        );
        
        logo.style.setProperty(
        "--mouseY",
        `${moveY}px`
        );

});

// ==========================
// PARTICLES
// ==========================

const background=document.querySelector(".background");

for(let i=0;i<45;i++){

    const particle=document.createElement("span");

    particle.className="particle";

    particle.style.left=Math.random()*100+"vw";

    particle.style.top=Math.random()*100+"vh";

    particle.style.width=2+Math.random()*6+"px";

    particle.style.height=particle.style.width;

    particle.style.animationDuration=
    6+Math.random()*8+"s";

    particle.style.animationDelay=
    Math.random()*5+"s";

    background.appendChild(particle);

}

// ==========================
// RANDOM GLOW
// ==========================

setInterval(()=>{

    logo.style.filter=`
    drop-shadow(0 0 ${20+Math.random()*20}px #3b82ff)
    `;

},1200);

// ==========================
// TITLE PARALLAX
// ==========================

const title=document.querySelector(".hero h1");

window.addEventListener("scroll",()=>{

    title.style.transform=
    `translateY(${window.scrollY*0.18}px)`;

});

// ==========================
// AUTHOR GLOW
// ==========================

const authors=document.querySelectorAll(".author");

authors.forEach(author=>{

    author.addEventListener("mouseenter",()=>{

        author.style.letterSpacing="2px";

    });

    author.addEventListener("mouseleave",()=>{

        author.style.letterSpacing="0px";

    });

});

// ==========================
// PAGE LOADED
// ==========================

window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});
// ==========================
// PREMIUM SPOTLIGHT
// ==========================

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        card.style.setProperty("--x", (e.clientX - rect.left) + "px");
        card.style.setProperty("--y", (e.clientY - rect.top) + "px");

    });

});