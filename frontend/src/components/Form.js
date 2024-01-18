import {useState} from "react";
import {toast} from 'react-toastify';
import FormInput from "./FormInput";

const Form = ({fields, onSubmitHandler, submitButtonLabel, type}) => {
    const [disableSubmit, setDisableSubmit] = useState(false)
    const [formData, setFormData] = useState({});

    const inputChangeHandler = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value})
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        onSubmitHandler(formData)
            .then((response) => {
                toast.success(`You have sucessfully created ${type} with id ${response._id}`, {
                    theme: "dark",
                })
                const resetData = {};
                Object.keys(formData).forEach((key) => {
                    return resetData[key] = ""
                });
                setFormData(resetData)
            })
            .catch(() => toast.error(`Error occured while creating ${type}! Try again`, {
                theme: "dark",
            }));

    }

    return (
        <form className=" bg-slate-100 w-fit md:w-[50%] rounded-xl p-6 flex justify-center m-4 "
              onSubmit={onSubmit}>
            <div className="flex flex-col gap-y-4 justify-center w-fit h-full font-sans md:w-2/3">
                {fields.map((field) => {
                    if (field.type === "select") {
                        return (
                            <div className="flex flex-col h-fit gap-y-2">
                                <label className=" text-md font-medium">
                                    {field.label}
                                </label>
                                <select
                                    name={field.name}
                                    defaultValue=""
                                    onChange={(e) => inputChangeHandler(e)}
                                    className="w-full bg-slate-300 border border-gray-200 text-gray-700 p-2 focus:outline-none focus:outline-gray-500 focus:bg-slate-50">
                                    <option disabled></option>
                                    {field.options.map((option) => <option value={option}>{option}</option>)}
                                </select>
                            </div>
                        )
                    } else if (field.type === "input") {
                        return (
                            <FormInput
                                field={field}
                                value={formData[field.name]}
                                inputChangeHandler={inputChangeHandler}
                                disableSubmit={{value: disableSubmit, setDisableSubmit: setDisableSubmit}}
                            />
                        )
                    } else {
                        return <></>
                    }
                })}
                <div className="m-auto w-[50%]">
                    <button
                        className={disableSubmit ? "p-2 bg-neutral-400 w-full rounded-lg" : "p-2 bg-neutral-600 w-full rounded-lg"}
                        disabled={disableSubmit} type="submit">{submitButtonLabel}</button>
                </div>
            </div>
        </form>
    )
}

export default Form