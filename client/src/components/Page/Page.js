import React from 'react'
import {useSelector} from 'react-redux';
import { Gallery } from './Gallery/Gallery';
import { Info } from './Info/Info';
import { Route, Routes, Link } from 'react-router-dom';
import { Button } from '@mui/material';
export const Page = ({info, setInfo, fish, setFish, gallery, cookedGallery, setGallery, seeInfo, setSeeInfo}) => {

  return (
    <div> 

      <h1>{info.name}</h1>
        <Button onClick={() => { //switch to the info section
          if (seeInfo == false) {
              setSeeInfo(true)}}}>info</Button>
        <Button onClick={() => { //switch to the gallery section
          if (seeInfo == true) {
              setSeeInfo(false)}}} >gallery</Button>
        <h1></h1>
        {seeInfo ? <Info info={info}/> : <Gallery gallery={gallery} cookedGallery={cookedGallery}/>}
    </div>
  )
}
