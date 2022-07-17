import React from "react";
import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "./atom";
import { BsCheckLg, BsFillArrowLeftSquareFill } from "react-icons/bs";

function ToDo({text, id, category}:IToDo) {
    const setToDos = useSetRecoilState(toDoState);
    
    const onDelete = (e:React.MouseEvent<HTMLButtonElement>) => {
        setToDos((prev) => prev.filter((oldToDo) => oldToDo.id !== id))
    }
    const onChangeCategory = (e:React.MouseEvent<HTMLButtonElement>) => {
        const {currentTarget: {name}, } = e

        setToDos((prev) => prev.map((oldToDo) => {
            if(oldToDo.id === id) {
                return {text, id, category: name as any};
            }
            return oldToDo;
        }))
    }
    return (
        <li>
            {category === "TO_DO" ? 
                <button name = {Categories.DONE} onClick = {onChangeCategory}><BsCheckLg/></button> : 
                <button name = {Categories.TO_DO} onClick = {onChangeCategory}><BsFillArrowLeftSquareFill/></button>}
            <span>{text}</span>
            <button onClick={onDelete}>❌</button>
        </li>
    )
}

export default ToDo;