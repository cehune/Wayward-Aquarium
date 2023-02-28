
import fs from 'fs'


export const getFishWatch = response => {
        
    const url = ""
    const fishInfo = response.data;

    console.log("cute trans girl!! need confidence awa");
    let titles = []
    let articles = {};

    for (let count = lower; count <= upper; ++count) {
        const title = fishInfo[count]["Species Name"]
        titles[count] = title;
        articles[title] = {
            title: title,
            name: title,
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

    console.log(JSON.stringify(articles))

     //"DATA ONLY AVAILABLE FOR STINGRAYS IN GENERAL."
    
    
}
