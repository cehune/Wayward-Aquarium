import React from 'react'
import { members1, members2} from './members'
import { Link } from 'react-router-dom'
import {Button }from '@mui/material'
import axios from 'axios'
import { options, options1 } from '../../../fishlist'
import { updateInfo } from '../../Search/UpdateInfo'
import './fishCategory.scss'
import { buttonStyle } from '../../Page/PageStyles'


export const FishCategory = ({setInfo}) => {
  const fetchPosts = async(URL) => await axios.get(URL)
      .then((res) => {
          setInfo(updateInfo(res))
  })

  return (
    <div className='category'>
        <h1>Fish</h1>
        <div className='members'> 
            <div className='members1'>
                {members1.map((element, i) => 
                <div> 
                <Link to='/fish' onClick = {() => {
                    window.scrollTo(0, 0);
                    fetchPosts(`https://wayward-379505.uc.r.appspot.com/api/${options1[options.indexOf(`${element}`)]}`);
                }} className='link'><Button variant='outlined' sx={buttonStyle}>{element}</Button></Link> 
                </div> 
            )}
            </div>
            <div className='members2'>
                {members2.map((element, i) => 
                <div> 
                <Link to='/fish' onClick = {() => {
                    window.scrollTo(0, 0);
                    console.log(`http://localhost:5000/api/${options1[options.indexOf(`${element}`)]}`)
                    fetchPosts(`http://localhost:5000/api/${options1[options.indexOf(`${element}`)]}`);
                   }} className='link'><Button variant='outlined' sx={buttonStyle}>{element}</Button></Link> 
                </div> 
            )}
            </div>
        </div>
    </div>
  )
}
