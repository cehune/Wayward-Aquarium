
import cheerio from 'cheerio'

const url = 'https://en.wikipedia.org/wiki/Blackfin_tuna';
export const getWiki = response => {
    const html = response.data
    const $ = cheerio.load(html);
    const articles = {}
    const title = $('.firstHeading').text();
    const paragraph = $('p:eq(1)').text() + $('p:eq(2)').text() + 
        $('p:eq(3)').text() + $('p:eq(4)').text() + $('p:eq(5)').text();
    //should be the status for any fish
    const status = $('.infobox').children('tbody').children('tr:eq(3)').text();
    const binomial = $('.binomial').text();


    console.log(binomial);
    console.log(status + "foolish trans girl")
     //"DATA ONLY AVAILABLE FOR STINGRAYS IN GENERAL."
    articles[title] = {
        title: title,
        url: url,
        description: paragraph,
        status: status,
        binomial: binomial,
        img: "",
        diet: "Yellowfin tuna prey include other fish, pelagic crustaceans, and squid. Like all tunas, their body shape is particularly adapted for speed, enabling them to pursue and capture fast-moving baitfish such as flying fish, sauries, and mackerel. Schooling species such as myctophids or lanternfish and similar pelagic driftfish, anchovies, and sardines are frequently taken. Large yellowfins prey on smaller members of the tuna family such as frigate mackerel and skipjack tuna.",
        cuisine: `Blackfin tuna hunt both epipelagic (surface) and mesopelagic (deeper water) fish and squid. They also eat crustaceans such as shrimp, crabs, amphipods, stomatopods, and the larvae of decapods.[2][3] They consume smaller prey by filtering the water and chase to catch larger prey.[5]`, 
        cuisine_img: "https://i0.wp.com/helpfulcaptain.com/wp-content/uploads/2019/11/Pan-Seared-Blackfin-Tuna-ready-to-eat-scaled.jpg?resize=1280%2C640&ssl=1"
    }

    console.log(articles);
    
}
