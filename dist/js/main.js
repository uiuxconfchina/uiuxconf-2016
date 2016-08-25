var body = $('body');

function toggleMenu() {
  $('button.nav').bind("click tap", function() {
    body.toggleClass('menu-open');
  })
  $('#header button.close, a.about').bind("click tap", function() {
    body.removeClass('menu-open');
  })
}

function tab() {
  $('.tabs h3').click(function() {
    var _index = $('.tabs h3').index(this);
    if ($(this).hasClass('active') == true) {
      return false;
    } else {
      $("html,body").animate({ scrollTop: $("#schedule").offset().top }, 500);
    }
    $(this).addClass('active').siblings('h3').removeClass('active');
    $('.tables > .table').eq(_index).show().animate({ 'opacity': 1, 'top': '0px' }, 500).siblings('.table').hide().css({ 'opacity': 0, 'top': '-8px' });
  })
}

function toggleModal() {
  $('.cta').bind("click tap", function() {
    body.toggleClass('modal-open');
  })
  $(this).bind("click tap", function(e) {
    var eTarget = $(e.target);
    if ($(eTarget).hasClass('scroller') || eTarget.hasClass('modal') || eTarget.hasClass('container')) {
      body.toggleClass('modal-open');
    } else {
      e.stopPropagation();
    }
  })
}


function sticky() {
  var rollSet = $('#speakers');
  var offset = rollSet.offset();

  function navsticky() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > offset.top) {
      $(".tabnav").unstick();
    } else {
      $(".tabnav").sticky({ topSpacing: 66, zIndex: 2, responsiveWidth: 1024 });
    }
  }

  $("#header").sticky({ topSpacing: 0, zIndex: 2 });
  navsticky();
  $(window).scroll(function() {
    navsticky();
  })
}

$(document).ready(function() {

  toggleMenu();
  tab();
  toggleModal();
  sticky();
  $(window).resize(function() {
    sticky();
  })
  $('.qrcode').blur(function() {
    $(this).find('span').css({ 'opacity': 1, 'visibility': 'visible', 'margin-right': '8px' });
  })
})
