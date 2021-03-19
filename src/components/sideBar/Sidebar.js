import React from 'react';

import PersonalInfo from './PersonalInfo';
import { ListSection } from './ListSection';


const defaultListItems = [
    {name: 'lorem impsum for dorom amet', editMode: false, id: 1234566},
    {name: 'lorem impsum for dorom amet', editMode: false, id: 1244555},
    {name: 'lorem impsum for dorom amet', editMode: false, id: 1222222},
    {name: 'lorem impscxcxum for dorom amet', editMode: false, id: 1224522},
];

function Sidebar(props) {
    return (
        <aside className="sidebar">
            <PersonalInfo/>
            <ListSection
                globalEditingMode={props.globalEditingMode}
                listItems={defaultListItems}
                dataNameForStorage='skillsItemData'
                sectionTitle='Skills'
                btnName='Skill'
            />
            <ListSection
                globalEditingMode={props.globalEditingMode}
                listItems={defaultListItems}
                dataNameForStorage='goalItemData'
                sectionTitle='Goals in Life'
                btnName='Goal'
            />
        </aside>
    );
}

export default Sidebar;