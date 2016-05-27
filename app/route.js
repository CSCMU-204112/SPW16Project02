var info = require('./controllers/info.controllers');

module.exports = function(app){
    // app.get('/', function(req, res){
    //     res.send('');
    // });
    app.get('/', info.homeRender);
    app.get('/logout', info.logOut);
    app.get('/register', info.registerRender);
    app.post('/register',info.signUp);
    // .get(info.getAll)
    app.get('/about', info.aboutUs);
    app.get('/upload', info.uploadRender);
    app.post('/login', info.logIn);
    app.get('/buy1', info.buyRender1);
    app.get('/buy2', info.buyRender2);
    app.get('/buy3', info.buyRender3);
    app.get('/buy4', info.buyRender4);
    app.get('/buy5', info.buyRender5);
    app.get('/buy6', info.buyRender6);
    app.get('/buy7', info.buyRender7);
    app.get('/buy8', info.buyRender8);
    app.get('/buy9', info.buyRender9);
    app.get('/:id',info.userRender);
}