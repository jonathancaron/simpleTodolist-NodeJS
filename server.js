let express = require('express');
let session = require('cookie-session');
let bodyParser = require('body-parser');

let urlencodedParser = bodyParser.urlencoded({ extended: false });

let app = express();
let PORT = 3000;

app.use(session({secret: 'mysecretpass'}))
.use(function(req,res,next){
  if(typeof(req.session.todolist) == "undefined"){
    req.session.todolist = [];
  }
  next();
})
.get('/todo', function(req, res){
  res.render('todo.ejs', {todolist: req.session.todolist});
})
.post('/todo/ajouter/', urlencodedParser, function(req, res){
  if(req.body.newtodo != ''){
    req.session.todolist.push(req.body.newtodo);
  }
  res.redirect('/todo');
});


app.listen(PORT, function(){
  console.log('Serveur démarré sur le port ' + PORT);
})
