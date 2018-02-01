let express = require('express');
let session = require('cookie-session');
let bodyParser = require('body-parser');

let app = express();
let PORT = 3000;

app.use(session({secret: 'mysecretpass'}));


app.listen(PORT, function(){
  console.log('Serveur démarré sur le port ' + PORT);
})
