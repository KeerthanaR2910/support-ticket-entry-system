import Input from "./Input";
import {useState} from "react";

const Form = ({formData,fields,onSubmitHandler,inputChangeHandler,submitButtonLabel}) => {
    const [disableSubmit, setDisableSubmit] = useState(false)
    return (
        <form className=" bg-slate-100 w-fit md:w-[50%] rounded-xl p-6 flex justify-center m-4 "
            onSubmit={onSubmitHandler}>
            <div className="flex flex-col gap-y-4 justify-center w-fit h-full font-sans md:w-2/3">
                {fields.map((field) => {
                    if(field.type === "select"){
                        return (
                            <div className="flex flex-col h-fit gap-y-2">
                                <label className=" text-md font-medium">
                                    {field.label}
                                </label>
                                <select
                                    name={field.name}
                                    required
                                    value={formData[field.label]}
                                    onChange={(e) => inputChangeHandler(e)}
                                    className="w-full bg-slate-300 border border-gray-200 text-gray-700 p-2 focus:outline-none focus:outline-gray-500 focus:bg-slate-50">
                                    <option disabled defaultValue></option>
                                    {field.options.map((option) => <option value={option}>{option}</option> )}
                                </select>
                            </div>
                        )
                    }
                    else if(field.type === "input"){
                        return (
                            <Input
                                field={field}
                                inputChangeHandler={inputChangeHandler}
                                value={formData[field.label]}
                                disableSubmit={{
                                    value: disableSubmit,
                                    setDisableSubmit
                                }} />
                        )
                    }else{
                        return <></>
                    }
                })}
                <div className="m-auto w-[50%]">
                    <button className={disableSubmit ? "p-2 bg-neutral-400 w-full rounded-lg" : "p-2 bg-neutral-600 w-full rounded-lg"} disabled={disableSubmit} type="submit">{submitButtonLabel}</button>
                </div>
            </div>
        </form>

    )
}

export default Form