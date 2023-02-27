import axios from 'axios'

export const fetchGoogle = (res) => {
    let images = {
        img1 : res.data.items[0].link,
        img2 : res.data.items[1].link,
        img3 : res.data.items[2].link,
        img4 : res.data.items[3].link,
        img5 : res.data.items[4].link,
        img6 : res.data.items[5].link,
        img7 : res.data.items[6].link,
        img8 : res.data.items[7].link,
        img9 : res.data.items[8].link
    }
    return images;
}
export const fetchGoogleCooked = (res) => {
    let images = {
        img1 : res.data.items[0].link,
        img2 : res.data.items[1].link,
        img3 : res.data.items[2].link,
        img4 : res.data.items[3].link,
        img5 : res.data.items[4].link,
        img6 : res.data.items[5].link,
        img7 : res.data.items[6].link,
        img8 : res.data.items[7].link,
        img9 : res.data.items[8].link
    }
    return images;
}