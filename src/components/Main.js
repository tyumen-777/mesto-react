import plusButton from '../images/plusButton.svg'
import api from "../utils/api";
import React from "react";
import Card from "./Card";

function Main(props) {

    React.useEffect(() => {
        api.getUserInfo()
            .then((data) => {
                setUserName(data.name);
                setUserDescription(data.about);
                setUserAvatar(data.avatar);
            });
        api.getInitialCards()
            .then(cardList => {
                setCards(cardList);
            })
    }, [])

    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');

    const [cards, setCards] = React.useState([])

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__avatar-container">
                    <img src={`${userAvatar}`} alt="Фото Аватара" className="profile__avatar"/>
                    <button className="profile__avatar-edit" type="button" onClick={props.onEditAvatar}></button>
                </div>
                <div className="profile__info">
                    <div className="profile__edit">
                        <h1 className="profile__name">{userName}</h1>
                        <button className="profile__button-edit" type="button"
                                onClick={props.onEditProfile}></button>
                    </div>
                    <p className="profile__profession">{userDescription}</p>
                </div>
                <button className="profile__button-add" type="button" onClick={props.onAddPlace}>
                    <img src={plusButton} alt="Значок плюса"/>
                </button>
            </section>
            <section className="elements">
                {cards.map(card => <Card key={card._id} card={card} onCardClick={props.onCardClick}/>)}
            </section>
        </main>
    )
}


export default Main;