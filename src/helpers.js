import {useEffect} from 'react';

function updateState(stateUpdater, targetId, newItem) {
    let targetIndex;
    stateUpdater((prev) => {
        targetIndex = prev.findIndex((e) => {
            return e.id === targetId;
        })
        return prev.map((item, index) => index === targetIndex ? newItem : item);
    })
}

function removeItemFromList(stateUpdater, targetId) {
    stateUpdater((prev) => {
        return prev.filter(item => item.id !== targetId)
    })
}

function getItemsFromStorage(dataName, stateUpdater, stateContent) {
    // If localStorage is empty, set state using stateUpdater with state content values
    useEffect(() => {
        if ( localStorage.getItem(dataName) ) {
            stateUpdater(JSON.parse(localStorage.getItem(dataName)))
        } else {
            stateUpdater(stateContent)
        }
    }, [])
}

function setItemsToStorage(dataName, statesName) {
    // If statesName changes, push that changed data to localStorage
    useEffect(() => {
        localStorage.setItem(dataName, JSON.stringify(statesName))
    }, [statesName])
}

export {
    updateState,
    removeItemFromList,
    setItemsToStorage,
    getItemsFromStorage,
}