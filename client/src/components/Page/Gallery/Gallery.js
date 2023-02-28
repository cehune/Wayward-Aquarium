import React from 'react'

export const Gallery = ({gallery, cookedGallery}) => {
  return (
    <div><img src={gallery.img1} />
    <img src={gallery.img2}/>
    <img src={cookedGallery.img1}/></div>
  )
}
