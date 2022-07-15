import React, { useState } from "react";
import {useForm} from 'react-hook-form';

function TodoList() {
     const [toDo, setToDo] = useState("");
    const [toDoError, setToDoError] = useState("")
    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        const {currentTarget: {value}} = e;
        setToDoError("");
        setToDo(value);
    }
    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(toDo.length < 10){
            return setToDoError("To do should be longer")
        }
        console.log("sumbit")
    } 

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input onChange = {onChange}placeholder="Write a to do" />
                <button>Add</button>
                {toDoError!=="" ? toDoError: null }
            </form>
        </div>
    )
}

export default TodoList;