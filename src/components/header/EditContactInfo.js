import React, { useRef, useState } from "react";
import useOutsideClick from "../../helpers/useOutsideClick";
import handleFocus from "../../helpers/handleFocus";

function EditContactInfo(props) {
    const info = props.contactInfo;

    const [phoneNum, setPhoneNum] = useState(info.phone);
    const [email, setEmail] = useState(info.email);
    const [website, setWebsite] = useState(info.website);
    const [address, setAddress] = useState(info.address);


    const ref = useRef();

    useOutsideClick(ref, ()=>{
        props.setFormOpen(false);
    });

    function handleSubmit(e) {
        e.preventDefault();
        props.setContactInfo({
            phone: phoneNum,
            email: email,
            website: website,
            address: address
        })
        props.setFormOpen(false);
    }

    return (
        <form onSubmit={ handleSubmit }
              ref={ ref }
              onFocus={ handleFocus }
              className="header__contact-form">
            <h3 className="header__contact--title">Contact me</h3>
            <div className="header__contact-items">


                <InputField stateValue={ phoneNum } stateUpdater={ setPhoneNum }
                            label='Phone number' id="phone" inputType="text"/>
                <InputField stateValue={ email } stateUpdater={ setEmail }
                            label='Email' id="email" inputType="email"/>
                <InputField stateValue={ website } stateUpdater={ setWebsite }
                            label='Website/Social Media' id="website" inputType="text"/>
                <InputField stateValue={ address } stateUpdater={ setAddress }
                            label='Address' id="address" inputType="text"/>


            </div>
            <button className="submit-btn">+ Submit</button>
        </form>
    )
}

function InputField(props) {
    const [newValue, setNewValue] = useState(props.stateValue)

    const ref = useRef();

    useOutsideClick(ref, ()=>{
        props.stateUpdater(newValue);
    });

    return (
        <div ref={ ref } className="header__contact-form-item">
            <label htmlFor={ props.id }>{ props.label }*</label>
            <input
                onChange={ (e)=>setNewValue(e.target.value) }
                value={ newValue }
                required={ true }
                type={ props.inputType }
                id={ props.id } name={ props.id }/>
        </div>
    )
}

export default EditContactInfo