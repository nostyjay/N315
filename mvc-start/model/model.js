var MODEL = (function (e) {
  var _showAlert = function (btn) {
    alert(btn);
  };

  var _getText = function (callback) {
    let text =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    return callback(text);
  };

  return {
    showAlert: _showAlert,
    getText: _getText,
  };
})();
