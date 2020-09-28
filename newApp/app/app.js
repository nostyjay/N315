function initListeners() {
  $('#nav nav a').click(function (e) {
    let btnId = this.id;
    MODEL.getView(btnId);
  });
}

function initView() {
  //$.get(URL, function())
  //gets URL, then executes function if get is successful
  // (data) => { ... } anonymous function takes data from nav.html and adds it to html at #id
  $.get('../views/nav.html', function (data) {
    $('#nav').html(data);
    initListeners();
  });
  $.get('../views/footer.html', function (data) {
    $('#footer').html(data);
  });
  $.get('../views/home.html', function (data) {
    $('#app').html(data);
  });
}

$(document).ready(() => {
  initView();
});
