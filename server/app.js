const express   = require('express')
const cors      = require('cors');
const app       = express()
const port      = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


/* Require Routes */
const userRoute = require('./routes/Users');

app.use(cors());
app.use('/users', userRoute);
/* End Require Routes */

app.use('/', routes)


app.listen(port, () => console.log(`App listening on port ${port}!`));
