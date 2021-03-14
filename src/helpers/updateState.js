

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


export {
    updateState,
    removeItemFromList,
}