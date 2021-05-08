import profileAvatar from '../images/profile__avatar.png'
import plusButton from '../images/plusButton.svg'

function Main(props) {
    return (
        <main className="main">
            <section className="profile">
                <div className="profile__avatar-container">
                    <img src={profileAvatar} alt="Фото Ив-Кусто" className="profile__avatar"/>
                    <button className="profile__avatar-edit" type="button" onClick={handleEditAvatarClick}></button>
                </div>
                <div className="profile__info">
                    <div className="profile__edit">
                        <h1 className="profile__name">Жак-Ив Кусто</h1>
                        <button className="profile__button-edit" type="button"
                                onClick={handleEditProfileClick}></button>
                    </div>

                    <p className="profile__profession">Исследователь океана</p>
                </div>
                <button className="profile__button-add" type="button" onClick={handleAddPlaceClick}>
                    <img src={plusButton} alt="Значок плюса"/>
                </button>
            </section>
            <section className="elements">

            </section>
        </main>
    )
}

function handleEditAvatarClick(evt) {
    evt.preventDefault();
    const popupEditAvatar = document.querySelector('.popup_type_avatar');
    popupEditAvatar.classList.add('popup__opened');
}

function handleEditProfileClick(evt) {
    evt.preventDefault();
    const popupEditInfo = document.querySelector('.popup_type_profile')
    popupEditInfo.classList.add('popup__opened')
}

function handleAddPlaceClick(evt) {
    evt.preventDefault();
    const popupAddPhoto = document.querySelector('.popup_type_photo')
    popupAddPhoto.classList.add('popup__opened')

}

export default Main;