import React from 'react';

const ImagePopup = ({ onClose, card, isImageOpen }) => {
    return (
        <div className={`popup popup_photo ${isImageOpen ? 'popup_opened' : null}`}>
          <div className="popup__wrapper">
            <button className="popup__close-button popup__close-button_photo" type="button" onClick={onClose} />
            <img src={card.link} alt="" className="popup__image" />
            <h3 className="popup__description">{card.name}</h3>
          </div>
        </div>
    )
}

export default ImagePopup;