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
        <CreateCard formFields={formFields} onSave={saveSupportTicket} type={"Ticket"}/>
    )
}

export default CreateSupportTicket