import React, { useState } from "react";
import {useForm} from 'react-hook-form';
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atom";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import { Categories } from "./atom";

const Container = styled.div`
    margin : 40px auto;
    width: 60vw;
    height: 70vh;
    background: ${props => props.theme.itemBgColor};
    border-radius: 15px;
    box-shadow: 5px 5px 20px gray;
    padding: 50px;
`
const Title = styled.div`
    font-size: 30px;
`
const DateYMD = styled.p`
    margin: 10px 0 10px 0;
    font-weight: bold;
`
const DateDay = styled(DateYMD)`
    font-size: 20px;
    color: gray;
`
const ToDoItemWrap = styled.div`
    display:flex;

`
const ToDoItem = styled.div`
    width: 100%;
`

const day = ["일", "월", "화", "수", "목", "금", "토"];

function TodoList() {
    const toDos= useRecoilValue(toDoState);
    const date = new Date();
    console.log(toDos)
    return (
        <Container>
            <Title>
                <DateYMD>
                    {date.getFullYear()}년 {date.getMonth() + 1}월 {date.getDate()}일
                </DateYMD>
                <DateDay>
                    {day[date.getDay()]}요일
                </DateDay>
            </Title>
            <CreateToDo/>
            <ToDoItemWrap>
                <ToDoItem>
                    <span>할 거</span>
                    <ul>
                        {toDos.map(toDo => {
                            if (toDo.category === Categories.TO_DO) {
                                return <ToDo key = {toDo.id} {...toDo}/>
                            }
                        })}
                            
                    </ul>
                </ToDoItem>
                <ToDoItem>
                    <span>다 했음</span>
                    {toDos.map(toDo => {
                            if (toDo.category === Categories.DONE) {
                                return <ToDo key = {toDo.id} {...toDo}/>
                            }
                        })}
                </ToDoItem>
            </ToDoItemWrap>
            
            <div>
                
                
            </div>
        </Container>
    )
}

export default TodoList;