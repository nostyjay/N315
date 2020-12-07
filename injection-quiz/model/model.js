var MODEL = (function () {
  let _getViewName = function (data) {
    $.get(`../views/${data}/${data}.html`, function (data) {
      $('#app').html(data);
    });
  };

  return {
    getViewName: _getViewName,
  };
})();
