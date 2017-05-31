const express   = require('express'),
      app       = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
   res.send('<h1>Homepage!</h1>'); 
});

app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});

//Final Test?