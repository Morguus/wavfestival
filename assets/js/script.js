var btn = $('#button');
var footer = $('.foot-orange');

$(window).scroll(function() {
  var scrollPosition = $(window).scrollTop();
  var footerPosition = footer.offset().top;
  var windowHeight = $(window).height();

  if (scrollPosition > 300 && scrollPosition + windowHeight < footerPosition) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop: 0}, 300);
});

const links = document.querySelectorAll("nav li");

icons.addEventListener("click", () => {
  navorange.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    navorange.classList.remove("active");
  });
});

icons.addEventListener("click", () => {
  navvert.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    navvert.classList.remove("active");
  });
});

icons.addEventListener("click", () => {
  navviolet.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    navviolet.classList.remove("active");
  });
});