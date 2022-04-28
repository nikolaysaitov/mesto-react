import React from 'react';

function Card ({card, onCardClick}) {
  

  const handleClick = () => {
    // console.log('card', card);
    onCardClick(card);
  };

  return (
    
    <li className="pictures__item">
        <button className="pictures__delete" type="button" aria-label="удалить"></button>

        <img className="pictures__image" alt={card.name} src={card.link} onClick={handleClick}/>
        <div className="pictures__description">
            <h2 className="pictures__title">{card.name}</h2>
            <div className="pictures__like-box">
                 <button className="pictures__like" type="button"></button>
                <span className="pictures__like-count">{card.likes.length}</span></div>
           
        </div>
    </li>

  );
}

export default Card;


