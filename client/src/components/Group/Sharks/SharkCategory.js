import React from 'react'
import { members } from './members'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {Button }from '@mui/material'
import { options, options1 } from '../../../fishlist'
import { updateInfo } from '../../Search/UpdateInfo'
import '../groupstyle.scss'
import { buttonStyle } from '../../Page/PageStyles'


export const SharkCategory = ({ setInfo}) => {
  const fetchPosts = async(URL) => await axios.get(URL)
  .then((res) => {
      setInfo(updateInfo(res))
})

return (
  <div className='category' >
  <h1>Cephalopods</h1>
  <div className='members'style={{display:"block"}}> 
  {members.map((element, i) => 
      <div> 
      <Link to='/fish' onClick = {() => {
          window.scrollTo(0, 0);
          fetchPosts(`http://localhost:5000/api/${options1[options.indexOf(`${element}`)]}`);
        }} className='link'><Button variant='outlined' sx={buttonStyle}>{element}</Button></Link> 
      </div> 

  )}
  </div>
</div>
  )
}
