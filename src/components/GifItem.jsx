import React from 'react'

export const GifItem = ({title,url,id}) => {
  //console.log(imagen);
  return (
   <div className='card'>
      <img src={url} alt={title}></img>
      <p>{title}</p>
   </div>
    
  )
}
