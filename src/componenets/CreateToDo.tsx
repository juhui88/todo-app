import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { Categories, toDoState } from "./atom";
import {IoIosAddCircle} from "react-icons/io";

interface IForm {
    toDo: string;
  }

const ToDoForm = styled.form`
  width: 100%;
  margin:10px 0 10px 0;
  display: flex;
  align-items: center;


`
const ToDoInput = styled.input`
    border: none;
    width: 90%;
    font-size: 25px;
    border-bottom: 1px solid gray;
`
const ToDoBtn = styled.button`
    border: none;
    background:none;
    width:10%;
    &:hover {
        cursor: pointer;
    }
    font-size: 30px;
    color: ${props =>props.theme.accentColor};
`


function CreateToDo() {
    const {register, handleSubmit, setValue} = useForm<IForm>();
    const [toDos, setToDos] = useRecoilState(toDoState);

    const handleValid = ({ toDo }: IForm) => {
        setToDos((oldToDos) => [
          { text: toDo, id: Date.now() , category: Categories.TO_DO},
          ...oldToDos,
        ]);
        setValue("toDo", "");
      };
    return (
        <div>
            <ToDoForm onSubmit={handleSubmit(handleValid)}>
                <ToDoInput {...register("toDo", 
                    {
                        required: "Please write a To Do",
                    })}
                        placeholder="Write a to do"
                />
                <ToDoBtn><IoIosAddCircle/></ToDoBtn>
            </ToDoForm>
        </div>
    )
}

export default CreateToDo;