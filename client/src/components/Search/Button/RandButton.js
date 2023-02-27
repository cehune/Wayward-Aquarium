import { Button } from "@mui/material";
import { updateInfo } from "../UpdateInfo";
import React from 'react'
import userEvent from '@testing-library/user-event'
import axios from "axios";
import { Link } from "react-router-dom";
import { options, options1 } from "../../../fishlist";

const apiURL = "http://localhost:5000/api/"
export const RandButton = ({info, setInfo, fish, setFish, searchClear, setSearchClear}) => {

    const fetchRandPost = async(URL, fish) => await axios.get(URL + fish)
    .then((res) => {
        setInfo(updateInfo(res))
    })


  return (
    <Button sx={{background: "#B7E5FF", borderRadius:20, marginTop: 2, marginBottom: 2}}
    
    onClick = {()=> {
          const randomFish = options1[Math.floor(Math.random() * options1.length)];
          fetchRandPost(apiURL, randomFish)
          if (document.getElementsByClassName('MuiAutocomplete-clearIndicator').length > 0) {
            document.getElementsByClassName('MuiAutocomplete-clearIndicator')[0].click()
          }
     }} variant='contained'><Link to="/fish" style={{textDecoration: "none", color: "black"}}>Random Fish</Link></Button>
  )
}
