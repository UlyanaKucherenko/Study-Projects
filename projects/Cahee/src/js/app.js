
const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("menu-mobile");
const cross = document.getElementById("cross");
const navContainer = document.getElementById("nav-container");


burger.onclick = function() {
  mobileMenu.classList.add('navigation__wrapper-menu-mobile--show');
  burger.classList.add('navigation__burger--hidden');
  navContainer.classList.add('navigation__container--mobile');
  
}

cross.onclick = function() {
  mobileMenu.classList.remove('navigation__wrapper-menu-mobile--show');
  
  burger.classList.remove('navigation__burger--hidden');
  navContainer.classList.remove('navigation__container--mobile');
}



const nav = document.getElementById("nav");

document.addEventListener('scroll', () => {
  if (window.pageYOffset < nav.clientHeight) {
    nav.classList.remove('navigation--filled');

  } else nav.classList.add("navigation--filled");
});


$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
   
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
  });

