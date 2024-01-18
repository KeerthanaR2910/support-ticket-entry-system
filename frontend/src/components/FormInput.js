import { Typography } from "@material-tailwind/react";
import { useState} from "react";

const FormInput = ({field,value,inputChangeHandler,disableSubmit}) => {
    const [error,setError] = useState(false);
    const handleInputChange = (event) => {
        const inputValue = event.currentTarget.value;
        inputChangeHandler(event);
        if(field.isValid && !field.isValid(inputValue)){
            setError(true)
            disableSubmit.setDisableSubmit(true);
        } else {
            if(error) setError(false);
            if(disableSubmit.value) disableSubmit.setDisableSubmit(false);
        }
    }

    return (
        <div className="flex flex-col h-fit gap-y-2">
            <label className=" text-md font-medium">
                {field.label}
            </label>
            <input
                type="text"
                name={field.name}
                key={field.name}
                value={value}
                required
                onChange={(e) => handleInputChange(e)}
                className=" appearance-none bg-slate-300 leading-tight text-gray-700 p-2 focus:outline-none focus:outline-gray-500 focus:bg-slate-50"/>
            {error ?  <Typography
                variant="small"
                className={error ? "block leading-none opacity-70 text-red-500 font-semibold py-1" : "hidden"}
            >
                {field.errorMessage ?? "Input is not valid"}
            </Typography> : <></>
            }
        </div>
    )
}

export default FormInput