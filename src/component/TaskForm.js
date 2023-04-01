import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addTask} from "../redux/features/tasks/tasksSlice";

export default function TaskForm() {
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();
    const addTaskHandler = (e) => {
        e.preventDefault();
        dispatch(addTask(description))
    }
    return (
    <form onSubmit={addTaskHandler}>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
        <button type="submit">Add Task</button>
    </form>
    )
}