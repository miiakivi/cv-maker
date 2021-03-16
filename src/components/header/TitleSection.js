import React, { useState, useRef } from 'react';
import { getItemsFromStorage, setItemsToStorage } from "../../helpers/localStorage";
import useOutsideClick from "../../helpers/useOutsideClick";
import handleFocus from "../../helpers/handleFocus";



function TitleSection(props) {
    const [title, setTitle] = useState('');
    const [formOpen, setFormOpen] = useState(false);
    const [inputClassName, setClassName] = useState('')

    getItemsFromStorage(props.dataNameForStorage, setTitle, props.defaultTitleValue);
    setItemsToStorage(props.dataNameForStorage, title);

    if ( formOpen ) {
        return (
            <AddNewTitleForm
                formOpen={ formOpen }
                setFormOpen={ setFormOpen }
                title={ title }
                setTitle={ setTitle }
                inputClassName={ inputClassName }/>
        )
    } else {
        return (
            <RenderRightTitleSize
                titleSize={ props.titleSize }
                setFormOpen={ setFormOpen }
                title={ title }
                setClassName={setClassName}
            />
        )
    }
}


function RenderRightTitleSize(props) {
    if ( props.titleSize === 'paragraph' ) {
        props.setClassName('header__job-form');
        return (
            <p onClick={ ()=>props.setFormOpen(true) }
               className="head pointer">
                { props.title }
                <span className="material-icons settings-icon header__icon list-btn">settings</span>
            </p>
        )
    } else if ( props.titleSize === 'h1' ) {
        props.setClassName('header__full-name-form');
        return (
            <h1 onClick={ ()=>props.setFormOpen(true) }
                className="head pointer">
                { props.title }
                <span className="material-icons settings-icon header__icon list-btn">settings</span>
            </h1>
        )
    }
}

function AddNewTitleForm(props) {
    const [newTitle, setNewTitle] = useState(props.title);
    const ref = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        if ( newTitle !== '' ) {
            props.setTitle(newTitle)
        }
        setNewTitle('');
        props.setFormOpen(false);
    }

    useOutsideClick(ref, ()=>{
        props.setFormOpen(false);
        props.setTitle(newTitle);
    });


    return (
        <form ref={ ref } onSubmit={ handleSubmit }>
            <input
                value={ newTitle }
                onFocus={ handleFocus }
                onChange={ (e)=>{
                    setNewTitle(e.target.value);
                } }
                className={props.inputClassName}
                placeholder="Add new"/>
            <button className="submit-btn">Submit</button>
        </form>
    )
}

export default TitleSection;