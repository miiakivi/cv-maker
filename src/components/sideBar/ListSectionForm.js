import React, {useRef} from 'react';
import handleFocus from "../../helpers/handleFocus";
import FormButtons from "../formComponents/FormButtons";
import { useState } from "react";
import { updateState } from "../../helpers/updateState";
import useOutsideClick from "../../helpers/useOutsideClick";


function ListSectionForm(props) {
    let obj = props.valueObj;
    const ref = useRef();

    const [listItem, setListItem] = useState(obj.name);

    function handleSubmit() {
        if ( listItem !== '' ) {
            props.stateUpdater((prev)=>{
                return [...prev, {name: listItem, editMode: false, id: Date.now()}]
            })
            setListItem('');
            props.formOpen(false);
        }
    }

    function handleEditSubmit() {
        if ( listItem !== '' ) {
            updateState(props.stateUpdater, obj.id, {name: listItem, editMode: false, id: obj.id})
            setListItem('');
        }
    }

    useOutsideClick(ref, ()=>{
        if(props.submitType === 'Add new') {
            props.formOpen(false);
        } else if(props.submitType === 'Edit') {
            updateState(props.stateUpdater, obj.id, {name: listItem, editMode: false, id: obj.id})
        }
    });

    return (
        <form ref={ ref } className="list-section__edit-form">
            <textarea
                value={listItem}
                onFocus={ handleFocus }
                onChange={ (e)=>{
                    setListItem(e.target.value);
                } }
                className="list-section__textarea"
                cols="35" rows="3"
                placeholder={ listItem }
            />
            <FormButtons id={obj.id} stateUpdater={props.stateUpdater} submitType={props.submitType} add={handleSubmit} edit={handleEditSubmit} />
        </form>
    );
}

export default ListSectionForm;