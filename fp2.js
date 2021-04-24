const Parser = require('rss-parser')
let parser = new Parser();

class Feedparser {
    constructor() {

    }

    async feedparser(urls) {
        const boo =Array.isArray(urls)
        let feeds = new Array()
        if(boo){
            for(let url of urls){
                let feed = await parser.parseURL(url);
                parser.parseURL(url).then( (feed) => {

                }).catch( e => e.message)

                feeds.push(feed)


            }

            console.log(feeds)
        }else{
            let array = new Array()
            array.push(urls) // PO CO???
            for(let x of array){
                let feed = await parser.parseURL(x);

            }
        }
    }

    async feedparserXML(urls) {
        const boo =Array.isArray(urls)
        let feeds = new Array()
        if(boo){
            for(let url of urls){
                let feed = await parser.parseString(url);
                console.log(feed.title);

                feeds.push(feed)

            }

        }else{
            let array = new Array()
            array.push(urls) // PO CO???
            for(let x of array){
                let feed = await parser.parseString(x);

               feeds.push(feed)
            }
        }
        return feeds
    }
}

const elo = new Feedparser()
const urls = ['https://www.reddit.com/.rss', 'http://blogs.nasa.gov/stationreport/feed/']

elo.feedparser(urls)

module.exports = Feedparser
module.exports.feeds = this.feeds
