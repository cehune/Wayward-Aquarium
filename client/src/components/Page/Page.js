import React from 'react'
import { Gallery } from './Gallery/Gallery';
import { Info } from './Info/Info';
import { Button } from '@mui/material';
import './page.scss'
import { Like } from './Like';
import { buttonStyleActive, buttonStyleAsleep } from './PageStyles';

export const Page = ({ info, favourites, leastFavourites, setLeastFavourites, setFavourites,seeInfo, setSeeInfo }) => {
  return (
    <div><div className='page'>

      <h1 className='name'>{info.name}</h1>
      <div className='tagSection'>
        <h4>Traits:</h4>
        <div className='tags'>
          {
            info.tags.map(element => <div><p>{element}</p></div>)
          }
        </div>

      </div>
      <h4 className='scientific'>{info.scientific}</h4>
      <Like 
          info={info}
          favourites={favourites}
          leastFavourites={leastFavourites}
          setLeastFavourites={setLeastFavourites}
          setFavourites={setFavourites}
      />

      <hr />

      <Button variant='outlined'
        onClick={() => { //switch to the info section
          if (seeInfo === false) { setSeeInfo(true) }
        }}
        sx={seeInfo ? buttonStyleActive : buttonStyleAsleep}
      >info</Button>

      <Button variant='outlined'
        onClick={() => { //switch to the info section
          if (seeInfo === true) { setSeeInfo(false) }
        }}
        sx={seeInfo ? buttonStyleAsleep : buttonStyleActive}
      >Gallery</Button>

      {/* Switch between viewing the info or gallery section based on above button state */}
      {seeInfo ? <Info info={info}  /> : <Gallery info={info} />}

    </div>
      {/*Footer section */}
      <div className='end'>
        {seeInfo ? <p>
          Sounds delicious! Thanks for reading about {info.name}! If you haven't already, consider checking out the gallery!
        </p> : <p>
          Looks Delicious! Thanks for looking at the {info.name}! If you haven't already, consider checking out the fish info!
        </p>}
      </div>
    </div>
  )
}
