import React, { useState } from 'react';
import { changeTheme, changeViewMode } from "./sectionHelpers";

function SideNavBar(props) {
    const [navClassNames, setNavClassNames] = useState('navbar-open');
    const [containerClass, setContainerClass] = useState('nav__container');

    const [mode, setMode] = useState('Preview mode');
    const [formEditingMode, setFormEditingMode] = useState(true);

    return (
        <aside className={ navClassNames }>
            <NavIcon stateUpdater={ setNavClassNames } changeDisplay={ setContainerClass }/>
            <nav>
                <div className={ containerClass }>
                    <button onClick={ ()=>changeViewMode(formEditingMode, setFormEditingMode, setMode, props.setGlobalEditingMode) }
                            className="nav__btn">{ mode }</button>
                    <p>Choose theme</p>
                    <div className="nav__theme-cont">
                        <span>Yellow</span>
                        <div onClick={ ()=>changeTheme("yellow") } className="nav__theme row yellow">
                            <div className="first"/>
                            <div className="second"/>
                        </div>
                        <span className="nav__theme-txt">Green</span>
                        <div onClick={ ()=>changeTheme("green") } className="nav__theme row green">
                            <div className="first"/>
                            <div className="second"/>
                        </div>
                        <span className="nav__theme-txt">Blue</span>
                        <div onClick={ ()=>changeTheme("blue") } className="nav__theme row blue">
                            <div className="first"/>
                            <div className="second"/>
                        </div>
                    </div>
                </div>
            </nav>
        </aside>
    );
}





function NavIcon(props) {
    const [iconClass, setIconClass] = useState('open');

    return (
        <div id="nav-icon" className={ iconClass }
             onClick={ ()=>{
                 setIconClass((prev)=>prev === 'open' ? ' ' : 'open')
                 props.stateUpdater((prev)=>prev === 'navbar-open' ? 'navbar-closed' : 'navbar-open');
                 props.changeDisplay((prev)=>prev === 'nav__container' ? 'nav__container-closed' : 'nav__container');

             } }>
            <span/>
            <span/>
            <span/>
        </div>
    )
}

export default SideNavBar;