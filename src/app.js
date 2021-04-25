const express = require('express')


const config = require('config')
const path = require('path')

const fetch = require('node-fetch')

const DB = require('./storage/db')
const db = new DB()
db.connect(config.db)

const MailSender = require('./utils/mailSender')
const MailBuilder = require('./utils/mailbuilder')
const FeedParser = require('./utils/fp3')
const MailController = require('./controllers/MailController')
const RssController = require('./controllers/RssController')

const feedParser = new FeedParser()
const mailSender = new MailSender()
const mailBuilder = new MailBuilder()
const mailController = new MailController(db,feedParser,mailSender,mailBuilder)
const rssController = new RssController(db)

const app = express()

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.post('/send', async (req,res) => {
    try{
        console.log(req.body)
        await db.insert("feeds", req.body)
        res.status(200)
    } catch (e){
        console.error(e.message)
    }
})

app.get('/send', async (req,res) => {
    try{
        console.log('halo')
        await db.find("feeds", req.body.email)
        res.status(200).sendFile('./index.html')
    } catch (e){
        console.error(e.message)
    }

})


app.get('/api/v1/mail', async (req,res) => {
    try{
        const htmlContent = await mailController.build(req.query.email) 
        res.send(htmlContent)
    }catch (e) {
        console.log(e)
        res.sendStatus(500)
    }
})

app.post('/api/v1/mail', async (req,res) => {
    try{
        await mailController.send(req.query.email)
        res.sendStatus(200)
    } catch (e) {
        console.log(e)
        res.sendStatus(500)
    }
})
module.exports = app