import React from 'react'
import { members1, members2} from './members'
import { Link } from 'react-router-dom'
import {Button }from '@mui/material'
import axios from 'axios'
import { Typography } from '@mui/material'
import createTheme from '@mui/material'
import { options, options1 } from '../../../fishlist'
import { fetchGoogle } from '../../../api/googleSearch'
import { updateInfo } from '../../Search/UpdateInfo'
import { fetchGoogleCooked } from '../../../api/googleSearch'
import './fishCategory.scss'
export const FishCategory = ({info, setInfo, fish, setFish, gallery, setGallery, setCookedGallery, cookedGallery}) => {
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
    <div className='category'>
        <h1>Fish</h1>
        <div className='members'> 
            <div className='members1'>
                {members1.map((element, i) => 
                <div> 
                <Link to='/fish' onClick = {() => {
                    setFish(element);
                    window.scrollTo(0, 0);
                    console.log(`http://localhost:5000/api/${options1[options.indexOf(`${element}`)]}`)
                    fetchPosts(`http://localhost:5000/api/${options1[options.indexOf(`${element}`)]}`);
                  // fetchImages(`https://www.googleapis.com/customsearch/v1?key=AIzaSyC7rfERpLa72sPFloCJTyzPwOyeZpauM34&cx=537b9c7d871a14705&q=${element}&searchType=image`, false)
                  // fetchImages(`https://www.googleapis.com/customsearch/v1?key=AIzaSyC7rfERpLa72sPFloCJTyzPwOyeZpauM34&cx=537b9c7d871a14705&q=cooked%20${element}&searchType=image`, true)
                }} className='link'><Button variant='outlined' sx={{paddingRight: 5, paddingLeft: 5, borderRadius: 6, margin: 1, fontSize: 22, ":hover": {background: "#A0F69C "}}}>{element}</Button></Link> 
                </div> 
            )}
            </div>
            <div className='members2'>
                {members2.map((element, i) => 
                <div> 
                <Link to='/fish' onClick = {() => {
                    setFish(element);
                    window.scrollTo(0, 0);
                    console.log(`http://localhost:5000/api/${options1[options.indexOf(`${element}`)]}`)
                    fetchPosts(`http://localhost:5000/api/${options1[options.indexOf(`${element}`)]}`);
                  // fetchImages(`https://www.googleapis.com/customsearch/v1?key=AIzaSyC7rfERpLa72sPFloCJTyzPwOyeZpauM34&cx=537b9c7d871a14705&q=${element}&searchType=image`, false)
                  // fetchImages(`https://www.googleapis.com/customsearch/v1?key=AIzaSyC7rfERpLa72sPFloCJTyzPwOyeZpauM34&cx=537b9c7d871a14705&q=cooked%20${element}&searchType=image`, true)
                }} className='link'><Button variant='outlined' sx={{paddingRight: 5, paddingLeft: 5, borderRadius: 6, margin: 1, fontSize: 22, ":hover": {background: "#A0F69C "}}}>{element}</Button></Link> 
                </div> 
            )}
            </div>
        </div>
    </div>
  )
}
