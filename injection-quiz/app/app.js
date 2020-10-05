function initListeners() {
  $('#nav nav a').click(function (e) {
    let btnId = this.id;
    MODEL.getViewName(btnId);
  });
}

function initView() {
  $.get('../views/nav.html', function (data) {
    $('#nav').html(data);
    initListeners();
  });
}

$(document).ready(() => {
  initView();
});
