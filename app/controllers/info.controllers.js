var pgp = require('pg-promise')();
const dbconfig = require('../../config/database');
var db = pgp(dbconfig);
var userData = require('../../config/user')

// exports.getAll = function(req,res){
//     // res.send('getAll');
//     db.any('INSERT INTO ')
//     .then(function(data){
//         // console.log(data);
//         // res.send('OK');
//         res.render('student',{
//             students:data
//         });
//     })
//     .catch(function(error){
//         console.log(error);
//     });
// }
exports.registerRender = function(req, res) {
    res.render('register');
}
exports.buyRender1 = function(req, res){
    res.render('buy1', {
        login : userData.username
    });
}
exports.buyRender2 = function(req, res){
    res.render('buy2');
}
exports.buyRender3 = function(req, res){
    res.render('buy3');
}
exports.buyRender4 = function(req, res){
    res.render('buy4');
}
exports.buyRender5 = function(req, res){
    res.render('buy5');
}
exports.buyRender6 = function(req, res){
    res.render('buy6');
}
exports.buyRender7 = function(req, res){
    res.render('buy7');
}
exports.buyRender8 = function(req, res){
    res.render('buy8');
}
exports.buyRender9 = function(req, res){
    res.render('buy9');
}
exports.aboutUs = function(req, res) {
    res.render('about');
}
exports.uploadRender = function(req, res) {
    res.render('upload');
}
exports.homeRender = function(req, res) {
    if(userData.username === undefined)
        res.render('home');
    else
        res.redirect('/'+userData.username);
}
exports.userRender = function(req,res){
    res.render('home',{
        user : userData.username,
        login : userData.username
    });
}
exports.logOut = function(req,res){
    userData.setNull();
    res.redirect('/');
}
exports.logIn = function(req, res) {
    var sqlSelect = 'select * from member where username=$1 and password=$2 '
    db.any(sqlSelect, [req.body.username, req.body.password])
        .then(function(data) {
            console.log(req.body);
            if (data.length === 0) {
                res.redirect('/');
            } else {
                userData.setData(data[0]);
                console.log(userData.username);
                res.redirect('/'+ userData.username);
            }
        })
        .catch(function(error) { // ไม่เข้า
            res.redirect('/');

        })
}
// exports.uploadRender = function(req,res){
//     var sqlInsert = 'insert  into picture(pname,picture,type,price, status, pusername) values($1,$2,$3,$4,$5,$6)'
//     var sqlSelect = 'select pusername from picture where '
// }
exports.signUp = function(req, res) {
    var sqlInsert = 'insert into member(fname, lname, email, username, password, tel,address,gender) values($1, $2, $3, $4, $5,$6,$7,$8)'
    var sqlSelect = 'select username from member where username=$1'
    db.one(sqlSelect, req.body.username)
        .then(function(user) {
            console.log(user.username); // print user object; 
            res.redirect('/register');
        })
        .catch(function(error) { // error;
            console.log(error);

        });
    db.none(sqlInsert, [req.body.fname, req.body.lname, req.body.email, req.body.username, req.body.password, req.body.tel, req.body.address, req.body.gender])
        .then(function() {
            console.log('success');
            res.redirect('/');
        })
        .catch(function(error) {
            console.log(error);
            res.redirect('/register');
        });


};
