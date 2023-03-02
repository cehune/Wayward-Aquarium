import React from 'react'
import './gallery.scss'

export const Gallery = ({ info }) => {
  const gal = {
    img1: info.img1,
    img2: info.img2,
    img3: info.img3,
    img4: info.img4,
    img5: info.img5,
    img6: info.img6,
    img7: info.img7,
    img8: info.img8,
    img9: info.img9,
    img10: info.img10,
    img11: info.img11,
    img12: info.img12,
    img13: info.img13,
    img14: info.img14
  }
  console.log(JSON.stringify(gal))
  return (
    <div className='gallery'> { /*flexed*/}

      {/* Gallery with 3 different columns, just taking from 
    gallery and cookedGallery*/ }
      <div className='collumn'>
        <img src={info.img1} alt="" />
        <img src={info.img14} alt="" />
        <img src={info.img7} alt="" />
        <img src={info.img2} alt="" />
        <img src={info.img3} alt="" />


      </div>
      <div className='collumn'>
        <img src={info.img12} alt="" />
        <img src={info.img11} alt="" />
        <img src={info.img5} alt="" />
        <img src={info.img10} alt="" />

      </div>
      <div className='collumn'>
        <img src={info.img4} alt="" />
        <img src={info.img9} alt="" />
        <img src={info.img8} alt="" />
        <img src={info.img6} alt="" />
      </div>
    </div>
  )
}
