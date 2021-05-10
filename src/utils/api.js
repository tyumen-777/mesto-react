class Api {
    constructor({address, token}) {
        this._address = address
        this._token = token
    }

    getInitialCards() {
        return fetch(`${this._address}/cards`, {
            headers: {
                authorization: this._token
            }
        }).then(response => response.ok
            ? response.json()
            : Promise.reject(`Ошибка ${response.status}`))
    } // Получаем массив карточек с сервера

    getUserInfo() {
        return fetch(`${this._address}/users/me`, {
            headers: {
                authorization: this._token
            }
        }).then(response => response.ok
            ? response.json()
            : Promise.reject(`Ошибка ${response.status}`))
    } // Получаем информацию о пользователе с сервера

    editUserInfo(name, profession) {
        return fetch(`${this._address}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                about: profession
            })
        }).then(response => response.ok
            ? response.json()
            : Promise.reject(`Ошибка ${response.status}`))
    }

    addCard(name, link) {
        return fetch(`${this._address}/cards`, {
            method: 'POST',
            headers: {
                authorization: this._token,
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                link: link
            })
        }).then(response => response.ok
            ? response.json()
            : Promise.reject(`Ошибка ${response.status}`))
    }

    editUserAvatar(url) {
        console.log(url)
        return fetch(`${this._address}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-type': 'application/json'

            },
            body: JSON.stringify({
                avatar: url
            })
        }).then(response => response.ok
            ? response.json()
            : Promise.reject(`Ошибка ${response.status}`))
    }
}

const api = new Api({
    address: 'https://mesto.nomoreparties.co/v1/cohort-22',
    token: 'ed089852-ab21-42a0-b909-11eeabdb931a',
})
export default api