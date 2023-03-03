import React from 'react'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button } from '@mui/material';
import './page.scss'
import { useState } from 'react';
export const  Like= ({info, favourites, leastFavourites, setLeastFavourites, setFavourites}) => {
    const [liked, setLiked] = useState(favourites.includes(info.name))
    const [warning, setWarning] = useState(false)
    
  return (
    <div className='satisfaction'><div className='innersatisfaction'>
        <div className='favourite'>
    <Button sx={favourites.includes(info.name) ?  {background: "red", ":hover": {background: 'red'}} : {border: "solid 1px grey"}}
    
        onClick={()=> {
          if (!favourites.includes(info.name) && !leastFavourites.includes(info.name)) {
            setFavourites= favourites.push(info.name)
            setLiked(true)
            setWarning(false)
          }
          else if (!favourites.includes(info.name) && leastFavourites.includes(info.name)) {
            setWarning(true)
          }
          else {
            setFavourites=favourites.splice(favourites.indexOf(info.name), 1)
            setLiked(false)
            setWarning(false)
          }
          console.log(liked)
        }}>
            <FavoriteIcon sx={favourites.includes(info.name) ?  {color: "white"} : {color: "grey"}}/>
    </Button>
    {favourites.includes(info.name) ? <p>Favourited</p> : <p>Favourite</p>}
    </div>
    <div className='favourite unfavourite'>
    <Button sx={leastFavourites.includes(info.name) ?  {background: "blue", ":hover": {background: 'blue'}} : {border: "solid 1px grey"}}
    
        onClick={()=> {
          if (!leastFavourites.includes(info.name) && !favourites.includes(info.name)) {
            setLeastFavourites= leastFavourites.push(info.name)
            setLiked(true)
            setWarning(false)
          }
          else if (favourites.includes(info.name) && !leastFavourites.includes(info.name)) {
            setWarning(true)
          }
          else {
            setLeastFavourites=leastFavourites.splice(leastFavourites.indexOf(info.name), 1)
            setLiked(false)
            setWarning(false)
          }
          console.log(liked)
        }}>
            <SentimentVeryDissatisfiedIcon sx={leastFavourites.includes(info.name) ?  {color: "white"} : {color: "grey"}}/>
    </Button>
    {leastFavourites.includes(info.name) ? <p>Disliked</p> : <p>Dislike</p>}
    
    </div>

    </div>
    {warning ? <p>// do not have a love hate relationship with the fish.</p> : <p></p>}
</div>
  )
}
