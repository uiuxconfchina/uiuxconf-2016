var navBtn = $('button.nav'),
body = $('body');

function toggleMenu() {
  navBtn.click(function() {
    body.toggleClass('menu-open');
  })
  $('button.close, a.about').click(function() {
    body.removeClass('menu-open');
  })
}

$(document).ready(function() {
  toggleMenu();
})
