import '../index.css';
import React, {useState} from 'react';
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isImageOpen, setIsImageOpen] = useState(false);

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImageOpen(false);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true)
  }
    
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true)
  }
    
  const handleEditAvatarClick = () => {
   setIsEditAvatarPopupOpen(true)
  }

  const handleCardClick = (obj) => {
    setIsImageOpen(true);
    setSelectedCard(obj);
  }

  return (
    <div className="page">
        <Header />
        <Main 
          onAddPlace={handleAddPlaceClick}
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          title={'Редактировать профиль'}
          name={'profile'}
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          btnText={'Сохранить'}
          >
            <fieldset className="popup__info">
                  <label className="popup__input-label">
                    <input type="text" className="popup__input" placeholder="Ваше имя" id="fullName" name="fullName" minLength={2} maxLength={40} required />
                    <span className="popup__input-error fullName-error" />
                  </label>
                  <label className="popup__input-label">
                    <input type="text" className="popup__input" placeholder="О Вас" id="bio" name="bio" minLength={2} maxLength={200} required />
                    <span className="popup__input-error bio-error" />
                  </label>
            </fieldset>
        </PopupWithForm>

        <PopupWithForm
          title={'Новое место'}
          name={'new-card'}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          btnText={'Создать'}
          >
            <fieldset className="popup__info">
                  <label className="popup__input-label">
                    <input type="text" className="popup__input" placeholder="Название" id="name" name="name" minLength={2} maxLength={30} required />
                    <span className="popup__input-error name-error" />
                  </label>
                  <label className="popup__input-label">
                    <input type="url" className="popup__input" placeholder="Ссылка на картинку" id="link" name="link" required />
                    <span className="popup__input-error link-error" />
                  </label>
            </fieldset>
        </PopupWithForm>

        <ImagePopup onClose={closeAllPopups} card={selectedCard} isImageOpen={isImageOpen} />

        <PopupWithForm
          title={'Вы уверены?'}
          name={'confirm'}
          btnText={'Да'}
          >
        </PopupWithForm>

        <PopupWithForm
          title={'Обновить аватар'}
          name={'avatar'}
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          btnText={'Сохранить'}
          >
            <fieldset className="popup__info">
                <label className="popup__input-label">
                  <input type="url" className="popup__input" placeholder="Ссылка на аватар" id="avatar" name="avatar_link" required />
                  <span className="popup__input-error avatar-error" />
                </label>
            </fieldset>
        </PopupWithForm>
        
      </div>
  );
}

export default App;
