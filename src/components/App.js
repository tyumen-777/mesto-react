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

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState('');
    const [currentUser, setCurrentUser] = React.useState('')

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

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                <div className="page__container">
                    <Header/>
                    <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}
                          onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
                    <Footer/>
                    <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}
                                      onUpdateUser={handleUpdateUser}/>
                    <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}
                                     onUpdateAvatar={handleUpdateAvatar}/>
                    <PopupWithForm
                        title="Новое место"
                        name="photo"
                        buttonText="Сохранить"
                        isOpen={isAddPlacePopupOpen}
                        onClose={closeAllPopups}>
                        <input type="text" className="popup__field " id="form-title-input" name="name"
                               placeholder="Название"
                               required
                               minLength="2" maxLength="30"/>
                        <span className="form-title-input-error"> </span>
                        <input type="url" className="popup__field popup__field_link" id="form-link-input" name="link"
                               placeholder="Ссылка на картинку" required/>
                        <span className="form-link-input-error"> </span>
                    </PopupWithForm>

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
