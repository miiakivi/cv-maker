import React from 'react';
import ContactInfo from "./ContactInfo";
import TitleSection from "./TitleSection";

const defaultJobTitle = 'Job title';
const defaultFullName = 'First and last name';

function Header(props) {
    return (
        <header className="header border">
            <div className="row">
                <div className="header__title">
                    <TitleSection
                        globalEditingMode={props.globalEditingMode}
                        dataNameForStorage='jobTitleData'
                        defaultTitleValue={ defaultJobTitle }
                        titleSize="paragraph"/>
                    <TitleSection
                        globalEditingMode={props.globalEditingMode}
                        dataNameForStorage='fullNameData'
                        defaultTitleValue={ defaultFullName }
                        titleSize="h1"/>
                </div>
                <ContactInfo globalEditingMode={props.globalEditingMode}/>
            </div>
        </header>
    );
}

export default Header;