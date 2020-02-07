const express   = require('express')
const cors      = require('cors');
const app       = express()
const port      = 3000

<<<<<<< HEAD
require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const routes = require('./routes')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
=======
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


/* Require Routes */
const userRoute = require('./routes/Users');

app.use(cors());
app.use('/users', userRoute);
/* End Require Routes */
>>>>>>> 56d6a629213ad41d63d65da1dfd755544907f1a0

app.use('/', routes)


<<<<<<< HEAD
app.listen(port, () => console.log(`App listening on port ${port}!`))
=======
app.listen(port, () => console.log(`App listening on port ${port}!`));
>>>>>>> 56d6a629213ad41d63d65da1dfd755544907f1a0
