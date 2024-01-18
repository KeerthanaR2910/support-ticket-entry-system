import {useState} from "react";
import {toast} from 'react-toastify';
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";

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
                        return <FormSelect
                            field={field}
                            value={formData[field.name]}
                            inputChangeHandler={inputChangeHandler}
                        />
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