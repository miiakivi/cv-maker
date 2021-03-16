import React, { useRef, useState } from "react";
import useOutsideClick from "../../helpers/useOutsideClick";
import handleFocus from "../../helpers/handleFocus";
import instantValidation from "../../helpers/instantValidation";

function EditContactInfo(props) {
    const ref = useRef();
    const info = props.contactInfo;
    const [formIsValid, setFormValidation] = useState(true);

    const [phoneNum, setPhoneNum] = useState(info.phone);
    const [email, setEmail] = useState(info.email);
    const [website, setWebsite] = useState(info.website);
    const [address, setAddress] = useState(info.address);

    useOutsideClick(ref, ()=>{
        props.setFormOpen(false);
    });

    function handleSubmit(e) {
        e.preventDefault();
        if ( formIsValid ) {
            props.setContactInfo({
                phone: phoneNum,
                email: email,
                website: website,
                address: address
            })
            props.setFormOpen(false);
        }

    }

    return (
        <form onSubmit={ handleSubmit } ref={ ref } className="header__contact-form">
            <h3 className="header__contact--title">Contact me</h3>
            <div onFocus={ handleFocus }
                 className="header__contact-items">
                <InputField stateValue={ phoneNum } stateUpdater={ setPhoneNum }
                            inputPattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]*$"
                            inputTitle="Only numbers e.g 020 1234567"
                            label='Phone number' id="phone" inputType="text"/>

                <InputField stateValue={ email } stateUpdater={ setEmail }
                            inputPattern="^(([-\w\d]+)(\.[-\w\d]+)*@([-\w\d]+)(\.[-\w\d]+)*(\.([a-zA-Z]{2,5}|[\d]{1,3})){1,2})$"
                            inputTitle="e.g test@test.com"
                            label='Email' id="email" inputType="email"/>

                <InputField stateValue={ website } stateUpdater={ setWebsite }
                            inputPattern="^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&'\\(\\)\\*\\+,;=.]+$"
                            inputTitle="Link to your social media site or website"
                            label='Website/Social Media' id="website" inputType="text"/>

                <InputField stateValue={ address } stateUpdater={ setAddress } formIsValid={ setFormValidation }
                            inputPattern="^.{1,50}$"
                            inputTitle="Only letters and numbers. e.g 123 Anywhere street, Any city, Country"
                            label='Address' id="address" inputType="text"/>
            </div>
            <button className="submit-btn">+ Submit</button>
        </form>
    )
}

function InputField(props) {
    const [newValue, setNewValue] = useState(props.stateValue);
    const ref = useRef();

    useOutsideClick(ref, ()=>{
        props.stateUpdater(newValue);
    });

    return (
        <div ref={ ref } className="header__contact-form-item">
            <label htmlFor={ props.id }>{ props.label }*</label>
            <input
                onChange={ (e)=>setNewValue(e.target.value) }
                pattern={ props.inputPattern }
                value={ newValue }
                required={ true }
                title={ props.inputTitle }
                type={ props.inputType }
                id={ props.id } name={ props.id }/>
        </div>
    )
}

export default EditContactInfo