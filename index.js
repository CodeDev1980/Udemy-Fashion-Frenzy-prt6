const express = require('express');
const ejs = require('ejs');
const path = require('path');
const router = require('./routes/routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const expressSession = require('express-session');
const flash = require('connect-flash');
const app = express();
const NodeCache = require( "node-cache" );
let myCache = new NodeCache();
const sitemap = require('sitemap-generator');
const { http, https } = require('follow-redirects');
http.get('http://localhost:8080', response => {
    response.on('data', chunk => {
        console.log(chunk);
    });
}).on('error', err => {
    console.error(err);
});
https.get('https://localhost:8080/', 'https://localhost:8080', response => {
    response.on('data', chunk => {
        console.log(chunk);
    });
}).on('error', err => {
    console.error(err);
});

// create generator
const generator = sitemap('https://localhost:8080/', {
    stripQuerystring: false
});

// register event listeners
generator.on('done', () => {
    // sitemaps created
});

// start the crawler
generator.start();
require('dotenv').config();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
myCache = new NodeCache( { stdTTL: 100 } )
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(fileUpload())
app.use(flash());
app.use(expressSession({
    secret: process.env.SECRET
}))

global.loggedIn = null;

app.use("*", (req, res, next) => {
    loggedIn = req.session.userId;
    next()
})

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    autoIndex: true
})
if(mongoose){
    console.log('DB connected')
} else {
    console.log('No DB connected')
}

const cacheService = require("express-api-cache");
const cache = cacheService.cache;
const port = process.env.PORT;
app.listen(port || 3300, cache("10 minutes"), () => {
    console.log(`App listening on ${port}`)
});

app.use('/', router);

app.use((req, res) => res.render('notFound'))