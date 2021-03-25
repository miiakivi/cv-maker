import React, { useState, lazy, Suspense } from 'react';

import openItemEditingForm from "../../helpers/openItemEditingForm";

import {
    setItemsToStorage,
    getItemsFromStorage,
} from '/src/helpers/localStorage';

const ListSectionForm = lazy(()=>import(`./ListSectionForm`));


function ListSection(props) {
    const [listItems, setListItems] = useState([]);
    const [formOpen, setFormOpen] = useState(false);

    getItemsFromStorage(props.dataNameForStorage, setListItems, props.listItems);
    setItemsToStorage(props.dataNameForStorage, listItems);

    return (
        <section className="list-section border">
            <h2 className="title">{ props.sectionTitle }</h2>
            <ul className="list-section__list">
                { listItems.map((item)=>{
                    return <RenderListItems itemType="list" stateUpdater={ setListItems } form={ formOpen }
                                            setFormOpen={ setFormOpen } globalEditingMode={ props.globalEditingMode }
                                            valueObj={ item } key={ item.id }/>
                }) }
            </ul>
            <RenderListItems globalEditingMode={ props.globalEditingMode } itemType="form" stateUpdater={ setListItems }
                             form={ formOpen }
                             setFormOpen={ setFormOpen }
                             btnName={ props.btnName }/>
        </section>)
}

function RenderListItems(props) {
    if ( props.itemType === 'list' ) {
        // If items edit mode is on, return editing form, else return li element
        if ( props.valueObj.editMode ) {
            return (
                <Suspense fallback={ <div>Loading...</div> }>
                    <ListSectionForm submitType="Edit" valueObj={ props.valueObj } formOpen={ props.formOpen }
                                     stateUpdater={ props.stateUpdater }/>
                </Suspense>
            )
        } else {
            return <ListItem globalEditingMode={ props.globalEditingMode } stateUpdater={ props.stateUpdater }
                             valueObj={ props.valueObj }/>
        }
    } else if ( props.itemType === 'form' ) {
        if ( props.form ) {
            let obj = {name: 'Add new'}
            return (
                <Suspense fallback={ <div>Loading...</div> }>
                    <ListSectionForm submitType="Add new" valueObj={ obj } formOpen={ props.setFormOpen }
                                     stateUpdater={ props.stateUpdater }/>
                </Suspense>
            )
        } else {
            return <button onClick={ ()=>props.setFormOpen(true) } className="btn">+ { props.btnName }</button>
        }
    }
}

// The global editing mode doesnt work in this section. When editing mode is ON click event doesnt work
function ListItem(props) {
    return (
        <div onClick={ ()=>{
            if ( props.globalEditingMode ) {
                openItemEditingForm(props.valueObj, props.stateUpdater);
            }
        } } className="list-section__list-cont">
            <span className="material-icons list-section__dot">fiber_manual_record</span>
            <li
                className="list-section__item pointer">
                { props.valueObj.name }
                <span className="material-icons settings-icon">settings</span>
            </li>
        </div>
    )
}

export { ListSection }
