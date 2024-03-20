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


function openReviewForm() {
   // You can add your logic here to open a review form or perform any action
   alert('Review form will be opened.');
 }
 

 // Open review form modal
function openReviewForm() {
   document.getElementById('review-form-modal').style.display = 'block';
 }
 
 // Close review form modal
 function closeReviewForm() {
   document.getElementById('review-form-modal').style.display = 'none';
 }
 
 // Submit review form
 document.getElementById('review-form').addEventListener('submit', function(e) {
   e.preventDefault();
   // Add your logic here to handle form submission (e.g., send data to server)
   alert('Review submitted successfully!');
   closeReviewForm();
 });
 
