import { Typography} from "@material-tailwind/react";
import { HiChevronUpDown,HiChevronDown,HiChevronUp } from "react-icons/hi2";
import Filter from "./Filter";
import resolveTicket from "../api/resolveTicket";

export function Table({columns, rows,updateResolveStatus}) {
    const onResolve = async (ticketId) => {
            resolveTicket(ticketId)
                .then((response) => {
                    console.log({response})
                    updateResolveStatus({
                        status: 'Success',
                        message: response
                    })
                })
                .catch((error) => {
                    console.log({error})
                    updateResolveStatus({
                        status: 'Error',
                        message: error.message
                    })
                })
        }
  return (
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {columns.map(({field,headerName, sortable,filterable,sort,filter}) => (
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
                {sortable && <button className="hidden group-hover:block">
                  {sort.value === "asc" ?
                      (<HiChevronDown onClick={() => {
                          sort.onSort("desc")
                      }} />) :
                      (sort.value === "desc" ?
                          (<HiChevronUp onClick={() =>{
                              sort.onSort(undefined)}
                          } />)  :
                          (<HiChevronUpDown onClick={() => {
                              sort.onSort("asc")
                          }} />) )}
                </button>}
                {filterable && <Filter {...filter}/>}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(({ _id,topic, description, dateCreated, severity,status,assignedTo, resolvedOn, type }, index) => {
            const isLast = index === rows.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b";

            return (
              <tr key={_id}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {topic}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {description}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {dateCreated}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                  >
                    {severity}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                  >
                    {type}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                  >
                    {assignedTo}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                  >
                    {status}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                  >
                    {resolvedOn}
                  </Typography>
                </td>
                  <td className={classes}>
                      {resolvedOn ? <button className="appearance-none border-y-white bg-neutral-400 text-neutral-800 p-1 rounded-md " disabled={true}><Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                      >Resolved
                          </Typography>
                      </button> :
                          <button className="appearance-none bg-blue-500 border-y-white hover:bg-blue-600 text-neutral-200 p-1 rounded-md"
                            onClick={async () => await onResolve(_id)}
                          ><Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                          >Resolve
                          </Typography>
                          </button>
                      }
                  </td>
              </tr>
            );
          })}
        </tbody>
      </table>
  );
}