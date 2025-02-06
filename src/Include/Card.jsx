import React from 'react'

const Card = ({image, title, description, link }) => {
  return (
    <>
    <div class="card">
                <div class="card_image">
                    <img src={image} alt={title}/>
                    </div>
                <div class="card_content">
                <h3>{title}</h3>
                <p>{description}</p>
                  <br />
                  <Link to={link} className="card-btn">Explore More</Link>
                </div>
              </div>
    
    
    </>
  )
}

export default Card
