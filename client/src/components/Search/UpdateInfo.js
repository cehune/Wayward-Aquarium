export const updateInfo = (res) => {
    let newInfo = {
        title: res.data[0].title,
        name: res.data[0].name,
        url: res.data[0].url,
        description: res.data[0].description,
        status: res.data[0].status,
        scientific: res.data[0].scientific,
        health_benefits: res.data[0].health_benefits,
        quote: res.data[0].quote,
        tags: res.data[0].tags,
        img: res.data[0].img,
        cuisine_img: res.data[0].cuisine_img,
        liked: res.data[0].liked,
        Taste: res.data[0].Taste,
        Texture: res.data[0].Texture
    }
    return newInfo;
}