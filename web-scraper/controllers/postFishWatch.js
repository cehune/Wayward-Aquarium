
import fs from 'fs'
const lower = 111; 
const upper = 115;

export const getFishWatch = response => {
        
    const url = "https://www.fishwatch.gov/"
    const fishInfo = response.data;
    
    console.log(typeof fishInfo)
    console.log("cute trans girl!! need confidence awa");
    let titles = []
    let articles = {};

    for (let count = lower; count <= upper; ++count) {
        const title = fishInfo[count]["Species Name"]
        titles[count] = title;
        articles[title] = {
            title: title,
            url: url,
            description: fishInfo[count]["Biology"],
            status: fishInfo[count]["Population Status"],
            scientific: fishInfo[count]["Scientific Name"],
            health_benefits: fishInfo[count]["Health Benefits"],
            quote: fishInfo[count]["Quote"],
            tags: [],
            img: "",
            cuisine_img: "",
            liked: false,
            Taste: fishInfo[count]["Taste"],
            Texture: fishInfo[count]["Texture"],
            
        }

    }

    console.log(titles)
    console.log(articles)

     //"DATA ONLY AVAILABLE FOR STINGRAYS IN GENERAL."
    
    
}
