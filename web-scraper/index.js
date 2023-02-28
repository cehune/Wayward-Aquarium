
import axios from 'axios';
import express from 'express'
import cheerio from 'cheerio';
import {getWiki} from './controllers/postWiki.js'
import {getFishWatch} from './controllers/postFishWatch.js'

const PORT = 8000;

const app = express();

/*for FishWatch
const url = 'https://www.fishwatch.gov/api/species';
axios(url)
    .then(getFishWatch);
*/
/* for wikipedia */
const url = 'https://en.wikipedia.org/wiki/Octopus'
axios(url)
    .then(getWiki); 

app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`)
});
