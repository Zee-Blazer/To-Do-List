const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb://localhost/to_do_list');

app.use((req,res,next)=>{
    console.log(`http://${req.protocol}:${req.get('host')}${req.originalUrl}`);
    next();
})

const listItems = mongoose.Schema({
    done: Boolean,
    subject: String,
    date: String,
    time: String
})

const Items = mongoose.model('Items', listItems);

app.get('/data', (req,res)=> {
    Items.find((err,doc)=>{
        if(err) return console.log(err);
        res.json(doc)
    })
})

app.post('/data', (req,res)=> {
    const addItem = new Items(req.body);
    addItem.save((err,doc)=> {
        if(err) return console.log(err);
        console.log(doc);
    });

    res.json(addItem);
})

app.delete('/data', (req,res)=> {
    Items.findByIdAndRemove(req.body.id, (err,doc)=> {
        if(err) return console.log(err);
        res.json(doc);
    })
})

app.put('/data', (req,res)=> {
    Items.update({_id: req.body.id}, 
        {$set: req.body },
        (err,doc)=> {
            if(err) return console.log(err);
            console.log(doc);
        }
    )
    res.json(req.body);
})

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server is running on Port:${port}`))