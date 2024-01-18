import saveSupportTicket from "../../api/saveSupportTicket";
import CreateCard from "../../components/CreateCard";

const CreateSupportTicket = () => {
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
        <CreateCard formFields={formFields} onSave={saveSupportTicket} successMessage="You have sucessfully created Ticket with id" errorMessage="Error occured while creating Ticket! Try again"/>
    )
}

export default CreateSupportTicket