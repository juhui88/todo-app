import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoriesState, categoryState, toDoSelector, toDoState} from './atom';
import CreateCategory from "./CreateCategory";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function TodoList() {
    const [category, setCategory] = useRecoilState(categoryState);
    const categories = useRecoilValue(categoriesState);
    const toDos = useRecoilValue(toDoSelector);

    const onInput = (e:React.FormEvent<HTMLSelectElement>) => {
        const {currentTarget: {value}} = e
        setCategory(value as any)
    }
    return (
        <div>
            <h1>To Dos</h1>
            <hr/>
            <CreateCategory/>
            <hr/>
            <form>
                <select value = {category} onInput={onInput}>
                    {categories.map(c => <option value = {c.category}>{c.category}</option>)}
                </select>
            </form>
            <CreateToDo/>
            {toDos?.map(toDo => <ToDo key = {toDo.id} {...toDo}/> )}
        </div>
    )
}

export default TodoList;