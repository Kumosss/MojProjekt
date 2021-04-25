const DB = require ('../../src/storage/db')
const db = new DB()
const config = require('config')

function RssController(db) {
    if(!new.target) {
        return new RssController(db)
    }
    this.store = async(name,content) =>{
    }
    this.retrive = async(name, email) =>{
        const collection = db.collection(name)
        return db_.find(email)
    }
}
module.exports = RssController