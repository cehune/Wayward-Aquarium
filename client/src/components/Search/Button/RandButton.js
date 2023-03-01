import { Button } from "@mui/material";
import { updateInfo } from "../UpdateInfo";
import React from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import { options1 } from "../../../fishlist";
import { fetchGoogle } from "../../../api/googleSearch";
import { fetchGoogleCooked } from "../../../api/googleSearch";
const apiURL = "http://localhost:5000/api/"
export const RandButton = ({info, setInfo, fish, setFish, gallery, setGallery, setCookedGallery, cookedGallery}) => {

    const fetchRandPost = async(URL, fish) => await axios.get(URL + fish)
    .then((res) => {
        setInfo(updateInfo(res))
    })
    const fetchImages = async(URL, cooked) => await axios.get(URL)
      .then((res) => {
          if (cooked !== true) {
            setGallery(fetchGoogle(res))
          } else if (cooked == true) {
            setCookedGallery(fetchGoogleCooked(res))
          }
  })

  return (
    <Link to="/fish" style={{textDecoration: "none", color: "black"}}><Button sx={{background: "#B7E5FF", borderRadius:20, padding: 2,marginTop: 2, marginBottom: 2, color: "black"}}
    
    onClick = {()=> {
          const randomFish = options1[Math.floor(Math.random() * options1.length)];
          window.scroll(0,0)
          fetchRandPost(apiURL, randomFish)
          fetchImages(`https://www.googleapis.com/customsearch/v1?key=AIzaSyC7rfERpLa72sPFloCJTyzPwOyeZpauM34&cx=537b9c7d871a14705&q=${randomFish}&searchType=image`, false)
          fetchImages(`https://www.googleapis.com/customsearch/v1?key=AIzaSyC7rfERpLa72sPFloCJTyzPwOyeZpauM34&cx=537b9c7d871a14705&q=cooked%20${randomFish}&searchType=image`, true)

          if (document.getElementsByClassName('MuiAutocomplete-clearIndicator').length > 0) {
            document.getElementsByClassName('MuiAutocomplete-clearIndicator')[0].click()
          }
     }} variant='contained'>Random Fish</Button></Link>
  )
}
