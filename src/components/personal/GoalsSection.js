import React, {useState, useEffect} from 'react';


function GoalsSection(props) {
    const [goals, setGoals] = useState([
        {name: 'lorem impsum for dorom amet', editMode: false},
        {name: 'lorem impsum for dorom amet', editMode: false},
        {name: 'lorem impsum for dorom amet', editMode: false},
        {name: 'lorem impscxcxum for dorom amet', editMode: false},
    ]);


    return <ListOfGoalItems setGoals={setGoals} goals={goals}/>

}


function ListOfGoalItems(props) {

    const [goalItemFormOpen, setGoalItemForm] = useState(false);

    function AddNewInput() {
        if ( goalItemFormOpen ) {
            return <InputForm formOpen={setGoalItemForm} addNewGoal={props.setGoals}/>
        } else {
            return <button onClick={() => setGoalItemForm(true)} className="btn">+ add</button>
        }
    }

    return (
        <section className="list-section border">
            <h2 className="title">Goals in life</h2>
            <ul className="list-section__list">
                {props.goals.map((item) => {
                    return <GoalItem name={item.name}/>
                })}
            </ul>
            {AddNewInput()}
        </section>)

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
                   }}
            />
            <button className="btn">Submit</button>
        </form>
    )
}

function GoalItem(props) {
    return (
        <li className="list-section__item pointer row">
            {props.name}
            <span className="material-icons list-section__settings btn">settings</span>
        </li>
    )
}

export default GoalsSection;