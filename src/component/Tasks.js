import React from 'react';
import {useSelector} from "react-redux";

export default function Tasks() {
    const tasks = useSelector((state) => {
        console.log('state', state);
        return state.tasks;
    })
    return (
        <>
            <h1>Tasks</h1>
            <ul>
                {tasks.map(task => (<li key={task.id}> {task.description} </li>))}
            </ul>
        </>
    )
}