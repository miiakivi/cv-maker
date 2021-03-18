import React, { useRef, useState } from 'react';
import FormContent from "./FormContent";
import { updateState } from "../../helpers/updateState";
import useOutsideClick from "../../helpers/useOutsideClick";
import FormButtons from "../formComponents/FormButtons";


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
        if ( title !== '' && company !== '' && description !== '' ) {
            props.stateUpdater((prev)=>{
                return [...prev, {title, company, startDate, endDate, description, editMode: false, id: Date.now()}]
            })
            props.setForm(false);
        }
    }

    useOutsideClick(ref, ()=>{
        if ( props.submitType === 'Edit' ) {
            editOldItem();
        } else if ( props.submitType === 'Add new' ) {
            props.setForm(false);
        }
    });

    return (
        <>
            <form ref={ ref } className="form">
                <h4>{ props.submitType }</h4>
                <FormContent stateObj={ stateObj } headers={ props.headers }/>
                <FormButtons stateUpdater={ props.stateUpdater } submitType={ props.submitType }
                             edit={ editOldItem }
                             add={ addNewItem } id={ valueObj.id }/>
            </form>
        </>
    )
}


export default HistoryItemForm;