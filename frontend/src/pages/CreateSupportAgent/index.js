import saveSupportAgent from "../../api/saveSupportAgent";
import CreateCard from "../../components/CreateCard";

const CreateSupportAgent = () => {
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
        <CreateCard formFields={formFields} onSave={saveSupportAgent} type={"Agent"}/>
    )
}

export default CreateSupportAgent