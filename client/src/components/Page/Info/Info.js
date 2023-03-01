import React from 'react'
import './info.scss'
export const Info = ({info, gallery}) => {

  return (
    <div>
        <div className='intro'>
            <div className='left'><p>{info.description}</p></div>
            <div className='right'>
              <img src={gallery.img1} alt='image of a fish' />
            </div>
            
        </div>
        <p className='status'>{info.status}</p>
        <hr></hr>
         <div className='quote'> 
            <h3>Quote: </h3>
            <p>"{info.quote}"</p>
         </div>
         <hr></hr>

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
