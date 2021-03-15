import React from 'react';
import {
    updateState,
    removeItemFromList,
} from '/src/helpers/updateState'

import useOutsideClick from "../../helpers/useOutsideClick";

import {
    setItemsToStorage,
    getItemsFromStorage,
} from '/src/helpers/localStorage'

function ContactInfo(props) {
    return (
        <div className="header__contact">
            <h3 className="header__contact--title">Contact me</h3>
            <div className="header__contact--item">
                <span className="material-icons contact">call</span>
                <p className="pointer">123-568-7894</p>
            </div>
            <div className="header__contact--item">
                <span className="material-icons contact">alternate_email</span>
                <p className="pointer">testi@testi.fi</p>
            </div>
            <div className="header__contact--item">
                <span className="material-icons contact">language</span>
                <a className="header__contact--link" href="www.greatsite.com">www.greatsite.com</a>
            </div>
            <div className="header__contact--item">
                <span className="material-icons contact">home</span>
                <p className="pointer">123 Anywhere Street, <br/> Any city, Country, 123456</p>
            </div>
        </div>
    );
}

export default ContactInfo;