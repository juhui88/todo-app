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
    padding: 50px;
`
const Title = styled.div`
    font-size: 30px;
    margin-bottom: 30px;
`
const DateYMD = styled.p`
    margin: 10px 0 10px 0;
    font-weight: bold;
`
const DateDay = styled(DateYMD)`
    font-size: 20px;
    color: gray;
`
const ToDoListWrap = styled.div`
    display:flex;

`
const ToDoItemWrap = styled.div`
    width: 100%;
    font-weight: bold;
    margin: 0 7px;
    height: 45vh;
    
`
const ToDoItemTitle = styled.div`
    margin: 7px 0 10px 0;
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
            <ToDoListWrap>
                <ToDoItemWrap>
                    <ToDoItemTitle>To Do</ToDoItemTitle>
                    <ul>
                        {toDos.map(toDo => {
                            if (toDo.category === Categories.TO_DO) {
                                return <ToDo key = {toDo.id} {...toDo}/>
                            }
                        })}
                            
                    </ul>
                </ToDoItemWrap>
                <hr/>
                <ToDoItemWrap>
                    <ToDoItemTitle>Done</ToDoItemTitle>
                    {toDos.map(toDo => {
                            if (toDo.category === Categories.DONE) {
                                return <ToDo key = {toDo.id} {...toDo}/>
                            }
                        })}
                </ToDoItemWrap>
            </ToDoListWrap>
            
            <div>
                
                
            </div>
        </Container>
    )
}

export default TodoList;