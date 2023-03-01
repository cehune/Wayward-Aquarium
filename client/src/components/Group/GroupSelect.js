import React from 'react'
import { Link } from 'react-router-dom'
import './groupselect.scss'

import {Button} from '@mui/material'
import { buttonStyle } from '../Page/PageStyles'


export const GroupSelect = () => {
  return (
    <div className='categories'>
      <div  className='card'>
          <h2>Marine Animal Categories</h2>
          <p>!!!More categories and more fish species are to be added soon!</p>
            <Link to='/fishCategory' className='link' onClick={() => window.scrollTo(0, 0)}> <Button variant='contained' sx={buttonStyle}>Fish</Button></Link>
            <Link to='/sharkCategory' className='link'onClick={() => window.scrollTo(0, 0)}><Button variant='contained' sx={buttonStyle}>Sharks</Button></Link>
            <Link to='/molluscCategory' className='link'onClick={() => window.scrollTo(0, 0)}><Button variant='contained' sx={buttonStyle}>Molluscs</Button></Link>
            <Link to='/crustaceanCategory' className='link'onClick={() => window.scrollTo(0, 0)}><Button variant='contained' sx={buttonStyle}>Crustaceans</Button></Link>
            <Link to='/otherCategory' className='link'onClick={() => window.scrollTo(0, 0)}><Button variant='contained' sx={buttonStyle}>Other</Button></Link>

      </div>
     
    </div>
  )
}
