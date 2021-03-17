import React, { useState } from 'react';
import AddNewHistoryItem from "./AddNewHistoryItem";
import EditHistoryItem from "./EditHistoryItem";
import { updateState } from "../../helpers/updateState";


function HistorySection(props) {
    const [addNewFormOpen, setAddNewFormOpen] = useState(false);
    const [workHistory, setWorkHistory] = useState([props.historyItemList]);

    return (
        <div className="history border">
            <h2 className="history__title title">{ props.mainHeader }</h2>
            { workHistory.map((item)=>{
                return <RenderHistoryItems setHistory={ setWorkHistory } item={ item } formType={ props.mainHeader }/>
            }) }
            { renderItemForm(addNewFormOpen, setAddNewFormOpen, setWorkHistory, props.mainHeader) }
        </div>

    );
}


function RenderHistoryItems(props) {
    const valueObj = getInputObj(props.item);
    const formHeaders = getHeaderObj(props.formType);

    // if items editing mode is on, return editing form, else return item itself
    if ( props.item.editMode ) {

        return <EditHistoryItem stateUpdater={ props.setHistory } headers={formHeaders} valueObj={valueObj} key={ valueObj.id }/>
    } else {
        return <HistoryItem stateUpdater={ props.setHistory } valueObj={ valueObj } key={ valueObj.id }/>
    }
}

function renderItemForm(form, setForm, setWork, formType) {
    const formHeaders = getHeaderObj(formType);
    const valueObj = {title: '', company: '', startDate: '', endDate: '', description: ''}
    if ( form ) {
        return <AddNewHistoryItem stateUpdater={ setWork } setForm={ setForm } valueObj={ valueObj } headers={formHeaders} key={ Date.now() }/>
    } else {
        return <button onClick={ ()=>setForm(true) } className="btn" key={ Date.now() }> + { formHeaders.btnName }</button>
    }
}

function HistoryItem(props) {
    let valueObj = props.valueObj;

    return (
        // When user clicks it, change items state so edit form opens up
        <div onClick={ ()=>openHistoryItemEditingForm(valueObj, props.stateUpdater) }
             className="pointer">
            <h3 className="history__item-title row"> { valueObj.title }
                <span className="material-icons settings-icon list-btn">settings</span>
            </h3>
            <h4 className="history__item-title">{ valueObj.company }</h4>
            <p>{ getFormattedDate(valueObj.startDate) } - { getFormattedDate(valueObj.endDate) }</p>
            <p>{ valueObj.description }</p>
        </div>
    )
}


function openHistoryItemEditingForm(obj, stateUpdater) {
    let newState = obj;
    newState.editMode = true;
    for (let key in newState) {
        console.log("User " + key + " is #" + newState[key]); // "User john is #234"
    }
    updateState(stateUpdater, newState.id, newState)
}

function getInputObj(obj) {
    return {
        title: obj.title,
        company: obj.company,
        startDate: obj.startDate,
        endDate: obj.endDate,
        description: obj.description,
        editMode: obj.editMode,
        id: obj.id
    }
}


// These are add new history item forms labels. They change depending on type
function getHeaderObj(formType) {
    if ( formType === 'Work History' ) {
        return {title: "Job title", company: "Company name", type: 'Job', btnName: 'Work'};
    } else {
        return {title: "Schools/University's name", company: "Degree title", type: "Education", btnName: 'Education'};
    }
}

function getFormattedDate(date) {
    let dateArr = date.split("-");
    return `${ dateArr[2] }/${ dateArr[1] }/${ dateArr[0] }`
}

export default HistorySection;