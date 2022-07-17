import React from "react";
import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "./atom";
import { BsCheckLg} from "react-icons/bs";
import {FaArrowLeft} from"react-icons/fa";
import {MdDeleteOutline} from "react-icons/md"
import styled from "styled-components";

const ToDoItem = styled.li`
    margin: 10px 0 10px 0;
    display: grid;
    grid-template-columns: 1fr 6fr 1fr;
`
const ToDoItemBtn = styled.button`
    background: none;
    border:none;
    color: #7c7c7c;
    &:hover {
        transition: all ease 0.2s 0s;
        color: ${props => props.theme.accentColor};
        cursor: pointer;
    }
`
const ToDoItemDelBtn = styled(ToDoItemBtn)`
    &:hover {
        color: ${props => props.theme.textColor};
    }
`

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
        <ToDoItem>
            {category === "TO_DO" ? 
                <ToDoItemBtn name = {Categories.DONE} onClick = {onChangeCategory}><BsCheckLg/></ToDoItemBtn> : 
                <ToDoItemBtn name = {Categories.TO_DO} onClick = {onChangeCategory}><FaArrowLeft/></ToDoItemBtn>}
            <span>{text}</span>
            <ToDoItemDelBtn onClick={onDelete}><MdDeleteOutline/></ToDoItemDelBtn>
        </ToDoItem>
    )
}

export default ToDo;