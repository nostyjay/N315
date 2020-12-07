function showPage(data){
    $('.content').html(data);
}

function initListeners(){
    $('nav a').click((e) => {
        let btnId = e.currentTarget.id;
        if(btnId == 'home'){
            MODEL.showHome(showPage); 
        }
        if(btnId == 'about'){
            MODEL.showAbout(showPage); 
        }
        if(btnId == 'products'){
            MODEL.showProducts(showPage); 
        }
        if(btnId == 'contact'){
            MODEL.showContact(showPage); 
        }

    })
}

$(document).ready(()=>{
    initListeners();
})