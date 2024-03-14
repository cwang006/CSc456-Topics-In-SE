const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const path = require('path');
const videoGame = require('./models/games');
const ejsMate = require('ejs-mate');


mongoose.connect('mongodb://localhost:27017/video-game', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});


const app = express();
app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    res.render('home')
})
app.get('/videogames', async (req, res) => {
    const videogames = await videoGame.find({});
    res.render('videogames/index', { videogames });

})

app.get('/videogames', async (req, res) => {
    const videogames = await videoGame.find({});
    res.render('videogames/index', { videogames });

})

app.get('/videogames/new', (req, res,) => {
    res.render('videogames/new');
});

app.post('/videogames', async (req, res) => {
    const newGame = new videoGame(req.body.videogame);
    await newGame.save();
    res.redirect('/videogames');
});

app.get('/videogames/:id', async (req, res,) => {
    const videogame = await videoGame.findById(req.params.id)
    res.render('videogames/show', { videogame });
});

app.get('/videogames/:id/edit', async (req, res) => {
    const videogame = await videoGame.findById(req.params.id);
    res.render('videogames/edit', { videogame });
});

app.put('/videogames/:id', async (req, res) => {
    const { id } = req.params;
    await videoGame.findByIdAndUpdate(id, req.body.videogame);
    res.redirect(`/videogames/${id}`);
});

app.delete('/videogames/:id', async (req, res) => {
    const { id } = req.params;
    await videoGame.findByIdAndDelete(id);
    res.redirect('/videogames');
})

app.listen(3000, () => {
    console.log('port 3000')
})