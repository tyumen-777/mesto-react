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
            <PopupWithForm/>
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
