var body = $('body');

function toggleMenu() {
  $('button.nav').bind("click tap",function(){
    body.toggleClass('menu-open');
  })
  $('#header button.close, a.about').bind("click tap",function(){
    body.removeClass('menu-open');
  })
}

function toggleModal() {
  $('.cta').bind("click tap",function(){
  	body.toggleClass('modal-open');
  })
  $(this).bind("click tap",function(e){
    var eTarget = $(e.target);
    if ($(eTarget).hasClass('scroller') || eTarget.hasClass('modal') || eTarget.hasClass('container')) {
      body.toggleClass('modal-open');
    } else {
      e.stopPropagation();
    }
  })
}

$(document).ready(function() {
  toggleMenu();
  toggleModal();
  $('.qrcode').blur(function(){
    $(this).find('span').css({'opacity': 1,'visibility': visible, 'margin-right': '8px'});
  })
})
