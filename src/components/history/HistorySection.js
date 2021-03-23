import React, { useState } from 'react';
import HistoryItemForm from "./HistoryItemForm";
import {
    getInputObj,
    getHeaderObj,
    getFormattedDate
} from './sectionHelpers'

import openItemEditingForm from "../../helpers/openItemEditingForm";

import { getItemsFromStorage, setItemsToStorage } from "../../helpers/localStorage";


function HistorySection(props) {
    const [addNewFormOpen, setAddNewFormOpen] = useState(false);
    const [historyItemList, setHistoryItemList] = useState([]);

    getItemsFromStorage(props.dataNameForStorage, setHistoryItemList, props.itemList);
    setItemsToStorage(props.dataNameForStorage, historyItemList);


    return (
        <div className="border">
            <h2 className="history__title title">{ props.mainHeader }</h2>
            { historyItemList.map((item)=>{
                return <RenderHistoryItems globalEditingMode={ props.globalEditingMode }
                                           setHistory={ setHistoryItemList } item={ item }
                                           formType={ props.mainHeader } key={ item.id }/>
            }) }
            <AddNewItem addNewFormOpen={ addNewFormOpen } setAddNewFormOpen={ setAddNewFormOpen }
                        setWorkHistory={ setHistoryItemList } formType={ props.mainHeader }/>
        </div>
    );
}

function RenderHistoryItems(props) {
    const valueObj = getInputObj(props.item);
    const formHeaders = getHeaderObj(props.formType);
    // if items editing mode is on, return editing form, else return item itself
    if ( props.item.editMode ) {
        return <HistoryItemForm submitType='Edit' stateUpdater={ props.setHistory } headers={ formHeaders }
                                valueObj={ valueObj } key={ valueObj.id }/>
    } else {
        return <HistoryItem globalEditingMode={ props.globalEditingMode } stateUpdater={ props.setHistory }
                            valueObj={ valueObj } key={ valueObj.id }/>
    }
}

function AddNewItem(props) {
    const formHeaders = getHeaderObj(props.formType);
    const valueObj = {title: '', company: '', startDate: '', endDate: '', description: ''}

    if ( props.addNewFormOpen ) {
        return <HistoryItemForm submitType='Add new' stateUpdater={ props.setWorkHistory } headers={ formHeaders }
                                valueObj={ valueObj } setForm={ props.setAddNewFormOpen } key={ Date.now() }/>
    } else {
        return <button onClick={ ()=>props.setAddNewFormOpen(true) } className="btn"
                       key={ Date.now() }> + { formHeaders.btnName }</button>
    }
}

function HistoryItem(props) {
    let valueObj = props.valueObj;
    return (
        // When user clicks it, change items state so edit form opens up
        <div onClick={ ()=>{
            if ( props.globalEditingMode ) openItemEditingForm(valueObj, props.stateUpdater)
        } }
             className="pointer">
            <h3 className="history__item-title"> { valueObj.title }
                <span className="material-icons settings-icon list-btn">settings</span>
            </h3>
            <h4 className="history__item-title">{ valueObj.company }</h4>
            <p>{ getFormattedDate('start', valueObj.startDate) } - { getFormattedDate('end', valueObj.endDate) }</p>
            <p>{ valueObj.description }</p>
        </div>
    )
}


export default HistorySection;