import React from 'react';

import WorkHistory from './workHistory/WorkHistory';
import Education from './education/Education'

function PrimaryInfo() {
    return (
        <section className="main">
            <WorkHistory/>
            <Education/>
        </section>
    );
}

export default PrimaryInfo;