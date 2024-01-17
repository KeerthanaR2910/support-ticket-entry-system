import { useState } from "react";
import saveSupportTicket from "../../api/saveSupportTicket";
import Modal from "../../components/Modal";
import Form from "../../components/Form";

const CreateSupportTicket = () => {
    const [responseBody, setResponseBody] = useState({});
    const [saveStatus, setSaveStatus] = useState('None');

    const inputChangeHandler = (event) => {
        const {id, value} = event.target
        setResponseBody({...responseBody, [id]: value})
    }
    
    const onSubmitHandler = async(event) => {
            event.preventDefault()
            saveSupportTicket(responseBody)
            .then(() => {
                setSaveStatus("Success")
            })
            .catch(() => {
                setSaveStatus("Error");
            })           
    }

    const formFields = [
        {
            name:"topic",
            label: "Topic",
            type:"input"
        },
        {
            name:"description",
            label: "Description",
            type:"input"
        },
        {
            name:"severity",
            label: "Severity",
            type:"select",
            options: ["Low","High","Medium","Urgent"]
        },
        {
            name:"type",
            label: "Type",
            type:"input"
        }
    ]

    return (
        <div className="flex flex-col items-center relative">
            <p className=" text-xl font-bold text-center">Create New Support Ticket</p>
            <Form fields={formFields} formData={responseBody} onSubmitHandler={onSubmitHandler} inputChangeHandler={inputChangeHandler}  submitButtonLabel={"Create Support Ticket"}/>
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

export default CreateSupportTicket