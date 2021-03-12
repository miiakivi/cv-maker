import React from 'react';

import PersonalInfo from './personal/PersonalInfo';
import GoalsSection from './personal/GoalsSection';
import Skills from './personal/Skills';


function SecondaryInfo() {
    return (
        <aside className="sidebar">
            <PersonalInfo/>
            <GoalsSection/>
            <Skills/>
        </aside>
    );
}

export default SecondaryInfo;