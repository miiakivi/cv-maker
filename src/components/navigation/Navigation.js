import React, { useState } from 'react';
import { changeTheme, changeViewMode, generatePDF } from "./sectionHelpers";


function Navigation(props) {
    const [navClassNames, setNavClassNames] = useState('navbar navbar-open');
    const [containerClass, setContainerClass] = useState('nav__container');

    const [mode, setMode] = useState('Editing mode');
    const [formEditingMode, setFormEditingMode] = useState(true);
    const [cvCanBeSaved, setCvCanBeSaved] = useState(false);
    const [btnIsHovered, setBtnHover] = useState(false);

    let btnStyle = {
        backgroundColor: '#4e4e4e',
    }

    if ( cvCanBeSaved ) {
        btnStyle = {
            backgroundColor: '#f8f8f8',
        }
    }
    if ( btnIsHovered && cvCanBeSaved ) {
        btnStyle = {
            backgroundColor: '#ced4da',
        }
    }

    return (
        <aside className={ navClassNames }>
            <NavIcon stateUpdater={ setNavClassNames } changeDisplay={ setContainerClass }/>
            <nav>
                <div className={ containerClass }>
                    <p>1. Choose theme</p>
                    <div className="nav__theme-cont">
                        <ThemeBtn color="yellow"/>
                        <ThemeBtn color="blue"/>
                        <ThemeBtn color="green"/>
                    </div>
                    <div className="nav__container">
                        <p>2. Fill the CV</p>
                    </div>
                    <div className="nav__btn-cont">
                        <p> 3. Change mode</p>
                        <button
                            onClick={ ()=>{
                                setCvCanBeSaved((prev)=>{
                                    return !prev;
                                })
                                changeViewMode(formEditingMode, setFormEditingMode, setMode, props.setGlobalEditingMode)
                            } }
                            className="nav__btn">{ mode }</button>
                        <p> 4. Save</p>
                        <button onClick={ ()=>cvCanBeSaved ? generatePDF() : console.log('cv cannot be saved yet') }
                                onMouseEnter={ ()=>setBtnHover(true) }
                                onMouseLeave={ ()=>setBtnHover(false) }
                                style={ btnStyle }
                                className="nav__btn nav__pdf-btn">Save to PDF
                        </button>
                    </div>
                </div>
            </nav>
        </aside>
    );
}

function ThemeBtn(props) {
    const clr = props.color;
    const classNames = "nav__theme " + clr;
    return (
        <>
            <span>{ clr.charAt(0).toUpperCase() + clr.slice(1) }</span>
            <div onClick={ ()=>changeTheme(clr) } className={ classNames }>
                <div className="first"/>
                <div className="second"/>
            </div>
        </>
    )
}


function NavIcon(props) {
    const [iconClass, setIconClass] = useState('open');

    return (
        <div id="nav-icon" className={ iconClass }
             onClick={ ()=>{
                 setIconClass((prev)=>prev === 'open' ? ' ' : 'open')
                 props.stateUpdater((prev)=>prev === 'navbar navbar-open' ? 'navbar navbar-closed' : 'navbar navbar-open');
                 props.changeDisplay((prev)=>prev === 'nav__container' ? 'nav__container-closed' : 'nav__container');
             } }>
            <span/>
            <span/>
            <span/>
        </div>
    )
}

export default Navigation;