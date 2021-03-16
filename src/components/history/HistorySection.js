import React, { useState } from 'react';
import AddNewHistoryItem from "./AddNewHistoryItem";



function HistorySection(props) {
    const [addNewFormOpen, setAddNewFormOpen] = useState(false);
    const [workHistory, setWorkHistory] = useState([props.historyItem]);

    return (
        <div className="history border">
            <h2 className="history__title title">{props.mainHeader}</h2>
            {workHistory.map((item) => {
                return <HistoryItem jobTitle={item.title} companyName={item.company} start={item.startDate} end={item.endDate} description={item.description} key={item.id}/>
            })}
            { renderItemForm(addNewFormOpen, setAddNewFormOpen, setWorkHistory, props.mainHeader) }
        </div>

    );
}

function renderItemForm(form, setForm, setWork, formType) {
    let formHeaders = {title: "Schools/University's name", company: "Degree title", type: "Education", btnName:'Education'};
    if(formType === 'Work History') {
        formHeaders.title = "Job title";
        formHeaders.company = "Company name";
        formHeaders.type = 'Job';
        formHeaders.btnName = 'Work';
    }

    if ( form ) {
        return <AddNewHistoryItem setHistory={ setWork } setForm={setForm}
                                  header="Add new"
                                  titleHeader={formHeaders.title} companyHeader={formHeaders.company} type={formHeaders.type} key={Date.now()}/>
    } else {
        return <button onClick={ ()=> setForm(true) } className="btn"> + {formHeaders.btnName}</button>
    }
}

function HistoryItem(props) {
    return (
        <div className="pointer">
            <h3 className="history__item-title row"> {props.jobTitle}
                <span className="material-icons settings-icon list-btn">settings</span>
            </h3>
            <h4 className="history__item-title">{props.companyName}</h4>
            <p>{getFormattedDate(props.start)} - {getFormattedDate(props.end)}</p>
            <p>{props.description}</p>
        </div>
    )
}

function getFormattedDate(date) {
    let dateArr = date.split("-");
    return `${dateArr[2]}/${dateArr[1]}/${dateArr[0]}`
}

export default HistorySection;