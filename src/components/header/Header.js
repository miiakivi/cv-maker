import React from 'react';
import ContactInfo from "./ContactInfo";
import TitleSection from "./TitleSection";

const defaultJobTitle = 'Job title';
const defaultFullName = 'First and last name';

function Header() {
    return (
        <header className="header border">
            <div className="row">
                <div className="header__title">
                    <TitleSection
                        dataNameForStorage='jobTitleData'
                        defaultTitleValue={ defaultJobTitle }
                        titleSize="paragraph"/>
                    <TitleSection
                        dataNameForStorage='fullNameData'
                        defaultTitleValue={ defaultFullName }
                        titleSize="h1"/>
                </div>
                <ContactInfo/>
            </div>
        </header>
    );
}

export default Header;