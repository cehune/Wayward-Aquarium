import { Button } from "@mui/material";
import { updateInfo } from "../UpdateInfo";
import React from 'react'
import axios from "axios";
import { options, options1 } from "../../../fishlist";

const apiURL = "http://localhost:5000/api/"
export const RandButton = ({info, setInfo, fish, setFish, searchClear, setSearchClear}) => {

    const fetchRandPost = async(URL, fish) => await axios.get(URL + fish)
    .then((res) => {
        setInfo(updateInfo(res))
    })/*
    const getRand = (array, URL) => {
        const randomFish = array[Math.floor(Math.random() * array.length)];
        fetchRandPost(URL, randomFish)
    }
*/
  return (
    <Button onClick = {()=> {
      fetchRandPost(apiURL, "Butterfish")
      setSearchClear(true);
      console.log(searchClear)
    }}>here</Button>
  )
}
