import React from "react";

function FormContent(props) {
    const headers = props.headers;
    const stateObj = props.stateObj;

    return (
        <>
            <FormItem id="title" stateValue={ stateObj.title } label={ headers.title }
                      stateUpdater={ stateObj.setTitle }
                      inputType="text" inputRequired={ true }/>
            <FormItem id="company" stateValue={ stateObj.company } label={ headers.company }
                      stateUpdater={ stateObj.setCompany }
                      inputType="text" inputRequired={ true }/>

            <div className="history-form__date-cont">
                <FormItem id="start-date" stateValue={ stateObj.startDate } label="Starting Date"
                          stateUpdater={ stateObj.setStartDate }
                          inputType="date" inputRequired={ true }/>
                <FormItem id="end-date" stateValue={ stateObj.endDate } label="End Date"
                          stateUpdater={ stateObj.setEndDate }
                          inputType="date" inputRequired={ false }/>
            </div>

            <div className="history-form__item">
                <label htmlFor="description">{ headers.type } description</label>
                <textarea
                    onChange={ (e)=>stateObj.setDescription(e.target.value) }
                    value={ stateObj.description }
                    name="description"
                    id="description"
                    cols="30" rows="5"
                    required={ true }
                />
            </div>
        </>
    )
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

export default FormContent