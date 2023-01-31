import React, {useContext} from "react";
import trash from "../images/trash.svg"
import CurrentUserContext from "../context/CurrentUserContext.js";

const hidden = {
    display: 'none'
}

const Card = ({ image, myKey, title, likesCount, onCardClick, onCardLike, onCardDelete, card }) => {

    const user = useContext(CurrentUserContext)

    const isOwn = card.owner._id !== user._id;
    const isLiked = card.likes.some(i => i._id === user._id);
    const cardLikeButtonClassName = `card__like-button ${isLiked ? 'card__like-button_activated' : ''}`

    return (
        <li className="card__item" key={myKey}>
            <img src={trash} alt="корзина" className="card__thrash" style={isOwn ? hidden : null} onClick={() => {
                     onCardDelete(card)}} />
            <img src={image} alt={title} className="card__photo" onClick={() => onCardClick(card)} />
            <div className="card__description" >
                <h2 className="card__name">{title}</h2>
                <div className="card__like-container">
                <button className={cardLikeButtonClassName} type="button" onClick={() => {
                    onCardLike(card)
                    }}/>
                <p className="card__like-counter">{likesCount}</p>
            </div>
            </div>
        </li>
    )
}

export default Card;