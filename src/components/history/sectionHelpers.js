import { updateState } from "../../helpers/updateState";


function openHistoryItemEditingForm(obj, stateUpdater) {
    let newState = obj;
    newState.editMode = true;
    updateState(stateUpdater, newState.id, newState)
}

function getInputObj(obj) {
    return {
        title: obj.title,
        company: obj.company,
        startDate: obj.startDate,
        endDate: obj.endDate,
        description: obj.description,
        editMode: obj.editMode,
        id: obj.id
    }
}


// These are add new history item forms labels. They change depending on type
function getHeaderObj(formType) {
    if ( formType === 'Work History' ) {
        return {title: "Job title", company: "Company name", type: 'Job', btnName: 'Work'};
    } else {
        return {title: "Schools/University's name", company: "Degree title", type: "Education", btnName: 'Education'};
    }
}

function getFormattedDate(type ,date) {
    if(date === '') {
        if(type === 'start') {
            return '?'
        } else {
            return "Still continues";
        }
    } else {
        let dateArr = date.split("-");
        return `${ dateArr[2] }/${ dateArr[1] }/${ dateArr[0] }`
    }
}

export {
    openHistoryItemEditingForm,
    getInputObj,
    getHeaderObj,
    getFormattedDate
}