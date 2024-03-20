'use strict';

/**
 * navbar variables
 */
const menuToggleBtn = document.querySelector("[data-navbar-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }

menuToggleBtn.addEventListener("click", function () { elemToggleFunc(navbar); });




/**
 * go to top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 800) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }

});

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
navToggle.addEventListener('click', () =>{
   navMenu.classList.add('show-menu')
})

/* Menu hidden */
navClose.addEventListener('click', () =>{
   navMenu.classList.remove('show-menu')
})

/*=============== SEARCH ===============*/
const search = document.getElementById('search'),
      searchBtn = document.getElementById('search-btn'),
      searchClose = document.getElementById('search-close')

/* Search show */
searchBtn.addEventListener('click', () =>{
   search.classList.add('show-search')
})

/* Search hidden */
searchClose.addEventListener('click', () =>{
   search.classList.remove('show-search')
})

/*=============== LOGIN ===============*/
const login = document.getElementById('login'),
      loginBtn = document.getElementById('login-btn'),
      loginClose = document.getElementById('login-close')

/* Login show */
loginBtn.addEventListener('click', () =>{
   login.classList.add('show-login')
})

/* Login hidden */
loginClose.addEventListener('click', () =>{
   login.classList.remove('show-login')
})




/* REVIEWS */
document.addEventListener("DOMContentLoaded", function() {
   const testimonials = document.querySelectorAll('.testimonial');
   let currentTestimonialIndex = 0;
 
   function showTestimonial(index) {
     testimonials.forEach((testimonial, i) => {
       if (i === index) {
         testimonial.style.opacity = 1;
       } else {
         testimonial.style.opacity = 0;
       }
     });
   }
 
   function fadeInNextTestimonial() {
     currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
     showTestimonial(currentTestimonialIndex);
     setTimeout(fadeInNextTestimonial, 5000); // Change testimonial every 5 seconds
   }
 
   // Initial call to start fading testimonials
   fadeInNextTestimonial();
 });
 
 
 function openReviewForm() {
   // You can add your logic here to open a review form or perform any action
   alert('Review form will be opened.');
 }
 