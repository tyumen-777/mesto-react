import plusButton from '../images/plusButton.svg'
import api from "../utils/api";
import React from "react";
import Card from "./Card";

function Main(props) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);
    const {onEditAvatar,onAddPlace,onEditProfile,onCardClick} = props;

    React.useEffect(() => {
        api.getUserInfo()
            .then((data) => {
                setUserName(data.name);
                setUserDescription(data.about);
                setUserAvatar(data.avatar);
            })
            .catch((err)=> {
                console.log(err)
            });
        api.getInitialCards()
            .then(cardList => {
                setCards(cardList);
            })
            .catch((err)=> {
                console.log(err)
            })
    }, [])



    return (
        <main className="main">
            <section className="profile">
                <div className="profile__avatar-container">
                    <img src={`${userAvatar}`} alt="Фото Аватара" className="profile__avatar"/>
                    <button className="profile__avatar-edit" type="button" onClick={onEditAvatar}></button>
                </div>
                <div className="profile__info">
                    <div className="profile__edit">
                        <h1 className="profile__name">{userName}</h1>
                        <button className="profile__button-edit" type="button"
                                onClick={onEditProfile}></button>
                    </div>
                    <p className="profile__profession">{userDescription}</p>
                </div>
                <button className="profile__button-add" type="button" onClick={onAddPlace}>
                    <img src={plusButton} alt="Значок плюса"/>
                </button>
            </section>
            <section className="elements">
                {cards.map(card => (<Card key={card._id} card={card} onCardClick={onCardClick}/>))}
            </section>
        </main>
    )
}


export default Main;