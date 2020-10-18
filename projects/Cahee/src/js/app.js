
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