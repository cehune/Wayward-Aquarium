# Wayward-Aquartium-2.0
The array of life beneath the surface of our true blue deep
## [See Demo](http://wayward-aquarium.surge.sh/)
![image](https://user-images.githubusercontent.com/71574223/222857364-6c998253-816e-43b0-a325-7510fca32dbc.png)
![image](https://user-images.githubusercontent.com/71574223/222857391-72e2d79b-e973-4905-b6b1-1fe75783e25b.png)
![image](https://user-images.githubusercontent.com/71574223/222857400-5edab2e2-30b1-4114-9787-b350319c43e0.png)

Wayward Aquarium is a full-stack marine zoology website. It presents 150+ species of fish, commonly fished and traded around the world. As such, for these species, it's vital to know biological information, along with attributes such as their flavour. Each fish has their own unique traits that make them great for certain dishes, and others? Not so much.

## Technologies
Using the [FishWatch API](https://www.fishwatch.gov/developers) and [Google Search JSON API](https://developers.google.com/custom-search/v1/introduction), I made a modified REST API containing information and a host images from specific google searches. Given the data from FishWatch, I cleaned it, added more content, along with 35+ more species of marine creatures.

Wayward Aquarium is made using the MERN (MongoDB, Express, NodeJS, ReactJS) Stack. I then hosted the backend on [Google Cloud Services](https://cloud.google.com/), and hosted the frontend using [Surge](https://surge.sh/). Using these tools, I used internal libraries including Material-UI, Sass CSS, Axios, and Mongoose. 

## Process and Issues
I first collected and cleaned the data from Google and FishWatch. I also built a web-scraper which derived information from Wikipedia to create new entries of fish. This sped up data collection by a large margin, but I still had to make multiple API calls for each fish, and find information which wasn't on the wikipedia page. In addition, I manually added tags and traits to each entry because I wanted to really personalize the site. 

I'll record this as my first full stack application. Therefore, it was challenging mainly building and connecting the backend, and then hosting it. I played around with AWS, and other hosting platforms, but those were far more advanced for my requirements, which is why I settled on Google Cloud. 

I love frontend, so this was a big process of playing around with states, seeing how I could display information and remove them while interacting with Material-UI components. I learned a lot in that process, with state management and component communication. 

