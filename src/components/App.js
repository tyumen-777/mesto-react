import React from 'react'
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm"
import ImagePopup from "./ImagePopup"
import '../index.css';
import Footer from "./Footer";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(false);

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
        setSelectedCard(false)
    }

    function handleCardClick(card) {
        setSelectedCard(card)
    }


    return (
        <body className="page">
        <div className="page__container">
            <Header/>
            <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}
                  onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
            <Footer/>
            <PopupWithForm
                title="Редактировать профиль"
                name="profile"
                buttonText="Сохранить"
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}>
                <input id="form-name-input" type="text" className="popup__field popup__field_name" name="name"
                    // value="Имя"
                       placeholder="Имя" required minLength="2" maxLength="40"/>
                <span className="form-name-input-error"></span>
                <input id="form-profession-input" type="text" className="popup__field popup__field_profession"
                       name="about"
                    // value="Профессия"
                       placeholder="Профессия" required minLength="2" maxLength="200"/>
                <span className="form-profession-input-error"></span>
            </PopupWithForm>
            <PopupWithForm
                title="Новое место"
                name="photo"
                buttonText="Сохранить"
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}>
                <input type="text" className="popup__field " id="form-title-input" name="name" placeholder="Название"
                       required
                       minLength="2" maxLength="30"/>
                <span className="form-title-input-error"></span>
                <input type="url" className="popup__field popup__field_link" id="form-link-input" name="link"
                       placeholder="Ссылка на картинку" required/>
                <span className="form-link-input-error"></span>
            </PopupWithForm>
            <PopupWithForm
                title="Обновить аватар"
                name="avatar"
                buttonText="Сохранить"
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}>
                <input type="url" className="popup__field popup__avatar-link" id="form-avatar-input" name="link"
                       placeholder="Ссылка на аватар" required/>
                <span className="form-avatar-input-error"></span>
            </PopupWithForm>
            <ImagePopup
                card={selectedCard}
                onClose={closeAllPopups}/>
        </div>
        </body>
    );
}


export default App;
