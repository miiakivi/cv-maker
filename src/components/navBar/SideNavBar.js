import React, { useState } from 'react';

function SideNavBar(props) {
    const [navClassNames, setNavClassNames] = useState('navbar-open');
    return (
        <aside className={ navClassNames }>
            <Icon stateUpdater={ setNavClassNames }/>
            <nav>
                <p>hello testi</p>
                <p>hello testi</p>
                <p>hello testi</p>
                <p>hello testi</p>
                <p>hello testi</p>
            </nav>
        </aside>
    );
}

function Icon(props) {
    const [iconClass, setIconClass] = useState('open');

    return (
        <div id="nav-icon" className={ iconClass }
             onClick={ ()=>{
                 setIconClass((prev)=>prev === 'open' ? ' ' : 'open')
                 props.stateUpdater((prev)=>prev === 'navbar-open' ? 'navbar-closed' : 'navbar-open')
             }}>
            <span/>
            <span/>
            <span/>
        </div>
    )
}

export default SideNavBar;