import {useState} from "react";
import saveSupportTicket from "../../api/saveSupportTicket";
import Modal from "../../components/Modal";
import Form from "../../components/Form";

const CreateSupportTicket = () => {
    const [requestBody, setRequestBody] = useState({});
    const [response, setResponse] = useState({
        status: 'None'
    })

    const inputChangeHandler = (event) => {
        const {name, value} = event.target
        setRequestBody({...requestBody, [name]: value})
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        saveSupportTicket(requestBody)
            .then((response) => {
                console.log({response})
                setResponse({
                    status: 'Success',
                    message: response
                })
            })
            .catch((error) => {
                console.log({error})
                setResponse({
                    status: 'Error',
                    message: error.message
                })
            })
    }

    const formFields = [
        {
            name: "topic",
            label: "Topic",
            type: "input"
        },
        {
            name: "description",
            label: "Description",
            type: "input"
        },
        {
            name: "severity",
            label: "Severity",
            type: "select",
            options: ["Low", "High", "Medium", "Urgent"]
        },
        {
            name: "type",
            label: "Type",
            type: "input"
        }
    ]

    return (
        <div className="flex flex-col items-center">
            <p className=" text-xl font-bold text-center">Create New Support Ticket</p>
            <Form fields={formFields} formData={requestBody} onSubmitHandler={onSubmitHandler}
                  inputChangeHandler={inputChangeHandler} submitButtonLabel={"Create Support Ticket"}/>
            {response.status === "Success" &&
                <Modal message={`You have sucessfully created Ticket with id ${response.message._id}`}
                       handleOkClick={() => {
                           setResponse({
                               status: 'None'
                           })
                       }}/>
            }
            {response.status === "Error" &&
                <Modal message={"Error occured while creating Ticket! Try again"}
                       handleOkClick={() => {
                           setResponse({
                               status: 'None'
                           })
                       }}/>
            }
        </div>
    )
}

export default CreateSupportTicket