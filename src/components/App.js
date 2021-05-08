import React from 'react'
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm"
import ImagePopup from "./ImagePopup"
import '../index.css';
import Footer from "./Footer";

function App() {
    return (
        <body className="page">
        <div className="page__container">
            <Header/>
            <Main/>
            <Footer/>
            <PopupWithForm
                title="Редактировать профиль"
                name="profile"
                buttonText="Сохранить">
                <input id="form-name-input" type="text" className="popup__field popup__field_name" name="name"
                       value="Имя"
                       placeholder="Имя" required minLength="2" maxLength="40"/>
                <span className="form-name-input-error"></span>
                <input id="form-profession-input" type="text" className="popup__field popup__field_profession"
                       name="about"
                       value="Профессия"
                       placeholder="Профессия" required minLength="2" maxLength="200"/>
                <span className="form-profession-input-error"></span>
            </PopupWithForm>
            <PopupWithForm
                title="Новое место"
                name="photo"
                buttonText="Сохранить">
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
                name="avatar"/>
            <ImagePopup/>
        </div>
        <template className="elements-template">
            <div className="elements__item card">
                <img src="#" alt="#" className="elements__photo"/>
                <button className="elements__button-delete" type="button"></button>
                <h3 className="elements__paragraph"></h3>
                <div className="elements__button-like-container">
                    <button className="elements__button-like" type="button"></button>
                    <p className="elements__button-like-counter">0</p>
                </div>
            </div>
        </template>

        </body>
    );
}

export default App;
