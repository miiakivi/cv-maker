import React, { useState } from 'react';
import FooterItemForm from "./FooterItemForm";
import openItemEditingForm from "../../helpers/openItemEditingForm";

const defaultListItems = [
    {
        refName: 'Jenny Marsh',
        howToReach: '123-456-7890',
        jobTitle: 'Senior Software Developer',
        companyName: 'ZimCore Solutions',
        id: 7894561234,
        editMode: false,
    },
    {
        refName: 'Camden Michaels',
        howToReach: '123-456-7890',
        jobTitle: 'Software Manager',
        companyName: 'Mathica Labs',
        id: 456123789,
        editMode: false,
    }
]

function Footer(props) {
    const [listOfItems, setListOfItems] = useState(defaultListItems);
    const [addNewFormOpen, setAddNewFormOpen] = useState(false);

    return (

        <footer className="footer">
            <div className="row">
                <h3 className="title">References</h3>
                <div className="footer__container">
                    { listOfItems.map((item)=>{
                        return <RenderFooterItems itemType={'item'} stateUpdater={setListOfItems} setFormOpen={ setAddNewFormOpen } formOpen={ addNewFormOpen } itemObj={ item } key={item.id}/>
                    }) }
                </div>
            </div>
            <RenderFooterItems itemType={'Add new'} stateUpdater={setListOfItems} setFormOpen={ setAddNewFormOpen } formOpen={ addNewFormOpen } />

        </footer>
    );
}


function RenderFooterItems(props) {
    if(props.itemType === 'Add new') {
        const item = {refName: '', howToReach: '', jobTitle: '', companyName: '', editMode: false };
        if ( props.formOpen ) {
            return <FooterItemForm stateUpdater={props.stateUpdater} setForm={props.setFormOpen} valueObj={ item } header={props.itemType}/>
        } else {
            return <button onClick={ ()=>props.setFormOpen(true) } className="btn footer__btn">+ Reference</button>
        }
    } else if( props.itemType === 'item') {
        if ( props.itemObj.editMode ) {
            return <FooterItemForm stateUpdater={props.stateUpdater} setForm={props.setFormOpen} valueObj={ props.itemObj } header="Edit"/>
        } else {
            return <FooterItem stateUpdater={props.stateUpdater} valueObj={ props.itemObj }/>
        }
    }
}


function FooterItem(props) {
    let item = props.valueObj;
    return (
        <div onClick={ ()=>openItemEditingForm(item, props.stateUpdater) }
             className="footer__item pointer">
            <h4 className="row">{ item.refName } <span className="material-icons settings-icon">settings</span></h4>
            <p>
                { item.jobTitle } <br/>
                { item.companyName } <br/>
                { item.howToReach } <br/>
            </p>
        </div>
    )
}

export default Footer;