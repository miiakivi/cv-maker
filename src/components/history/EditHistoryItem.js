import React, { useState } from 'react';
import FormContent from "./FormContent";
import { updateState } from "../../helpers/updateState";


function EditHistoryItem(props) {
    const valueObj = props.valueObj;

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

    function handleEdit(e) {
        e.preventDefault
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

    return (
        <form onSubmit={handleEdit} className="history__add-form">
            <h4>Edit</h4>
            <FormContent stateObj={ stateObj } headers={ props.headers }/>
            <button className="submit-btn">Submit</button>
        </form>
    )
}



export default EditHistoryItem;