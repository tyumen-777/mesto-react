import React from "react";

function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <div className="elements-template">
            <div className="elements__item card">
                <img src={props.card.link} alt={props.card.name} className="elements__photo" onClick={handleClick}/>
                <button className="elements__button-delete" type="button"></button>
                <h3 className="elements__paragraph">{props.card.name}</h3>
                <div className="elements__button-like-container">
                    <button className="elements__button-like" type="button"></button>
                    <p className="elements__button-like-counter">{props.card.likes.length}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;