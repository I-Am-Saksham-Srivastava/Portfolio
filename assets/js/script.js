// Header/Nav Toggle Button
const navMenu = document.getElementById("navMenu");
const toggleBtn = document.getElementById("toggleBtn");
const homeContent = document.getElementById("home_content");

toggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle("activeMenu");
    toggleBtn.classList.toggle("activeToggle");
    homeContent.classList.toggle("contentZindex");
    body.classList.toggle("activeNavMenu");
});

 // Header Scroll  
 window.addEventListener('scroll', ()=>{
    const navbar = document.getElementById("navbar");
    if(this.scrollY >= 60){
        navbar.classList.add("acitve_nav");
    }else{
        navbar.classList.remove("acitve_nav");
    }
   }) 

 // ====== ======>> REMOVE NAVMENU ON LINK ACTION <<====== ======
 const navLink = document.querySelectorAll('.nav_link');

navLink.forEach((n) =>
n.addEventListener('click', () => {
    navMenu.classList.remove('activeMenu');
    toggleBtn.classList.remove('activeToggle');
    body.classList.remove("activeNavMenu");
})
);

// ====== ======>> Active Link on Section Scroll <<====== ======
const section = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
const scrollY = window.pageYOffset; 
    section.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
    document
        .querySelector('.navItem a[href*=' + sectionId + ']').classList.add('active');
    } else {
    document
        .querySelector('.navItem a[href*=' + sectionId + ']').classList.remove('active');
    }
    });
});

// Scroll Up Button
window.addEventListener('scroll', ()=>{
 const scrollUp = document.getElementById("scrollUp");
 if(this.scrollY >= 120){
     scrollUp.classList.add("active_scrollup");
 }else{
     scrollUp.classList.remove("active_scrollup");
 } 
}) 

// Swiper Slider
var swiper = new Swiper(".mySwiper", {
 pagination: {
   el: ".swiper-pagination",
   dynamicBullets: true,
 },
 navigation: {
   nextEl: ".swiper-button-next",
   prevEl: ".swiper-button-prev",
 },
 loop: true,
 autoplay: {
     delay: 2500,
     disableOnInteraction: false,
   },
});


// ScrollReveal
const scrollRevealAnime = ScrollReveal({
   origin: 'top',
   distance: '30px',
   duration: 2000,
   reset: true,
})

scrollRevealAnime.reveal(
   `.titleLight,
   .titleBold,
   .proff,
   .homeText,
   .home_button, 
   .text_lg,
   .aboutText,
   .sign,
   .prgress__bar, 
   .icons_img,
   .exp_title,
   .about_card,
   .blog_card,
   .footer_brand,
   .footer_link,
   .copyright_msg,
   .btn`,
   {
       interval: 200,
   }
); 
