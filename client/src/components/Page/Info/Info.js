import React from 'react'

export const Info = ({info}) => {

  return (
    <div>
        <h1>{info.name}</h1>
        <div> 
            {  
                info.tags.map(element => <div><p>{element}</p></div>)       
            }
        </div>
    </div>
  )
}
