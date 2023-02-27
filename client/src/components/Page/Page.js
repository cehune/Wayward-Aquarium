import React from 'react'
import {useSelector} from 'react-redux';
import { Gallery } from './Gallery/Gallery';
import { Info } from './Info/Info';
import { Route, Routes, Link } from 'react-router-dom';

export const Page = ({info, setInfo, fish, setFish, gallery, cookedGallery, setGallery, seeInfo, setSeeInfo}) => {

  return (
    <div> 
        <button onClick={() => { //switch to the info section
          if (seeInfo == false) {
              setSeeInfo(true)}}}>info</button>
        <button onClick={() => { //switch to the gallery section
          if (seeInfo == true) {
              setSeeInfo(false)}}} >gallery</button>

        {seeInfo ? <Info info={info}/> : <Gallery gallery={gallery} cookedGallery={cookedGallery}/>}
    </div>
  )
}
