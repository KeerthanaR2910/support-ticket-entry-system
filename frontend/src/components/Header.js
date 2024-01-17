import { Link } from "react-router-dom"

const Header = () => {
    return (
    <div className="m-4 flex flex-col">
        <p className=" text-3xl font-extrabold text-center ">Support Ticket Entry System</p>
        <div className="flex flex-col md:flex-row justify-end gap-2 m-4">
            <Link to="/new-support-agent" className=" bg-neutral-500 p-2 w-fit rounded-md">Create new Support Agent</Link>
            <Link to="/new-support-ticket" className=" bg-neutral-500 p-2 w-fit rounded-md">Create new Support Ticket</Link>
            <Link to="/" className=" bg-neutral-500 p-2 w-fit rounded-md">Show Support Tickets</Link>
        </div>
    </div>
    )
}

export default Header