import React from 'react';

function Header() {
    return (
        <header className="header border">
            <div className="row">
                <div className="header__title">
                    <p className="pointer">Job title</p>
                    <h1 className="pointer">First and last name</h1>
                </div>
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
            </div>
        </header>
    );
}

export default Header;