import { useState } from "react";
import Modal from "../../components/Modal";
import Form from "../../components/Form";
import saveSupportAgent from "../../api/saveSupportAgent";

const CreateSupportAgent = () => {
    const [requestBody, setrequestBody] = useState({});
    const [response, setResponse] = useState({
        status:'None'
    })

    const inputChangeHandler = (event) => {
        const {name, value} = event.target
        setrequestBody({...requestBody, [name]: value})
    }
    
    const onSubmitHandler = async(event) => {
            event.preventDefault()
            saveSupportAgent(requestBody)
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
            name:"name",
            label: "Name",
            type:"input"
        },
        {
            name:"email",
            label: "Email",
            type:"input",
            isValid: (value) => {
                const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                return emailRegex.test(value)
            },
            errorMessage: 'Email is not valid. Try again'
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
        <div className="flex flex-col items-center">
            <p className=" text-xl font-bold text-center">Create New Support Agent</p>
            <Form fields={formFields} formData={requestBody} onSubmitHandler={onSubmitHandler} inputChangeHandler={inputChangeHandler} submitButtonLabel={"Create Support Agent"}/>
            {response.status === "Success"  &&
            <Modal message={`You have sucessfully created Agent with id ${response.message._id}`}
                handleOkClick={() => {
                    setResponse({
                        status: 'None'
                    })
                }}/>
            }
            {response.status === "Error"  &&
                <Modal message={"Error occured while creating Agent! Try again"}
                    handleOkClick={() => {
                        setResponse({
                            status: 'None'
                        })
                    }} />
            }
        </div>
    )
}

export default CreateSupportAgent