var MODEL = (function (e){

    var _getPage = function(view){
        $.get(`../views/${view}/${view}.html`, function(data){
            $('#app').html(data);
        });
    };

    return{
        getPage: _getPage,
    }
})();