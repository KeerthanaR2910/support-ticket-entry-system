const FormSelect = (field, value, inputChangeHandler) => {
    return (
        <div className="flex flex-col h-fit gap-y-2">
            <label className=" text-md font-medium">
                {field.label}
            </label>
            <select
                name={field.name}
                defaultValue=""
                value={value}
                onChange={(e) => inputChangeHandler(e)}
                className="w-full bg-slate-300 border border-gray-200 text-gray-700 p-2 focus:outline-none focus:outline-gray-500 focus:bg-slate-50">
                <option disabled></option>
                {field.options.map((option) => <option value={option}>{option}</option>)}
            </select>
        </div>
    );
}

export default FormSelect