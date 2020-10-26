function init() {
  $('.navicon').click(function (e) {
    $('nav').toggleClass('navMobileView');
    $('.links').toggle();
  });
}
$(document).ready(init());
