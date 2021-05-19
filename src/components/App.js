import React from 'react'
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm"
import ImagePopup from "./ImagePopup"
import api from "../utils/api";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

import Footer from "./Footer";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState('');
    const [currentUser, setCurrentUser] = React.useState('')
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getInitialCards()
            .then(cardList => {
                setCards(cardList);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        api.changeLikeCardStatus(card._id, isLiked)
            .then((newCard) => {
                const newCards = cards.map((currentCard) => currentCard._id === card._id ? newCard : currentCard)
                setCards(newCards)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function handleCardDelete(card) {
        api.removeCard(card._id)
            .then(() => {
                const newCards = cards.filter((elem) => elem !== card);
                setCards(newCards);
            })
    }

    React.useEffect(() => {
        api.getUserInfo()
            .then((data) => {
                setCurrentUser(data)
            })
            .catch((err) => {
                console.log(err)
            });
    }, [])

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true)
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true)
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true)
    }

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false)
        setIsEditProfilePopupOpen(false)
        setIsAddPlacePopupOpen(false)
        setSelectedCard('')
    }

    function handleCardClick(card) {
        setSelectedCard(card)
    }

    function handleUpdateUser({name, about}) {
        api.editUserInfo(name, about)
            .then((data) => {
                setCurrentUser(data);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function handleUpdateAvatar({avatar}) {
        api.editUserAvatar(avatar)
            .then((data) => {
                setCurrentUser(data);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function handleAddPlaceSubmit({name, link}) {
        api.addCard(name, link)
            .then((data) => {
                setCards([data, ...cards]);
                closeAllPopups()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                <div className="page__container">
                    <Header/>
                    <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}
                          onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}
                          onCardLike={handleCardLike} cards={cards}
                          onCardDelete={handleCardDelete}/>
                    <Footer/>
                    <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}
                                      onUpdateUser={handleUpdateUser}/>
                    <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}
                                     onUpdateAvatar={handleUpdateAvatar}/>
                    <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}
                                   onAddPlace={handleAddPlaceSubmit}/>

                    <PopupWithForm
                        title="Вы уверены?"
                        name="remove-card"
                        buttonText="Да"
                        onClose={closeAllPopups}>
                    </PopupWithForm>
                    <ImagePopup
                        card={selectedCard}
                        onClose={closeAllPopups}/>
                </div>
            </div>
        </CurrentUserContext.Provider>
    );
}


export default App;
