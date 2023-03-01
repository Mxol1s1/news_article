import React from 'react'
import "./Card.css"
import DOMPurify from 'dompurify';


const Card = ({ article }) => {
    const cleanTitle = DOMPurify.sanitize(article.title.rendered)
  const cleanDescription = DOMPurify.sanitize(article.excerpt.rendered)
    // Convert the date string to a Date object
    const date = new Date(article.date);

    // Format the date as a string in a readable format
    const formattedDate = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  return (
    <div className='Card'>
        <div className='image-container'> 
            <img src={article.jetpack_featured_media_url} alt="feature"/>
        </div>
        <div className='caption-container'>
            <h3 dangerouslySetInnerHTML={{ __html: cleanTitle }}></h3>
            <p>{formattedDate}</p>
            <p dangerouslySetInnerHTML={{ __html: cleanDescription }}></p>
          
        </div>
        <div className='content-container '>
             <a href={article.link}>Read More</a>
        </div>
       
    </div>
  )
}

export default Card