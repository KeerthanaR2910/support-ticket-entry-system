import Form from "./Form/Form";

const CreateCard = ({formFields, onSave,type}) => {
    return (
        <div className="flex flex-col items-center">
            <p className=" text-xl font-bold text-center">Create New Support {type}</p>
            <Form fields={formFields} onSubmitHandler={(data) => onSave(data)} submitButtonLabel={`Create Support ${type}`} type={type}/>
        </div>
    )
}

export default CreateCard