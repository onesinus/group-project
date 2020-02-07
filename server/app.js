const express   = require('express')
const cors      = require('cors');
const app       = express()
const port      = 3000


require('dotenv').config()
const routes    = require('./routes')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

/* Require Routes */
const userRoute = require('./routes/Users');
const apiNbaRoute = require('./routes/ApiNba');

app.use(cors());
app.use('/users', userRoute);
app.use('/api-nba', apiNbaRoute);
app.use('/', routes)
/* End Require Routes */

app.listen(port, () => console.log(`App listening on port ${port}!`))
