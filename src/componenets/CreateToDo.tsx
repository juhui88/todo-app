import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { Categories, toDoState } from "./atom";

interface IForm {
    toDo: string;
  }


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
            <form onSubmit={handleSubmit(handleValid)}>
                <input {...register("toDo", 
                    {
                        required: "Please write a To Do",
                    })}
                        placeholder="Write a to do"
                />
                <button>add</button>
            </form>
        </div>
    )
}

export default CreateToDo;