import React, { useRef, useState } from 'react';
import FormItem from "../formComponents/FormItem";
import FormButtons from "../formComponents/FormButtons";
import { updateState } from "../../helpers/updateState";
import useOutsideClick from "../../helpers/useOutsideClick";


// Modify all of the forms so they use form item components and Buttons components

function FooterItemForm(props) {
    const ref = useRef();
    const obj = props.valueObj;
    const [refName, setRefName] = useState(obj.refName);
    const [jobTitle, setJobTitle] = useState(obj.jobTitle);
    const [companyName, setCompanyName] = useState(obj.companyName);
    const [howToReach, setHowToReach] = useState(obj.howToReach);


    function editOldItem() {
        updateState(props.stateUpdater, obj.id, {
            refName,
            jobTitle,
            companyName,
            howToReach,
            id: obj.id,
            editMode: false
        });
    }

    function addNewItem() {
        if ( refName !== '' && companyName !== '' && jobTitle !== '' && howToReach !== '' ) {
            props.stateUpdater((prev)=>{
                return [...prev, {
                    refName,
                    jobTitle,
                    companyName,
                    howToReach,
                    id: Date.now(),
                    editMode: false
                }
                ]
            })
            props.setForm(false);
        }
    }

    useOutsideClick(ref, ()=>{
        if ( props.header === 'Edit' ) {
            editOldItem();
        } else if ( props.header === 'Add new' ) {
            props.setForm(false);
        }
    });

    return (
        <form ref={ ref } className="form footer__form">
            <h4>{ props.header } Reference</h4>
            <div className="row">
                <FormItem id="name" label="References Name" stateUpdater={ setRefName } stateValue={ refName }
                          inputType="text" inputRequired={ true }/>
                <FormItem id="jobTitle" label="Referencer title" stateUpdater={ setJobTitle } stateValue={ jobTitle }
                          inputType="text" inputRequired={ true }/>
            </div>
            <div className="row">
                <FormItem id="company" label="Company name" stateUpdater={ setCompanyName } stateValue={ companyName }
                          inputType="text" inputRequired={ true }/>
                <FormItem id="contact" label="How to reach" stateUpdater={ setHowToReach }
                          stateValue={ howToReach } inputType="text" inputRequired={ true }/>
            </div>
            <FormButtons submitType={ props.header } edit={ editOldItem } add={ addNewItem } id={ obj.id }
                         stateUpdater={ props.stateUpdater }/>
        </form>
    );
}

export default FooterItemForm;