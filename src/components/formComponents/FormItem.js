import React from "react";

function FormItem(props) {
    return (
        <div className="form__item">
            <label htmlFor={ props.id }>{ props.label }</label>
            <input onChange={ (e)=>props.stateUpdater(e.target.value) }
                   value={ props.stateValue }
                   name={ props.id } id={ props.id } type={ props.inputType } required={ props.inputRequired }/>
        </div>
    )
}

export default FormItem;