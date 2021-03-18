import { updateState } from "./updateState";

function openItemEditingForm(obj, stateUpdater) {
    let newState = obj;
    newState.editMode = true;
    updateState(stateUpdater, newState.id, newState)
}

export default openItemEditingForm;