import React from 'react'
import {useSelector} from 'react-redux';

export const Page = () => {
    const posts = useSelector((state) => state.posts)
    console.log(posts)
  return (
    <div>Page</div>
  )
}
