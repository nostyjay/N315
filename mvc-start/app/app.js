//This is my controller

function showText(data) {
  $('.content').html(data);
  $('.loader').css('display', 'none');
}

function initListeners() {
  $('nav a').click(function (e) {
    // //uses id to find target
    // console.log('click', e.currentTarget.id);

    // //uses jquery to find target
    // console.log('jquery', this.id);

    let btnId = this.id;
    $('.loader').css('display', 'block');
    MODEL.getText(showText);
    console.log('btnId: ', btnId);
    //syntax = template literal!
    $('.content').append(`${btnId} <br>`);
  });
}

$(document).ready(function () {
  initListeners();
});
