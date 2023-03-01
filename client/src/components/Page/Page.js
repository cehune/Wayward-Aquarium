import React from 'react'
import { useSelector } from 'react-redux';
import { Gallery } from './Gallery/Gallery';
import { Info } from './Info/Info';
import { Route, Routes, Link } from 'react-router-dom';
import { Button } from '@mui/material';
import './page.scss'
import { Theme } from '@mui/material';
import { buttonStyleActive, buttonStyleAsleep } from './PageStyles';

export const Page = ({ info, setInfo, fish, setFish, gallery, cookedGallery, setGallery, seeInfo, setSeeInfo }) => {

  return (
    
    <div><div className='page'>

      <h1 className='name'>{info.name}</h1>
      <div className='tagSection'>
          <h4>Traits:</h4>
            <div className='tags'> 
                {  
                    info.tags.map(element => <div><p>{element}</p></div>)       
                }
            </div>

        </div>
      <h4 className='scientific'>{info.scientific}</h4>
      <hr />
      <Button variant='outlined' 
          onClick={() => { //switch to the info section
          if (seeInfo == false) { setSeeInfo(true)}
          }}
          sx={seeInfo ? buttonStyleActive : buttonStyleAsleep}
      >info</Button>
      <Button variant='outlined' 
          onClick={() => { //switch to the info section
          if (seeInfo == true) { setSeeInfo(false)}
          }}
          sx={seeInfo ?  buttonStyleAsleep: buttonStyleActive}
      >Gallery</Button>

      {seeInfo ? <Info info={info} gallery={gallery} /> : <Gallery gallery={gallery} cookedGallery={cookedGallery} />}
      
    </div>
    
    <div className='end'>
          <p>
            Sounds delicious! Thanks for reading about {info.name}! If you haven't already, consider checking out the gallery!
          </p>
         </div>
      </div>
  )
}
