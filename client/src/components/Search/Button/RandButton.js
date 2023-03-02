import { Button } from "@mui/material";
import { updateInfo } from "../UpdateInfo";
import React from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import { options1 } from "../../../fishlist";

const apiURL = "http://localhost:5000/api/"
export const RandButton = ({ setInfo, setGallery, setCookedGallery}) => {

    const fetchRandPost = async(URL, fish) => await axios.get(URL + fish)
    .then((res) => {
        setInfo(updateInfo(res))
    })

  return (
    <Link to="/fish" onClick = {()=> {
      
      const randomFish = options1[Math.floor(Math.random() * options1.length)];
      fetchRandPost(apiURL, randomFish)
      window.scroll(0,0);
      //Empty the search bar if theres a fish name in it
      if (document.getElementsByClassName('MuiAutocomplete-clearIndicator').length > 0) {
        document.getElementsByClassName('MuiAutocomplete-clearIndicator')[0].click()
      }
      
 }}style={{textDecoration: "none", color: "black"}}>
  <Button sx={{background: "#B7E5FF", borderRadius:20, padding: 2,marginTop: 2, marginBottom: 2, color: "black"}}
     variant='contained'>Random Fish</Button></Link>
  )
}
