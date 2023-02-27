import React from 'react'
import {members} from './members'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Typography } from '@mui/material'
import createTheme from '@mui/material'
import { options, options1 } from '../../../fishlist'
import { fetchGoogle } from '../../../api/googleSearch'
import { updateInfo } from '../../Search/UpdateInfo'
import { fetchGoogleCooked } from '../../../api/googleSearch'


export const CephalopodCategory = ({info, setInfo, fish, setFish, gallery, setGallery, setCookedGallery, cookedGallery}) => {
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
    <div>CephalopodCategory
<ul> 
      {members.map((element, i) => 
          <Link to='/fish' onClick = {() => {
              setFish(element);
              console.log(`http://localhost:5000/api/${options1[options.indexOf(`${element}`)]}`)
              fetchPosts(`http://localhost:5000/api/${options1[options.indexOf(`${element}`)]}`);
            // fetchImages(`https://www.googleapis.com/customsearch/v1?key=AIzaSyC7rfERpLa72sPFloCJTyzPwOyeZpauM34&cx=537b9c7d871a14705&q=${element}&searchType=image`, false)
            // fetchImages(`https://www.googleapis.com/customsearch/v1?key=AIzaSyC7rfERpLa72sPFloCJTyzPwOyeZpauM34&cx=537b9c7d871a14705&q=cooked%20${element}&searchType=image`, true)
          }}>{element}</Link> 
      )}
</ul>

    </div>
  )
}
