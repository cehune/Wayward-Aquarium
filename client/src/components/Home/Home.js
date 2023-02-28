import React from 'react'
import { GroupSelect } from '../Group/GroupSelect'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Footer } from '../Footer/Footer';
import './home.scss'
export const Home = () => {
  return (
<div>
    <div className='main'>
      <h1>wayward aquarium</h1>
      <h3>Find fish in the search bar or randomized fish generator in the top right, or search by category below. Enjoy! </h3>

    </div>
    <GroupSelect />
    <Footer />
</div>
  )
}
