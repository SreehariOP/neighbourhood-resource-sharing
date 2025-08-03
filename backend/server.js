const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8000;
const itemsRoutes = require('./routes/itemRoutes')



app.use(bodyParser.json());

app.listen(port, ()=> {
    console.log("Server is running !", port);
})

app.use(cors());

// app.get('/', (req, res)=> {
//     res.json(items);
// })
app.get('/', (req, res) => {
    res.send('API is working!');
});

app.use('/items', itemsRoutes)

