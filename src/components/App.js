import '../index.css';
import {useState, useEffect} from 'react';
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import CurrentUserContext from '../context/CurrentUserContext.js';
import {api} from '../utils/Api.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

const fetchCards = async () => {
    try {
        const res = await api.getInitialCards();
        setCards(res);
    } catch (e) {
        console.warn(e)
    }
} 

const handleCardLike = async (card) => {
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  try {
      const resChangeLikeStatus = await api.changeLikeCardStatus(card, !isLiked);
      setCards((state) => state.map((c) => c._id === card._id ? resChangeLikeStatus : c));
  } catch (error) {
      console.warn(error);
  }
}

const handleCardDelete = async (card) => {
  try {
      await api.deleteCard(card._id);
      setCards((newArray) => newArray.filter((item) => card._id !== item._id))
      closeAllPopups();
  } catch (error) {
      console.warn(error);
  }
}

useEffect(() => {
    fetchCards();
}, []);

const handleUserUpdate = async (obj) => {
    try {
        const changedProfile = await api.setUserInfo(obj);
        setCurrentUser(changedProfile);
        closeAllPopups();
    } catch (e) {
        console.warn(e)
    }
}

const handleAvatarUpdate = async (obj) => {
  try {
      const avatarChanged = await api.changeAvatar(obj);
      setCurrentUser(avatarChanged);
      closeAllPopups();
  } catch (e) {
      console.warn(e)
  }
}

const handleAddPlace = async (obj) => {
  try {
      const newPlace = await api.addNewCard(obj);
      setCards([newPlace, ...cards]);
      closeAllPopups();
  } catch (e) {
      console.warn(e)
  }
}

const fetchData = async () => {
  try {
      const profileObject = await api.getUserInfo();
      setCurrentUser(profileObject);
  } catch (error) {
      console.warn(error);
  }
}

useEffect(() => {
  fetchData()
}, []);

const handleCardClick = (obj) => {
  setIsImageOpen(true);
  setSelectedCard(obj);
}

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

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
        <Header />
        <Main 
          onAddPlace={handleAddPlaceClick}
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          closePopup={closeAllPopups}
        />
        <Footer />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUserUpdate} />
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlace}/>
        <ImagePopup onClose={closeAllPopups} card={selectedCard} isImageOpen={isImageOpen} />
        <PopupWithForm
          title={'Вы уверены?'}
          name={'confirm'}
          btnText={'Да'}
          >
        </PopupWithForm>

        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleAvatarUpdate} />
      </div>
      </CurrentUserContext.Provider>
  );
}

export default App;
