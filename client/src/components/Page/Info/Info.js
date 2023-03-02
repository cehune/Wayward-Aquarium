import React from 'react'
import './info.scss'
export const Info = ({ info}) => {

  return (
    <div>

      {/*Intro or description Section */}
      <div className='intro'>
        <div className='left'>
          <p>{info.description}</p>
        </div>
        <div className='right'>
          <img src={info.img1} alt='image of a fish' />
        </div>

      </div>
      {/*Endangerment Population Status*/}
      <p className='status'>{info.status}</p>
      <hr></hr>

      {/*Quote Section */}
      <div className='quote'>
        <h3>Quote: </h3>
        <p>"{info.quote}"</p>
      </div>
      <hr></hr>


      {/*Food Section */}
      <div className='food'>
        <div className='taste'>
          <h3>Taste:</h3>
          <p>{info.Taste}</p>
        </div>
        <div className='texture'>
          <h3>Texture:</h3>
          <p>{info.Texture}</p>
        </div>
      </div>

    </div>
  )
}
