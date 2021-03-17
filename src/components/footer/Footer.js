import React, { useState } from 'react';
import FooterItemForm from "./FooterItemForm";

const defaultListItems = [
    {
        refName: 'Jenny Marsh',
        howToReach: '123-456-7890',
        jobTitle: 'Senior Software Developer',
        companyName: 'ZimCore Solutions',
        id: Date.now(),
        editMode: false,
    },
    {
        refName: 'Camden Michaels',
        howToReach: '123-456-7890',
        jobTitle: 'Software Manager',
        companyName: 'Mathica Labs',
        id: Date.now(),
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
                        return <RenderFooterItems itemObj={ item }/>
                    }) }
                </div>
            </div>
            <AddNewItem setFormOpen={setAddNewFormOpen} formOpen={addNewFormOpen}/>
        </footer>
    );
}

function AddNewItem(props) {
    if(props.formOpen) {
        return <FooterItemForm/>
    } else {
        return <button onClick={() => props.setFormOpen(true)} className="btn footer__btn">+ Reference</button>
    }
}

function RenderFooterItems(props) {
    let item = props.itemObj;
    if ( item.editMode ) {
        return <FooterItemForm/>
    } else {
        return <FooterItem itemObj={ item }/>
    }
}


function FooterItem(props) {
    let item = props.itemObj;
    return (
        <div className="footer__item pointer">
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