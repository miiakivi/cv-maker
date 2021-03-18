import { removeItemFromList } from "../../helpers/updateState";
import React from "react";

function FormButtons(props) {
    if ( props.submitType === 'Edit' ) {
        return (
            <div className="row list-section__btn-container">
                <button onClick={ props.edit } className="submit-btn">
                    Submit
                </button>
                <button onClick={ ()=>removeItemFromList(props.stateUpdater, props.id) }
                        className="delete-btn">
                    Delete
                </button>
            </div>
        )
    } else if ( props.submitType === 'Add new' ) {
        return <button onClick={ props.add } className="submit-btn">Submit</button>
    }
}

export default FormButtons