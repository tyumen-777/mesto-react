import React from "react";

function ImagePopup() {
    return(
        <div className="popup opened-image">
            <div className="popup__photocontainer">
                <button className="popup__button-close" type="button"></button>
                <img src="#" alt="#" className="popup__image"/>
                <h2 className="popup__phototitle"></h2>
            </div>
        </div>
    )
}
export default ImagePopup