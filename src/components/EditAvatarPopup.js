import React, {useRef} from 'react';
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = ({ isOpen, onClose, onUpdateAvatar }) => {
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        onUpdateAvatar({
            avatar: inputRef.current.value,
        });
        inputRef.current.value = ''
    }

    return (
        <PopupWithForm
          title={'Обновить аватар'}
          name={'avatar'}
          isOpen={isOpen}
          onClose={onClose}
          btnText={'Сохранить'}
          onSubmit={handleSubmit}
          >
            <fieldset className="popup__info">
                <label className="popup__input-label">
                  <input ref={inputRef} type="url" className="popup__input" placeholder="Ссылка на аватар" id="avatar" name="avatar_link" required />
                  <span className="popup__input-error avatar-error" />
                </label>
            </fieldset>
        </PopupWithForm>
    );
};

export default EditAvatarPopup;