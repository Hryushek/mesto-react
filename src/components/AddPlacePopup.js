import React, {useState} from 'react';
import PopupWithForm from "./PopupWithForm";

const AddPlacePopup = ({ isOpen, onClose, onAddPlace }) => {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleLinkChange = (e) => {
        setLink(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        onAddPlace({
            name,
            link
        });
        setName('');
        setLink('');
    }

    return (

        <PopupWithForm
          title={'Новое место'}
          name={'new-card'}
          isOpen={isOpen}
          onClose={onClose}
          btnText={'Создать'}
          onSubmit={handleSubmit}
          >
            <fieldset className="popup__info">
                  <label className="popup__input-label">
                    <input type="text" className="popup__input" placeholder="Название" id="name" name="name" value={name} onChange={handleNameChange} minLength={2} maxLength={30} required />
                    <span className="popup__input-error name-error" />
                  </label>
                  <label className="popup__input-label">
                    <input type="url" className="popup__input" placeholder="Ссылка на картинку" id="link" name="link" value={link} onChange={handleLinkChange} required />
                    <span className="popup__input-error link-error" />
                  </label>
            </fieldset>
        </PopupWithForm>
    );
};

export default AddPlacePopup;