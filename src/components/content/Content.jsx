import React from 'react'
import Card from '../Card'
import "./Content.css"
const Content = ({ articles }) => {
  return (
    <div className='Content'>
          <ul>
          {articles.map((article) => (
                    
                <li key={article}><Card  article={article}/></li>
                  
              ))}
          </ul>
     
    </div>
  )
}

export default Content