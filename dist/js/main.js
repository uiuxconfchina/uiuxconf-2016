var body = $('body');

function toggleMenu() {
  $('button.nav').click(function() {
    body.toggleClass('menu-open');
  })
  $('#header button.close, a.about').click(function() {
    body.removeClass('menu-open');
  })
}

function toggleModal() {
  $('.cta').click(function(){
  	body.toggleClass('modal-open');
  })
  $(this).click(function(e) {
    var eTarget = $(e.target);
    if ($(eTarget).hasClass('scroller') || eTarget.hasClass('modal')) {
      body.toggleClass('modal-open');
    } else {
      e.stopPropagation();
    }
  })
}

$(document).ready(function() {
  toggleMenu();
  toggleModal();
})
