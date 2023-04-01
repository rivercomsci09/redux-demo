import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {removeTask} from "../redux/features/tasks/tasksSlice";

export default function Tasks() {
    const tasks = useSelector((state) => {
        console.log('state', state);
        return state.tasks;
    })
    const dispatch = useDispatch();
    const removeTaskHandler = (id) => {
        dispatch(removeTask(id))
    }
    return (
        <>
            <h1>Tasks</h1>
            <ul style={{display: 'inline-block'}}>
                {tasks.map(task => (
                    <li key={task.id}>
                        <span style={{width: '1000px'}}>
                            {task.description}
                        </span>
                        <div style={{display: 'inline-block', margin: '0 0 0 50px'}}>
                            <button onClick={() => removeTaskHandler(task.id)}>Remove Task</button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}