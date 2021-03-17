import React, { useRef, useState } from 'react';
import FormContent from "./FormContent";
import { updateState } from "../../helpers/updateState";
import useOutsideClick from "../../helpers/useOutsideClick";


function HistoryItemForm(props) {
    const valueObj = props.valueObj;
    const ref = useRef();

    const [title, setTitle] = useState(valueObj.title);
    const [company, setCompany] = useState(valueObj.company);
    const [startDate, setStartDate] = useState(valueObj.startDate);
    const [endDate, setEndDate] = useState(valueObj.endDate);
    const [description, setDescription] = useState(valueObj.description);

    const stateObj = {
        title,
        setTitle,
        company,
        setCompany,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        description,
        setDescription
    };

    function handleSubmit(e) {
        e.preventDefault();
        if ( props.submitType === 'Edit' ) {
            editOldItem();
        } else if ( props.submitType === 'Add new' ) {
            addNewItem();
        }
    }

    function editOldItem() {
        updateState(props.stateUpdater, valueObj.id, {
            title,
            company,
            startDate,
            endDate,
            description,
            id: valueObj.id,
            editMode: false
        });
    }

    function addNewItem() {
        props.stateUpdater((prev)=>{
            return [...prev, {title, company, startDate, endDate, description, editMode: false, id: Date.now()}]
        })
        props.setForm(false);
    }

    useOutsideClick(ref, ()=>{
        if ( props.submitType === 'Edit' ) {
            editOldItem();
        } else if ( props.submitType === 'Add new' ) {
            props.setForm(false);
        }
    });

    return (
        <form onSubmit={ handleSubmit } ref={ ref }
              className="history__add-form">
            <h4>{ props.submitType }</h4>
            <FormContent stateObj={ stateObj } headers={ props.headers }/>
            <button className="submit-btn">Submit</button>
        </form>
    )
}


export default HistoryItemForm;