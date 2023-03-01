import React from 'react'
import { members } from './members'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Typography } from '@mui/material'
import {Button }from '@mui/material'
import createTheme from '@mui/material'
import { options, options1 } from '../../../fishlist'
import { fetchGoogle } from '../../../api/googleSearch'
import { updateInfo } from '../../Search/UpdateInfo'
import { fetchGoogleCooked } from '../../../api/googleSearch'
import '../groupstyle.scss'
import { buttonStyle } from '../../Page/PageStyles'


export const SharkCategory = ({info, setInfo, fish, setFish, gallery, setGallery, setCookedGallery, cookedGallery}) => {
  const fetchPosts = async(URL) => await axios.get(URL)
  .then((res) => {
      setInfo(updateInfo(res))
})
const fetchImages = async(URL, cooked) => await axios.get(URL)
  .then((res) => {
    console.log(cooked)
      if (cooked !== true) {
        setGallery(fetchGoogle(res))
      } else if (cooked == true) {
        setCookedGallery(fetchGoogleCooked(res))
      }
})

return (
  <div className='category' >
  <h1>Cephalopods</h1>
  <div className='members'style={{display:"block"}}> 
  {members.map((element, i) => 
      <div> 
      <Link to='/fish' onClick = {() => {
          setFish(element);
          window.scrollTo(0, 0);
          console.log(`http://localhost:5000/api/${options1[options.indexOf(`${element}`)]}`)
          fetchPosts(`http://localhost:5000/api/${options1[options.indexOf(`${element}`)]}`);
          fetchImages(`https://www.googleapis.com/customsearch/v1?key=AIzaSyC7rfERpLa72sPFloCJTyzPwOyeZpauM34&cx=537b9c7d871a14705&q=${element}&searchType=image`, false)
          fetchImages(`https://www.googleapis.com/customsearch/v1?key=AIzaSyC7rfERpLa72sPFloCJTyzPwOyeZpauM34&cx=537b9c7d871a14705&q=cooked%20${element}&searchType=image`, true)
      }} className='link'><Button variant='outlined' sx={buttonStyle}>{element}</Button></Link> 
      </div> 

  )}
  </div>
</div>
  )
}
