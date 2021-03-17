import React from 'react';
import { FormItem } from "../history/FormContent";


// Modify all of the forms so they use form item components and Buttons components

function FooterItemForm(props) {
    return (
        <form className="history__form">
            <h4>Add New References</h4>
            <div className="row">
                <FormItem id="name" label="References Name" stateValue=" " inputType="text" inputRequired={true}/>
                <FormItem id="jobTitle" label="Referencer title" stateValue=" " inputType="text" inputRequired={true}/>
            </div>
            <div className="row">
                <FormItem id="company" label="Company name" stateValue=" " inputType="text" inputRequired={true}/>
                <FormItem id="contact" label="How to reach" stateValue=" " inputType="text" inputRequired={true}/>
            </div>

            <div className="row list-section__btn-container">
                <button className="submit-btn">Submit</button>
            </div>
        </form>
    );
}

export default FooterItemForm;