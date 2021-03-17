import React from 'react';

import HistorySection from './HistorySection';


const defaultWorkHistory = [
    {
        title: 'Software engineer',
        company: 'Supercell',
        startDate: '2015-01-01',
        endDate: '2020-01-01',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at atque beatae.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at atque beatae.`,
        id: Date.now(),
        editMode: false
    },
]

const defaultSchoolHistory = [
    {
        title: 'Bachelor of Software Engineering',
        company: 'University of El Dorado',
        startDate: '2015-01-01',
        endDate: '2020-01-01',
        description: `President, Computer and Technology Organization
                    Vice President, Programming Club
                    Member, Video Game Society
                    Member, Student IT Helpdesk`,
        id: Date.now(),
        editMode: false,
    },
];

function History() {
    return (
        <section className="main">
            <HistorySection dataNameForStorage="workHistory" itemList={ defaultWorkHistory } mainHeader="Work History"/>
            <HistorySection dataNameForStorage="educationHistory" itemList={ defaultSchoolHistory }
                            mainHeader="Education"/>
        </section>
    );
}

export default History;