const express   = require('express')
const app       = express()
const port      = 3000

const cors = require('cors')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

/* Require Routes */
const userRoute = require('./routes/Users');
const apiNbaRoute = require('./routes/ApiNba');

app.use('/users', userRoute);
app.use('/api-nba', apiNbaRoute);
/* End Require Routes */

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`App listening on port ${port}!`));