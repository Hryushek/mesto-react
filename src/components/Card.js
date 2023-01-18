import React from "react";
import trash from "../images/trash.svg"

const Card = ({ image, myKey, title, likesCount, onCardClick, card }) => {
    return (
        <li className="card__item" key={myKey}>
            <img src={trash} alt="корзина" className="card__thrash" />
            <img src={image} alt={title} className="card__photo" onClick={() => onCardClick(card)} />
            <div className="card__description" >
                <h2 className="card__name">{title}</h2>
                <div className="card__like-container">
                <button className="card__like-button" type="button" />
                <p className="card__like-counter">{likesCount}</p>
            </div>
            </div>
        </li>
    )
}

export default Card;