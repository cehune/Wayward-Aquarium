import React from 'react'
import { Link } from 'react-router-dom'
import './groupselect.scss'
import {Card, CardActions, CardContent} from '@mui/material'
import {Button} from '@mui/material'
export const GroupSelect = () => {
  return (
    <div className='categories'>
      <div  className='card'>
          <h2>Marine Animal Categories</h2>
          <p>!!!More categories and more fish species are to be added soon!</p>
            <Button variant='contained' sx={{paddingRight: 5, paddingLeft: 5, borderRadius: 6, margin: 1, ":hover": {background: "#F39C9C "}}}><Link to='/fishCategory' className='link'>Fish</Link></Button>
            <Button variant='contained' sx={{paddingRight: 5, paddingLeft: 5, borderRadius: 6, margin: 1, ":hover": {background: "#F39C9C "}}}><Link to='/sharkCategory' className='link'>Sharks</Link></Button>
            <Button variant='contained' sx={{paddingRight: 5, paddingLeft: 5, borderRadius: 6, margin: 1, ":hover": {background: "#F39C9C "}}}><Link to='/shellfishCategory' className='link'>Shellfish</Link></Button>
            <Button variant='contained' sx={{paddingRight: 5, paddingLeft: 5, borderRadius: 6, margin: 1, ":hover": {background: "#F39C9C "}}}><Link to='/cephalopodCategory' className='link'>Cephalopods</Link></Button>
            <Button variant='contained' sx={{paddingRight: 5, paddingLeft: 5, borderRadius: 6, margin: 1, ":hover": {background: "#F39C9C "}}}><Link to='/otherCategory' className='link'>Other</Link></Button>

      </div>
     
    </div>
  )
}
