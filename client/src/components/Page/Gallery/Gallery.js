import React from 'react'
import './gallery.scss'

export const Gallery = ({gallery, cookedGallery}) => {
  return (
    <div className='gallery'> { /*flexed*/}
      <div className='collumn'>
          <img src={gallery.img4} alt='image of a fish'/>
          <img src={cookedGallery.img4} alt='image of a fish'/>
          <img src={gallery.img5} alt='image of a fish'/>
          <img src={cookedGallery.img5} alt='image of a fish'/>
          <img src={cookedGallery.img6} alt='image of a fish'/>
          <img src={gallery.img6} alt='image of a fish'/>
    
      </div>
      <div className='collumn'>
          <img src={gallery.img1} alt='image of a fish'/>
          <img src={cookedGallery.img1} alt='image of a fish'/>
          <img src={cookedGallery.img2} alt='image of a fish'/>
          <img src={gallery.img2} alt='image of a fish'/>
          <img src={cookedGallery.img3} alt='image of a fish'/>
          <img src={gallery.img3} alt='image of a fish'/>
      </div>
      <div className='collumn'>
          <img src={cookedGallery.img7} alt='image of a fish'/>
          <img src={cookedGallery.img8} alt='image of a fish'/>
          <img src={gallery.img7} alt='image of a fish'/>
          
          <img src={gallery.img8} alt='image of a fish'/>
          <img src={gallery.img9} alt='image of a fish'/>
          <img src={cookedGallery.img9} alt='image of a fish'/>
          
      </div>

               
    </div>
  )
}
