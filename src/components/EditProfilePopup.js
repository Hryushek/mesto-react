import React, {useContext, useEffect, useState} from 'react';
import CurrentUserContext from '../context/CurrentUserContext';
import PopupWithForm from "./PopupWithForm";

const EditProfilePopup = ({isOpen, onClose, onUpdateUser}) => {
    const [name, setName] = useState('');
    const [workplace, setWorkplace] = useState('');
    const currentUser = useContext(CurrentUserContext);

    function handleSubmit(e) {
        e.preventDefault();

        onUpdateUser({
            name,
            about: workplace,
        });
        setName('');
        setWorkplace('');
    }

    useEffect(() => {
        if (currentUser.name && currentUser.about) {
            setName(currentUser.name);
            setWorkplace(currentUser.about);
        }
    }, [currentUser])

    const onNameChange = (e) => {
        setName(e.target.value)
    }

    const onWorkplaceChange = (e) => {
        setWorkplace(e.target.value)
    }

    return (
        <PopupWithForm
            title={'Редактировать профиль'}
            name={'profile'}
            isOpen={isOpen}
            onClose={onClose}
            btnText={'Сохранить'}
            onSubmit={handleSubmit}
        >

            <fieldset className="popup__info">
                  <label className="popup__input-label">
                    <input type="text" className="popup__input" placeholder="Ваше имя" id="fullName" value={name} onChange={onNameChange} name="name" minLength={2} maxLength={40} required />
                    <span className="popup__input-error fullName-error" />
                  </label>
                  <label className="popup__input-label">
                    <input type="text" className="popup__input" placeholder="О Вас" value={workplace} onChange={onWorkplaceChange} id="workplace" name="workplace" minLength={2} maxLength={200} required />
                    <span className="popup__input-error workplace-error" />
                  </label>
            </fieldset>
        </PopupWithForm>
    );
};

export default EditProfilePopup;