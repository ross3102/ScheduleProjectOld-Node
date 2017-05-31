const express   = require('express'),
      app       = express();

const port = process.env.PORT || 3000;

// Root Route
app.get('/', (req, res) => {
   
});

app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});