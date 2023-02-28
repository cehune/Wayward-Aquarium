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
            <Link to='/fishCategory' className='link' onClick={() => window.scrollTo(0, 0)}> <Button variant='contained' sx={{paddingRight: 5, paddingLeft: 5, borderRadius: 6, margin: 1, fontSize: 22, ":hover": {background: "#A0F69C "}}}>Fish</Button></Link>
            <Link to='/sharkCategory' className='link'onClick={() => window.scrollTo(0, 0)}><Button variant='contained' sx={{paddingRight: 5, paddingLeft: 5, borderRadius: 6, margin: 1, fontSize: 22, ":hover": {background: "#A0F69C  "}}}>Sharks</Button></Link>
            <Link to='/molluscCategory' className='link'onClick={() => window.scrollTo(0, 0)}><Button variant='contained' sx={{paddingRight: 5, paddingLeft: 5, borderRadius: 6, margin: 1, fontSize: 22, ":hover": {background: "#A0F69C "}}}>Molluscs</Button></Link>
            <Link to='/crustaceanCategory' className='link'onClick={() => window.scrollTo(0, 0)}><Button variant='contained' sx={{paddingRight: 5, paddingLeft: 5, borderRadius: 6, margin: 1,fontSize: 22,  ":hover": {background: "#A0F69C "}}}>Crustaceans</Button></Link>
            <Link to='/otherCategory' className='link'onClick={() => window.scrollTo(0, 0)}><Button variant='contained' sx={{paddingRight: 5, paddingLeft: 5, borderRadius: 6, margin: 1, fontSize: 22, ":hover": {background: "#A0F69C "}}}>Other</Button></Link>

      </div>
     
    </div>
  )
}
