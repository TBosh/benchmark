const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const connectionString = "postgres://dqhtteeokxcaxo:537124110c1bc4de7b85ebe8272f82bd4fb8310a20c86bd220a7e8413a1b04cd@ec2-107-21-113-16.compute-1.amazonaws.com:5432/d1horatbev000q?ssl=true";

const app = express();

app.use(bodyParser.json() );
app.use(cors() );
massive(connectionString).then( (dbInstance) => {app.set('db', dbInstance) } );

app.get('/api/barbers', function(req, res) {
  const dbInstance = req.app.get('db');

  dbInstance.active_barbers()
    .then( (barbers) => {
      var count = 0;

      function getSocials(index) {
        console.log(barbers[index].id);
          dbInstance.get_socials_by_id(barbers[index].id)
         .then( (socialLinks) => {
           console.log(barbers);
           barbers[index].socials = socialLinks 
           count++
           if (count === barbers.length) {
            res.status(200).send( barbers ) 

           }
         })
      }


      for (i = 0; i < barbers.length; i++) {
        getSocials(i)

      }
      

    
  } )
    .catch( () => res.status(500).send() );
})


const port = 3001;
app.listen ( port, () => {console.log(`Server is listening on port ${port}.`); } );