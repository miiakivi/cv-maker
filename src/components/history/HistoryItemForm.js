import React, { useState } from 'react';


function HistoryItemForm(props) {
    const [title, setTitle] = useState(props.inputValueObj.title);
    const [company, setCompany] = useState(props.inputValueObj.company);
    const [startDate, setStartDate] = useState(props.inputValueObj.startDate);
    const [endDate, setEndDate] = useState(props.inputValueObj.endDate);
    const [description, setDescription] = useState(props.inputValueObj.description);

    function handleSubmit(e) {
        e.preventDefault();
        props.setHistory((prev) => {
            return [...prev, {title, company, startDate, endDate, description, editMode:false, id:Date.now() }]
        })
        props.setForm(false);
    }


    return (
        <form onSubmit={ handleSubmit }
              className="history__add-form">
            <h4>{ props.header }</h4>

            <FormItem id="title" stateValue={ title } label={ props.titleHeader } stateUpdater={ setTitle }
                      inputType="text" inputRequired={ true }/>
            <FormItem id="company" stateValue={ company } label={ props.companyHeader } stateUpdater={ setCompany }
                      inputType="text" inputRequired={ true }/>

            <div className="history-form__date-cont">
                <FormItem id="start-date" stateValue={ startDate } label="Starting Date" stateUpdater={ setStartDate }
                          inputType="date" inputRequired={ true }/>
                <FormItem id="end-date" stateValue={ endDate } label="End Date" stateUpdater={ setEndDate }
                          inputType="date" inputRequired={ false }/>
            </div>

            <div className="history-form__item">
                <label htmlFor="description">{ props.type } description</label>
                <textarea
                    onChange={ (e)=>setDescription(e.target.value) }
                    value={ description }
                    name="description"
                    id="description"
                    cols="30" rows="5"
                    required={ true }
                />
            </div>
            <button className="submit-btn">Submit</button>
        </form>

    );
}

function FormItem(props) {
    return (
        <div className="history-form__item">
            <label htmlFor={ props.id }>{ props.label }</label>
            <input onChange={ (e)=>props.stateUpdater(e.target.value) }
                   value={ props.stateValue }
                   name={ props.id } id={ props.id } type={ props.inputType } required={ props.inputRequired }/>
        </div>
    )
}



export default HistoryItemForm;



















