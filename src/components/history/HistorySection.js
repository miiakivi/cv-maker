import React, { useState } from 'react';
import HistoryItemForm from "./HistoryItemForm";
import { updateState } from "../../helpers/updateState";


function HistorySection(props) {
    const [addNewFormOpen, setAddNewFormOpen] = useState(false);
    const [workHistory, setWorkHistory] = useState([props.historyItem]);

    return (
        <div className="history border">
            <h2 className="history__title title">{ props.mainHeader }</h2>
            { workHistory.map((item)=>{
                return <RenderHistoryItems setHistory={setWorkHistory} item={item} formType={props.mainHeader} />

            }) }
            { renderItemForm(addNewFormOpen, setAddNewFormOpen, setWorkHistory, props.mainHeader) }
        </div>

    );
}

function RenderHistoryItems(props) {
    const inputValues = {title: props.item.title, company: props.item.company, startDate: props.item.startDate, endDate: props.item.endDate, description: props.item.description}
    const [editMode, setEditMode] = useState(true);

    if ( props.item.editMode ) {
        const formHeaders = getHeaderObj(props.formType);
        return <HistoryItemForm setHistory={ props.setHistory } setForm={ setEditMode } inputValueObj={ inputValues }
                                header="Edit"
                                titleHeader={ formHeaders.title } companyHeader={ formHeaders.company }
                                type={ formHeaders.type } key={ Date.now() }/>
    } else {
        return <HistoryItem jobTitle={ props.item.title } companyName={ props.item.company }
                            start={ props.item.startDate }
                            end={ props.item.endDate } description={ props.item.description } key={ props.item.id }/>
    }
}

function renderItemForm(form, setForm, setWork, formType) {
    const formHeaders = getHeaderObj(formType);
    const inputValues = {title: '', company: '', startDate: '', endDate: '', description: '',}
    if ( form ) {
        return <HistoryItemForm setHistory={ setWork } setForm={ setForm } inputValueObj={ inputValues }
                                header="Add new"
                                titleHeader={ formHeaders.title } companyHeader={ formHeaders.company }
                                type={ formHeaders.type } key={ Date.now() }/>
    } else {
        return <button onClick={ ()=>setForm(true) } className="btn"> + { formHeaders.btnName }</button>
    }
}




function getHeaderObj(formType) {
    if ( formType === 'Work History' ) {
        return {title: "Job title", company: "Company name", type: 'Job', btnName: 'Work'};
    } else {
        return {title: "Schools/University's name", company: "Degree title", type: "Education", btnName: 'Education'};
    }
}




function HistoryItem(props) {
    return (
        <div onClick={ ()=>updateState(props.setListItems, props.id, {
            name: props.name,
            editMode: true,
            id: props.id
        }) }
             className="pointer">
            <h3 className="history__item-title row"> { props.jobTitle }
                <span className="material-icons settings-icon list-btn">settings</span>
            </h3>
            <h4 className="history__item-title">{ props.companyName }</h4>
            <p>{ getFormattedDate(props.start) } - { getFormattedDate(props.end) }</p>
            <p>{ props.description }</p>
        </div>
    )
}

function getFormattedDate(date) {
    let dateArr = date.split("-");
    return `${ dateArr[2] }/${ dateArr[1] }/${ dateArr[0] }`
}

export default HistorySection;