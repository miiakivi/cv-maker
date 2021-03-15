import React from 'react';
import TitleSection from './TitleSection'

const defaultJobTitle = 'Job title';
const defaultFullName = 'First and last name';

function PersonNameInfo() {
    return (
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
    );
}


export default PersonNameInfo;