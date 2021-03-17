import React, { useState } from 'react';
import { updateState } from "../../helpers/updateState";
import FormContent from "./FormContent";


function AddNewHistoryItem(props) {
    const [title, setTitle] = useState(props.inputValueObj.title);
    const [company, setCompany] = useState(props.inputValueObj.company);
    const [startDate, setStartDate] = useState(props.inputValueObj.startDate);
    const [endDate, setEndDate] = useState(props.inputValueObj.endDate);
    const [description, setDescription] = useState(props.inputValueObj.description);



    function handleSubmit(e) {
        e.preventDefault();
        props.setHistory((prev)=>{
            return [...prev, {title, company, startDate, endDate, description, editMode: false, id: Date.now()}]
        })
        props.setForm(false);
    }


    return (
        <form onSubmit={ handleSubmit }
              className="history__add-form">
            <h4>Add new</h4>
            <FormContent stateObj={ stateObj } headers={ props.headers }/>
            <button className="submit-btn">Submit</button>
        </form>

    );
}




export default AddNewHistoryItem;



















