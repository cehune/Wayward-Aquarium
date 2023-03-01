import React from 'react'
import './gallery.scss'

export const Gallery = ({gallery, cookedGallery}) => {
  return (
    <div className='gallery'> { /*flexed*/}

    {/* Gallery with 3 different columns, just taking from 
    gallery and cookedGallery*/ }
      <div className='collumn'>
          <img src={gallery.img4}  />
          <img src={cookedGallery.img4}  />
          <img src={gallery.img5}  />
          <img src={cookedGallery.img5}  />
          <img src={cookedGallery.img6}  />
          <img src={gallery.img6}  />
    
      </div>
      <div className='collumn'>
          <img src={gallery.img1}  />
          <img src={cookedGallery.img1}  />
          <img src={cookedGallery.img2}  />
          <img src={gallery.img2}  />
          <img src={cookedGallery.img3}  />
          <img src={gallery.img3}  />
      </div>
      <div className='collumn'>
          <img src={cookedGallery.img7}  />
          <img src={cookedGallery.img8}  />
          <img src={gallery.img7}  />
          
          <img src={gallery.img8}  />
          <img src={gallery.img9}  />
          <img src={cookedGallery.img9}  />
          
      </div>

               
    </div>
  )
}
