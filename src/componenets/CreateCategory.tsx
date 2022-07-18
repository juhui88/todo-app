import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { categoriesState } from "./atom";

interface ICateForm {
    category: string;
  }

function CreateCategory() {
    const {register, handleSubmit, setValue} = useForm<ICateForm>();
    const [categories ,setCategories] = useRecoilState(categoriesState);

    const handleValid = ({category} : ICateForm) => {
        setCategories((prev) => [
            ...prev,
            { category : category}
          ]);
        setValue("category", "")
    }
    return (
        <form onSubmit={handleSubmit(handleValid)}>
            <input {...register("category")} placeholder="Enter additional category"/>
            <button>add</button>
        </form>
    )
}

export default CreateCategory;