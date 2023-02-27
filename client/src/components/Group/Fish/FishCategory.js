import React from 'react'
import { members1, members2 } from './members'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Typography } from '@mui/material'
import createTheme from '@mui/material'
import { options, options1 } from '../../../fishlist'
import { fetchGoogle } from '../../../api/googleSearch'
import { updateInfo } from '../../Search/UpdateInfo'
import { fetchGoogleCooked } from '../../../api/googleSearch'

export const FishCategory = ({info, setInfo, fish, setFish, gallery, setGallery, setCookedGallery, cookedGallery}) => {

  return (
    <div>
        <h1>Category</h1>
   
        <ul> {members1.map((element, i) => <li>{element}</li> )}</ul>
        <h1>sle -.-</h1>
        <ul> {members2.map((element, i) => <li>{element}</li> )}</ul>
    </div>
  )
}
