import { useState } from "react";
import Modal from "../../components/Modal";
import Form from "../../components/Form";
import saveSupportAgent from "../../api/saveSupportAgent";

const CreateSupportAgent = () => {
    const [responseBody, setResponseBody] = useState({});
    const [saveStatus, setSaveStatus] = useState('None');

    const inputChangeHandler = (event) => {
        const {id, value} = event.target
        setResponseBody({...responseBody, [id]: value})
    }
    
    const onSubmitHandler = async(event) => {
            event.preventDefault()
            //TODO saveSupportAgent Api
            saveSupportAgent(responseBody)
            .then(() => {
                setSaveStatus("Success")
            })
            .catch(() => {
                setSaveStatus("Error");
            })           
    }

    const formFields = [
        {
            name:"name",
            label: "Name",
            type:"input"
        },
        {
            name:"email",
            label: "Email",
            type:"input"
        },
        {
            name:"phone",
            label: "Phone",
            type:"input"
        },
        {
            name:"description",
            label: "Description",
            type:"input"
        }
    ]

    return (
        <div className="flex flex-col items-center relative">
            <p className=" text-xl font-bold text-center">Create New Support Agent</p>
            <Form fields={formFields} formData={responseBody} onSubmitHandler={onSubmitHandler} inputChangeHandler={inputChangeHandler} submitButtonLabel={"Create Support Agent"}/>
            {saveStatus === "Success"  &&
            <Modal message="Success" 
                handleOkClick={() => {
                    setSaveStatus("None");
                    setResponseBody({})
                }}
                handleCancelClick= {() => {
                    setSaveStatus("None");
                    setResponseBody({});
                }} />
            }
            {saveStatus === "Error"  &&
                <Modal message="Error"
                    handleOkClick={() => {
                        setSaveStatus("None");
                        setResponseBody({})
                    }}
                    handleCancelClick= {() => {
                        setSaveStatus("None");
                        setResponseBody({});
                    }} />
            }
        </div>
    )
}

export default CreateSupportAgent