import {Typography} from "@material-tailwind/react";
import HeadingFilter from "./HeadingFilter";
import resolveTicket from "../../api/resolveTicket";
import {toast} from 'react-toastify';
import HeadingSort from "./HeadingSort";
import TableData from "./TableData";

export function Table({columns, rows, handleResolve}) {
    const columnKeys = [];
    columns.forEach((column) => column.field!=='resolve' && columnKeys.push(column.field))
    const onResolve = (ticketId) => {
        resolveTicket(ticketId)
            .then(() => {
                handleResolve()
                toast.success(`You have sucessfully successfully Resolved Ticket with id ${ticketId}`, {theme: "dark"})
            })
            .catch(() => {
                toast.success(`Error occured while resolving ticket with id ${ticketId}`, {theme: "dark"})
            })
    }
    return (
        <table className="w-full min-w-max table-auto text-left">
            <thead>
            <tr>
                {columns.map(({field, headerName, sortable, filterable, sort, filter}) => (
                    <th
                        key={field}
                        className="border-gray-400 bg-gray-300 p-4 border-b group"
                    >
                        <div className="flex items-center justify-between font-normal opacity-70">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="leading-none opacity-70"
                            >
                                {headerName}
                            </Typography>
                            {sortable && <HeadingSort {...sort}/>}
                            {filterable && <HeadingFilter {...filter}/>}
                        </div>
                    </th>
                ))}
            </tr>
            </thead>
            <tbody>
            {rows.map((data, index) => {
                const isLast = index === rows.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b";
                const resolveClasses = data.resolvedOn ? "appearance-none border-y-white p-1 rounded-md  bg-neutral-400 text-neutral-800 w-20" : "appearance-none border-y-white p-1 rounded-md bg-blue-500 text-neutral-200 w-20"
                return (
                    <tr key={data._id}>
                        {columnKeys.map((column) =>  <TableData classes={classes} value={data[column]}/>)}
                        <td className={classes}>
                            <button
                                className={resolveClasses}
                                disabled={data.resolvedOn}
                                onClick={async () => await onResolve(data._id)}
                            >
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    {data.resolvedOn ? "Resolved" : "Resolve"}
                                </Typography>
                            </button>
                        </td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}