import React, { useState } from 'react';

import {
    setItemsToStorage,
    getItemsFromStorage,
} from '../../helpers/localStorage'

import EditContactInfo from "./EditContactInfo";

const defaultInfo = {
    phone: '123-123-123',
    email: 'testi@testi.com',
    website: 'www.greatestsite.com',
    address: '123 Anywhere Street, Any city, Country'
}

function ContactInfo(props) {
    const [formOpen, setFormOpen] = useState(false);
    const [contactInfo, setContactInfo] = useState('')

    getItemsFromStorage('contactMeData', setContactInfo, defaultInfo);
    setItemsToStorage('contactMeData', contactInfo);

    if ( formOpen ) {
        return <EditContactInfo setFormOpen={ setFormOpen } setContactInfo={ setContactInfo }
                                contactInfo={ contactInfo }/>
    } else {
        return <RenderContactInfo globalEditingMode={ props.globalEditingMode } setFormOpen={ setFormOpen }
                                  contactInfo={ contactInfo }/>
    }
}

function RenderContactInfo(props) {
    const info = props.contactInfo;

    return (
        <div onClick={ ()=>{
            if ( props.globalEditingMode ) props.setFormOpen(true)
        } }
             className="header__contact head pointer">
            <h3 className="header__contact--title">
                Contact me
                <span className="material-icons settings-icon header__icon list-btn">settings</span>
            </h3>
            <InfoItem infoData={ info.phone } icon="call"/>
            <InfoItem infoData={ info.email } icon="alternate_email"/>
            <InfoItem infoData={ info.website } icon="language"/>
            <InfoItem infoData={ info.address } icon="home"/>
        </div>
    )
}

function InfoItem(props) {
    return (
        <div className="header__contact--item">
            <span className="material-icons contact">{ props.icon }</span>
            <p>{ props.infoData }</p>
        </div>
    )
}

export default ContactInfo;