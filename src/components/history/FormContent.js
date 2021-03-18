import React from "react";
import FormItem from "../formComponents/FormItem";
import handleFocus from "../../helpers/handleFocus";

function FormContent(props) {
    const headers = props.headers;
    const stateObj = props.stateObj;

    return (
        <>
            <FormItem id="title" stateValue={ stateObj.title } label={ headers.title }
                      stateUpdater={ stateObj.setTitle } inputType="text" inputRequired={ true }/>

            <FormItem id="company" stateValue={ stateObj.company } label={ headers.company }
                      stateUpdater={ stateObj.setCompany } inputType="text" inputRequired={ true }/>

            <div className="form__date-cont">
                <FormItem id="start-date" stateValue={ stateObj.startDate } label="Starting Date"
                          stateUpdater={ stateObj.setStartDate } inputType="date" inputRequired={ true }/>
                <FormItem id="end-date" stateValue={ stateObj.endDate } label="End Date"
                          stateUpdater={ stateObj.setEndDate } inputType="date" inputRequired={ false }/>
            </div>

            <div className="form__item">
                <label htmlFor="description">{ headers.type } description</label>
                <textarea
                    onChange={ (e)=>stateObj.setDescription(e.target.value) }
                    onFocus={ handleFocus } value={ stateObj.description }
                    name="description"
                    id="description"
                    cols="30" rows="5"
                    required={ true }
                />
            </div>
        </>
    )
}



export default FormContent;