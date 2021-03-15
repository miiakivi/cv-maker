import React from 'react';
import ContactInfo from "./ContactInfo";
import PersonNameInfo from "./PersonNameInfo";

function Header() {
    return (
        <header className="header border">
            <div className="row">
                <PersonNameInfo/>
                <ContactInfo/>
            </div>
        </header>
    );
}

export default Header;