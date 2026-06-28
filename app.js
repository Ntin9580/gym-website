require("dotenv").config();

const express = require("express");
const path = require("path");
const app = express();
const bodyparser = require("body-parser");
// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    mongoose.connect(process.env.MONGO_URI)
    //   await mongoose.connect('mongodb://localhost/gymwebsite');
}

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

const basicplanSchema = new mongoose.Schema({
    name: String,
    age: String,
    email: String,
    phone: String
});
const basicplan = mongoose.model('basicplan', basicplanSchema);
const port = 8000;

const standardplanSchema = new mongoose.Schema({
    name: String,
    age: String,
    email: String,
    phone: String
});
const standardplan = mongoose.model('standardplan', standardplanSchema);


const premiumplanSchema = new mongoose.Schema({
    name: String,
    age: String,
    email: String,
    phone: String
});
const premiumplan = mongoose.model('premiumplan', premiumplanSchema);


app.use('/static', express.static('static'));
app.use(express.urlencoded());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    const params = {};
    res.status(200).render('home.pug', params);
});
app.get('/basicplan', (req, res) => {
    const params = {};
    res.status(200).render('basicplan.pug', params);
});
app.post('/basicplan', (req, res) => {
    var myData = new basicplan(req.body);
    myData.save().then(() => {
        res.send("This item has been saved to the database")
    }).catch(() => {
        res.status(400).send("Item was not saved to the database")
    });
});

app.get('/standardplan', (req, res) => {
    const params = {};
    res.status(200).render('standardplan.pug', params);
});
app.post('/standardplan', (req, res) => {
    var myData = new standardplan(req.body);
    myData.save().then(() => {
        res.send("This item has been saved to the database")
    }).catch(() => {
        res.status(400).send("Item was not saved to the database")
    });
});


app.get('/premiumplan', (req, res) => {
    const params = {};
    res.status(200).render('premiumplan.pug', params);
});
app.post('/premiumplan', (req, res) => {
    var myData = new premiumplan(req.body);
    myData.save().then(() => {
        res.send("This item has been saved to the database")
    }).catch(() => {
        res.status(400).send("Item was not saved to the database")
    });
});

app.get('/about', (req, res) => {
    const params = {};
    res.status(200).render('about.pug', params);
});
app.post('/about', (req, res) => {
    var myData = new about(req.body);
    myData.save().then(() => {
        res.send("This item has been saved to the database")
    }).catch(() => {
        res.status(400).send("Item was not saved to the database")
    });
});

app.get('/services', (req, res) => {
    const params = {};
    res.status(200).render('services.pug', params);
});
app.post('/services', (req, res) => {
    var myData = new services(req.body);
    myData.save().then(() => {
        res.send("This item has been saved to the database")
    }).catch(() => {
        res.status(400).send("Item was not saved to the database")
    });
});

app.get('/contact', (req, res) => {
    const params = {};
    res.status(200).render('contact.pug', params);
});
app.post('/contact', (req, res) => {
    var myData = new contact(req.body);
    myData.save().then(() => {
        res.send("This item has been saved to the database")
    }).catch(() => {
        res.status(400).send("Item was not saved to the database")
    });
});


app.listen(port, () => {
    console.log(`The application started on port ${port}`);
})