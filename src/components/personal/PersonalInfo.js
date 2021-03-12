import React, {useState, useEffect} from 'react';


function PersonalInfo(props) {
    const [personalInfo, setPersonalInfo] = useState('');

    getItemsFromStorage(setPersonalInfo);
    setItemsToStorage(personalInfo);

    if ( !personalInfo.editMode ) {
        return <RenderPersonalInfo setPersonalInfo={setPersonalInfo} description={personalInfo.description}/>
    } else {
        return <EditInfo setPersonalInfo={setPersonalInfo} description={personalInfo.description}/>
    }
}

function getItemsFromStorage(setPersonalInfo) {
    // If localStorage is empty, setPersonalInfo with these values
    useEffect(() => {
        if ( localStorage.getItem("personalInfoData") ) {
            setPersonalInfo(JSON.parse(localStorage.getItem("personalInfoData")))
        } else {
            setPersonalInfo({
                description: `A software engineer with hands-on experience in all levels of testing, including performance, functional, integration, system, and user acceptance.`,
                editMode: false
            })
        }
    }, [])
}

function setItemsToStorage(personalInfo) {
    // If personalInfo changes, push that data to localStorage
    useEffect(() => {
        localStorage.setItem("personalInfoData", JSON.stringify(personalInfo))
    }, [personalInfo])
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
            <button onClick={handleInfoEdit}>+ Edit</button>
        </div>
    )
}


function EditInfo(props) {
    const [editInfo, setEditInfo] = useState(props.description);

    function handleEditSubmit(e) {
        e.preventDefault();
        if ( editInfo !== '' ) {
            props.setPersonalInfo({description: editInfo, editMode: false})
        }
    }

    return (
        <form className="personal-info border"
              onSubmit={handleEditSubmit}>
            <h2 className="title">Personal Profile</h2>
            <textarea name="personal-info"
                      id="personal-info"
                      cols="30" rows="10"
                      value={editInfo}
                      onChange={(e) => {
                          setEditInfo(e.target.value);
                      }}/>
            <button>Submit</button>
        </form>
    );
}


export default PersonalInfo;