import React, {useState} from 'react';
import {updateState} from '../App'


function GoalsSection(props) {
    const [goals, setGoals] = useState([
        {name: 'lorem impsum for dorom amet', editMode: false, id: 1234566},
        {name: 'lorem impsum for dorom amet', editMode: false, id: 1244555},
        {name: 'lorem impsum for dorom amet', editMode: false, id: 1222222},
        {name: 'lorem impscxcxum for dorom amet', editMode: false, id: 1222222},
    ]);

    const [goalItemFormOpen, setGoalItemForm] = useState(false);


    return (
        <section className="list-section border">
            <h2 className="title">Goals in life</h2>
            <ul className="list-section__list">
                {goals.map((item) => {
                    return <GoalItem editMode={item.editMode} setGoals={setGoals} name={item.name} id={item.id}/>
                })}
            </ul>
            {renderInputItem(goalItemFormOpen, setGoalItemForm, setGoals)}
        </section>)
}


function renderInputItem(goalItemFormOpen, setGoalItemForm, setGoals) {
    if ( goalItemFormOpen ) {
        return <InputForm formOpen={setGoalItemForm} addNewGoal={setGoals}/>
    } else {
        return <button onClick={() => setGoalItemForm(true)} className="btn">+ Goal</button>
    }
}

function InputForm(props) {
    const [newGoalItem, setNewGoalItem] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        props.addNewGoal((prev) => {
            return [...prev, {name: newGoalItem, editMode: false}]
        })
        setNewGoalItem('');
        props.formOpen(false);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                   placeholder="Add new"
                   value={newGoalItem}
                   onChange={(e) => {
                       setNewGoalItem(e.target.value);
                   }}/>
            <button className="btn">Submit</button>
        </form>
    )
}


function GoalItem(props) {

    if ( props.editMode ) {
        return <EditItem setGoals={props.setGoals} id={props.id} name={props.name}/>
    } else {
        return <RenderListItem setGoals={props.setGoals} id={props.id} name={props.name}/>
    }
}

function RenderListItem(props) {
    return (
        <li onClick={() => updateState(props.setGoals, props.id, {name: props.name, editMode: true, id: props.id})}
            className="list-section__item pointer row">
            {props.name}
            <span className="material-icons list-section__settings btn">settings</span>
        </li>
    )
}

function EditItem(props) {
    const [editingItem, setEditingItem] = useState(props.name);

    function handleEditItemSubmit(e) {
        e.preventDefault();
        if ( editingItem !== '' ) {
            updateState(props.setGoals, props.id, {name: editingItem, editMode: false, id: props.id})
            setEditingItem('');
        }
    }

    return (
        <form onSubmit={handleEditItemSubmit}>
            <input className="list-section__item-edit"
                   type="text"
                   placeholder={editingItem}
                   value={editingItem}
                   onChange={(e) => {
                       setEditingItem(e.target.value);
                   }}/>
            <div>
                <button className="btn edit-btn">Submit</button>
            </div>
        </form>
    )
}




export default GoalsSection;