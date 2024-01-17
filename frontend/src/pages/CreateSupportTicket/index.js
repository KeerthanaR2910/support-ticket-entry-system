import { useState } from "react";

const CreateSupportTicket = () => {
    const [responseBody, setResponseBody] = useState();

    const inputChangeHandler = (event) => {
        const {id, value} = event.target
        setResponseBody({...responseBody, [id]: value})
    }
    
    const onSubmitHandler = async(event) => {
        event.preventDefault()
        console.log(responseBody)
    }
    return (
        <div className="flex flex-col items-center">
            <p className=" text-xl font-bold text-center">Create New Support Ticket</p>
            <form className=" bg-slate-100 w-fit md:w-[50%] rounded-xl p-6 flex justify-center m-4" onSubmit={onSubmitHandler}>
                <div className="flex flex-col gap-y-4 justify-center w-fit h-full font-sans md:w-2/3">
                    <div className="flex flex-col h-fit gap-y-2">
                        <label className=" text-md font-medium">
                            Topic
                        </label>
                        <input 
                            type="text" 
                            id="topic" 
                            required
                            onChange={(e)=>inputChangeHandler(e)} 
                            className=" appearance-none bg-slate-300 text-gray-700 p-2 focus:outline-none focus:outline-gray-500 focus:bg-slate-50"/>
                    </div>
                    <div className="flex flex-col h-fit gap-y-2">
                        <label className=" text-md font-medium">
                            Description
                        </label>
                        <input 
                            type="text" 
                            id="description" 
                            required
                            onChange={(e)=>inputChangeHandler(e)} 
                            className=" appearance-none bg-slate-300 text-gray-700 p-2 focus:outline-none focus:outline-gray-500 focus:bg-slate-50"/>
                    </div>
                    <div className="flex flex-col h-fit gap-y-2">
                        <label className=" text-md font-medium">
                            Severity
                        </label>
                        <select 
                            id="Severity" 
                            required
                            onChange={(e)=>inputChangeHandler(e)} 
                            className="w-full bg-slate-300 border border-gray-200 text-gray-700 p-2 focus:outline-none focus:outline-gray-500 focus:bg-slate-50">
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                            <option>Urgent</option>
                        </select>
                    </div>
                    <div className="flex flex-col h-fit gap-y-2">
                        <label className=" text-md font-medium">
                        Type
                        </label>
                        <input 
                            type="text" 
                            id="type" 
                            required
                            onChange={(e)=>inputChangeHandler(e)} 
                            className=" appearance-none bg-slate-300 text-neutral-950 p-2 focus:outline-none focus:outline-gray-500 focus:bg-slate-50"/>
                    </div>
                    <div className="m-auto w-[50%]">
                        <button className="p-2 bg-neutral-600 w-full rounded-lg" type="submit">Create Support Agent</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateSupportTicket