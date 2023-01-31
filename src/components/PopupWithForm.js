import React from 'react';

const PopupWithForm = ({ title, name, children, isOpen, onClose, btnText, onSubmit }) => {

    return (
        <div className={`popup ${isOpen ? 'popup_opened' : ''}`} id={`popup_${name}`}>
          <div className="popup__container">
            <button className="popup__close-button" id={`${name}_close`} type="button" onClick={onClose} />
            <form className="popup__form" name={`${name}_form`} id={`${name}_form`} noValidate onSubmit={onSubmit}>
              <h3 className="popup__text">{title}</h3>
              {children}
              <button className="popup__save-button popup__save-button_inactive" type="submit">{btnText}</button>
            </form>
          </div>
        </div>
    )
}

export default PopupWithForm;