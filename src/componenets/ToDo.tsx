import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoriesState, IToDo, toDoState } from "./atom";

function ToDo({text, category, id}:IToDo) {
    const setToDos = useSetRecoilState(toDoState);
    const categories = useRecoilValue(categoriesState);

    const onClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        const {currentTarget: {name}, } = e
        setToDos((prev) => prev.map((oldToDo) => {
            if(oldToDo.id === id) {
                return {text, id, category: name};
            }
            return oldToDo;
        }))
    };
    const onDeletClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        setToDos((prev) => prev.filter((oldToDo) => oldToDo.id !== id))
    }
    return (
        <li>
            <span>{text}</span>
            {categories.map(c => {
                if(category !== c.category) {
                 return <button name = {c.category} onClick={onClick}>
                    {c.category}
                </button>}
            })}
            <button onClick={onDeletClick}>❌</button>
        </li>
    )
}

export default ToDo;