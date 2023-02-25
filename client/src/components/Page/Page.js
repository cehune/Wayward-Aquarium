import React from 'react'
import {useSelector} from 'react-redux';

export const Page = ({info, setInfo, fish, setFish}) => {

  return (
    <div>
      <div>{info.Taste}</div>
     <div>{info.title}</div>
    </div>
  )
}
