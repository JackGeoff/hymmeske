let next = document.querySelector('.next');
let prev = document.querySelector('.prev');





let autoSlideInterval;




// Function to move to the next slide
function moveNext() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
}

// Function to move to the previous slide
function movePrev() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
}

// Function to reset the auto-slide interval
function resetAutoSlide() {
    clearInterval(autoSlideInterval);  // Clear the existing interval
    autoSlideInterval = setInterval(moveNext, 7000);  // Start a new interval for auto-slide every 7 seconds
}

// Event listeners for buttons with interval reset
next.addEventListener('click', () => {
    moveNext();
    resetAutoSlide();
});

prev.addEventListener('click', () => {
    movePrev();
    resetAutoSlide();
});

// Initialize the auto-slide interval
resetAutoSlide();


// JavaScript for Hamburger Menu
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  const hamburger = document.querySelector('.hamburger');

  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
}

// Close the menu when clicking outside of it
document.addEventListener('click', function(event) {
  const navLinks = document.querySelector('.nav-links');
  const hamburger = document.querySelector('.hamburger');

  if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
  }
});

const links = document.querySelectorAll('.nav-links li a');
links.forEach(link => {
  link.addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    
      if (navLinks.classList.contains('active')){
          navLinks.classList.remove('active');
      }

  });

});

const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

 
    breakpoints:{
        0: {
            slidesPerView: 1

        },
        620: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }

});

 ScrollReveal({ 
     reset: true,
     distance: '60px',
     duration: 2500,
     delay:400
});
ScrollReveal().reveal('section', { delay: 500, origin: 'top'});
ScrollReveal().reveal('.text-section', { delay: 500, origin: 'right'});
ScrollReveal().reveal('.image-section', { delay: 500, origin: 'left'});
ScrollReveal().reveal('h1', { delay: 700, origin: 'bottom'});
ScrollReveal().reveal('h2', { delay: 700, origin: 'left'});
ScrollReveal().reveal('p', { delay: 700, origin: 'right'});


