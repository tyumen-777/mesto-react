import React from "react";

function PopupWithForm() {
    return (
        <div className={PopupWithForm}>
            <div className="popup profile-popup">
                <div className="popup__container">
                    <button className="popup__button-close" type="button"></button>
                    <h2 className="popup__heading">Редактировать профиль</h2>
                    <form className="popup__input" name="popup" noValidate>
                        <input id="form-name-input" type="text" className="popup__field popup__field_name" name="name"
                               value="Имя"
                               placeholder="Имя" required minLength="2" maxLength="40"/>
                        <span className="form-name-input-error"></span>
                        <input id="form-profession-input" type="text" className="popup__field popup__field_profession"
                               name="profession"
                               value="Профессия"
                               placeholder="Профессия" required minLength="2" maxLength="200"/>
                        <span className="form-profession-input-error"></span>
                        <button className="popup__button-save" type="submit">
                            Сохранить
                        </button>
                    </form>
                </div>
            </div>
            <div className="popup photo-popup">
                <div className="popup__container">
                    <button className="popup__button-close" type="button"></button>
                    <h2 className="popup__heading">Новое место</h2>
                    <form className="popup__input" name="popup">
                        <input type="text" className="popup__field " id="form-title-input" name="name"
                               placeholder="Название"
                               required
                               minLength="2" maxLength="30"/>
                        <span className="form-title-input-error"></span>
                        <input type="url" className="popup__field popup__field_link" id="form-link-input" name="link"
                               placeholder="Ссылка на картинку" required/>
                        <span className="form-link-input-error"></span>
                        <button className="popup__button-save" type="submit">
                            Создать
                        </button>
                    </form>
                </div>
            </div>
            <div className="popup photo-delete">
                <div className="popup__container">
                    <button className="popup__button-close" type="button"></button>
                    <h2 className="popup__heading">Вы уверены?
                        <button className="popup__button-save" type="submit">
                            Да
                        </button>
                    </h2>
                </div>
            </div>
            <div className="popup update-avatar">
                <div className="popup__container">
                    <button className="popup__button-close" type="button"></button>
                    <h2 className="popup__heading">Обновить аватар</h2>
                    <form className="popup__input" name="popup">
                        <input type="url" className="popup__field popup__avatar_link" id="form-avatar-input" name="link"
                               placeholder="Ссылка на аватар" required/>
                        <span className="form-avatar-input-error"></span>
                        <button className="popup__button-save" type="submit">
                            Сохранить
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
        ;
}
function closeAllPopups(evt) {
    evt.preventDefault()

}

export default PopupWithForm