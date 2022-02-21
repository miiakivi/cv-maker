import { useEffect } from 'react';

// If localStorage is empty, set state using stateUpdater with state content values
function getItemsFromStorage(dataName, stateUpdater, stateContent) {
    useEffect(()=>{
        if ( localStorage.getItem(dataName) ) {
            stateUpdater(JSON.parse(localStorage.getItem(dataName)))
        } else {
            stateUpdater(stateContent)
        }
    }, [])
}

// If statesName changes, push that changed data to localStorage
function setItemsToStorage(dataName, statesName) {
    useEffect(()=>{
        localStorage.setItem(dataName, JSON.stringify(statesName))
    }, [statesName])
}

export {
    setItemsToStorage,
    getItemsFromStorage,
}