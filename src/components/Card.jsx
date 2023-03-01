import React from 'react'
import "./Card.css"

const Card = ({ article }) => {
  return (
    <div className='Card'>
        <div className='image-container'> 
            <img src={article.jetpack_featured_media_url} alt="feature"/>
        </div>
        <div className='caption-container'>
            <h3>{article.title.rendered}</h3>
            <p>{article.date}</p>
        </div>
       
    </div>
  )
}

export default Card