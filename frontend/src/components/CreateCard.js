import Form from "./Form/Form";

const CreateCard = ({formFields, onSave}) => {
    return (
        <div className="flex flex-col items-center">
            <p className=" text-xl font-bold text-center">Create New Support Ticket</p>
            <Form fields={formFields} onSubmitHandler={(data) => onSave(data)} submitButtonLabel={"Create Support Ticket"} type={"Ticket"}/>
        </div>
    )
}

export default CreateCard