import React, {useState, useRef} from 'react';
import {
    setItemsToStorage,
    getItemsFromStorage
} from '/src/helpers/localStorage'

import useOutsideClick from "../../helpers/useOutsideClick";
import {updateState} from "../../helpers/updateState";

const defaultStateContent = {
    description: `A software engineer with hands-on experience in all levels of testing, including performance, functional, integration, system, and user acceptance.`,
    editMode: false
}

function PersonalInfo() {
    const [personalInfo, setPersonalInfo] = useState('');

    getItemsFromStorage("personalInfoData", setPersonalInfo, defaultStateContent)
    setItemsToStorage("personalInfoData", personalInfo);

    if ( !personalInfo.editMode ) {
        return <RenderPersonalInfo setPersonalInfo={setPersonalInfo} description={personalInfo.description}/>
    } else {
        return <EditInfo setPersonalInfo={setPersonalInfo} description={personalInfo.description}/>
    }
}


function RenderPersonalInfo(props) {
    function handleInfoEdit() {
        props.setPersonalInfo((obj) => {
            return {description: obj.description, editMode: true}
        })
    }

    return (
        <div className="personal-info border">
            <h2 className="title">Personal Profile</h2>
            <p>{props.description}</p>
            <button
                className="btn"
                onClick={handleInfoEdit}>+ Edit</button>
        </div>
    )
}


function EditInfo(props) {
    const [editInfo, setEditInfo] = useState(props.description);
    const ref = useRef();

    function handleEditSubmit(e) {
        e.preventDefault();
        if ( editInfo !== '' ) {
            props.setPersonalInfo({description: editInfo, editMode: false})
        }
    }

    useOutsideClick(ref, () => {
        updateState(props.setPersonalInfo({description: editInfo, editMode: false}));
    });

    return (
        <form ref={ref} className="personal-info border"
              onSubmit={handleEditSubmit}>
            <h2 className="title">Personal Profile</h2>
            <textarea name="personal-info"
                      id="personal-info"
                      cols="30" rows="10"
                      value={editInfo}
                      onChange={(e) => {
                          setEditInfo(e.target.value);
                      }}/>
            <button className="edit-btn">Submit</button>
        </form>
    );
}


export default PersonalInfo;