import errorHandler from 'errorhandler'
import express from 'express'
import mongoose from 'mongoose'
import {PostsController, WelcomeController} from './controllers'
import compression from 'compression'
import helmet from 'helmet'

const app: express.Application = express()

app.use(helmet())
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const port: number = 3000;

app.use(compression())
app.use('/', WelcomeController)
app.use('/posts', PostsController)
app.use(express.static('public'))
app.use(errorHandler())

// Set up database connection
const dev_db_url = 'mongodb://localhost:27017/posts'
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('Connected to database!')
})

// Serve the application at the given port
app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
})
