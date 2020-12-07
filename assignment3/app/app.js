

function initListeners(){
    $('nav a').click(function(e){
        let aId = this.id;
        MODEL.getPage(aId);
    })
}

function initView(){
    $.get('../views/nav.html', function(data){
        $('#nav').html(data);
        initListeners();
    })
    $.get('../views/carousel.html', function(data){
        $('#carousel').html(data);
    })
    $.get('../views/home/home.html', function(data){
        $('#app').html(data);
        $('.main-carousel').flickity({
            cellAlign: 'center',
            wrapAround: true,           
          });
    })
}

$(document).ready(function(){
    initView();
});