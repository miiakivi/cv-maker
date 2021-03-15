import React, { useState, useRef } from 'react';
import { getItemsFromStorage, setItemsToStorage } from "../../helpers/localStorage";
import useOutsideClick from "../../helpers/useOutsideClick";
import handleFocus from "../../helpers/handleFocus";


function TitleSection(props) {
    const [title, setTitle] = useState('');

    getItemsFromStorage(props.dataNameForStorage, setTitle, props.defaultTitleValue);
    setItemsToStorage(props.dataNameForStorage, title);

    return (
        <>
            { renderTitleOrForm(title, setTitle, props.titleSize) }
        </>
    )
}

function renderTitleOrForm(title, setTitle, titleSize) {
    const [formOpen, setFormOpen] = useState(false);

    if ( formOpen ) {
        return (
            <AddNewTitleForm
                formOpen={ formOpen }
                setFormOpen={ setFormOpen }
                title={ title }
                setTitle={ setTitle }/>
        )
    } else {
        return (
            <RenderRightTitleSize
                titleSize={ titleSize }
                setFormOpen={ setFormOpen }
                title={ title }
            />
        )
    }
}

function RenderRightTitleSize(props) {
    if ( props.titleSize === 'paragraph' ) {
        return (
            <p onClick={ ()=>props.setFormOpen(true) }
               className="pointer">
                { props.title }
                <span className="material-icons settings-icon header__icon list-btn">settings</span>
            </p>
        )
    } else if ( props.titleSize === 'h1' ) {
        return (
            <h1 onClick={ ()=> props.setFormOpen(true)}
                className="pointer">
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
                onFocus={ handleFocus}
                onChange={ (e)=>{
                    setNewTitle(e.target.value);
                }}
                className="header__name-input"
                placeholder="Add new"/>
            <button className="submit-btn">Submit</button>
        </form>
    )
}

export default TitleSection;