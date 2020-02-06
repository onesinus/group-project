const express   = require('express')
const app       = express()
const port      = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


/* Require Routes */
const userRoute = require('./routes/Users');

app.use('/users', userRoute);
/* End Require Routes */

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`App listening on port ${port}!`));