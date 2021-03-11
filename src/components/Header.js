import React from 'react';

function Header() {
    return (
        <header className="header">
            <div className="row">
                <div className="header__title">
                    <p>Software Developer</p>
                    <h1>Tessa The Developer</h1>
                </div>
                <div className="header__contact">
                    <h3 className="header__contact--title">Contact me</h3>
                    <p>123-568-7894</p>
                    <p>testi@testi.fi</p>
                    <p>www.greatsite.com</p>
                    <p>123 Anywhere Street, <br/> Any city, Country, 123456</p>
                </div>
            </div>
        </header>
    );
}

export default Header;