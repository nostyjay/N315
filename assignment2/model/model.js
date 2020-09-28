var MODEL = (function (e) {

    var _showHome = function (callback) {
        let homeData = 
            `
            <div class='container'>
            <h1>Hello! I am the home page!</h1>
            <img src='assets/europaDestiny.jpg' />
            </div>
             `;
        return callback(homeData);
    }    
    var _showAbout = function (callback) {
        let aboutData = 
            `
            <div class='container'>
            <h1>Hi, I'm the about page!</h1>
            <img src='assets/europaDestiny2.jpg' />
            </div>
            `;
        return callback(aboutData);
    }    
    var _showProducts = function (callback) {
        let productsData = 
            `
            <div class='container'>
            <h1>Hello! I am the products page!</h1>
            <img src='assets/venus.jpg' />
            </div>
            `;
        return callback(productsData);
    }    
    var _showContact = function (callback) {
        let contactData = 
            `
            <div class='container'>
            <h1>Hello! I am the contact page!</h1>
            <img src='assets/venus2.jpg' />
            </div>
            `;
        return callback(contactData);
    }

    return {
        showHome: _showHome,
        showAbout: _showAbout,
        showProducts: _showProducts,
        showContact: _showContact
    }
})();