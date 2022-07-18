import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

/*  export enum Categories {
    "TO_DO" = "TO_DO",
    "DOING" = "DOING",
    "DONE" = "DONE",

}  */
export interface ICate {
    category: string;
}
export interface IToDo {
    text: string;
    id: number;
    category: string;
}

const {persistAtom} = recoilPersist({
    key:"toDoLocal",
    storage:localStorage,
})

export const categoryState = atom({
    key: "category",
    default: "To Do",
})

export const categoriesState = atom<ICate[]>({
    key: "categories",
    default: [{category: "To Do"}, {category: "Doing"}, {category: "Done"}],
    effects_UNSTABLE: [persistAtom],
})

export const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: [],
    effects_UNSTABLE: [persistAtom],
});

export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({get}) => {
        const toDos = get(toDoState)
        const category = get(categoryState)

        return toDos.filter(todo => todo.category === category)
    }
})