import plusButton from '../images/plusButton.svg'
import api from "../utils/api";
import React from "react";
import Card from "./Card";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Main(props) {
    // const [userName, setUserName] = React.useState('');
    // const [userDescription, setUserDescription] = React.useState('');
    // const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);
    const {onEditAvatar, onAddPlace, onEditProfile, onCardClick} = props;

    const currentUser = React.useContext(CurrentUserContext);

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

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__avatar-container">
                    <img src={`${currentUser.avatar}`} alt="Фото Аватара" className="profile__avatar"/>
                    <button className="profile__avatar-edit" type="button" onClick={onEditAvatar}></button>
                </div>
                <div className="profile__info">
                    <div className="profile__edit">
                        <h1 className="profile__name">{currentUser.name}</h1>
                        <button className="profile__button-edit" type="button"
                                onClick={onEditProfile}></button>
                    </div>
                    <p className="profile__profession">{currentUser.about}</p>
                </div>
                <button className="profile__button-add" type="button" onClick={onAddPlace}>
                    <img src={plusButton} alt="Значок плюса"/>
                </button>
            </section>
            <section className="elements">
                {cards.map(card => (<Card key={card._id} card={card} onCardClick={onCardClick}
                                          onCardLike={handleCardLike} onCardDelete={handleCardDelete}/>))}
            </section>
        </main>
    )
}


export default Main;