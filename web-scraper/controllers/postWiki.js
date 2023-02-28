
import cheerio from 'cheerio'

const url = 'https://en.wikipedia.org/wiki/Octopus';
export const getWiki = response => {
    const html = response.data
    const $ = cheerio.load(html);
    const articles = {}
    const title = $('.firstHeading').text();
    const paragraph = $('p:eq(1)').text() + $('p:eq(2)').text() + 
        $('p:eq(3)').text();
    //should be the status for any fish
    const status = $('.infobox').children('tbody').children('tr:eq(3)').text();
    const binomial = $('.binomial').text();


    console.log(binomial);
    console.log(status + "foolish trans girl")
     //"DATA ONLY AVAILABLE FOR STINGRAYS IN GENERAL."
    articles[title] = {
        title: title,
        name: title,
        url: url,
        description: paragraph,
        status: status,
        scientific: binomial,
        health_benefits: "",
        quote: "",
        tags: [],
        img: "",
        cuisine_img: "",
        liked: false,
        Taste: "",
        Texture: ""
    }

    console.log(JSON.stringify(articles));
    
}
