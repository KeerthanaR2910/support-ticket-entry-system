import { Typography} from "@material-tailwind/react";
import { HiChevronUpDown,HiChevronDown,HiChevronUp } from "react-icons/hi2";
import Filter from "./Filter";

export function Table({columns, rows}) {
  return (
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {columns.map(({field,headerName, sortable,filterable,sort,filter}) => (
              <th
                key={field}
                className="border-gray-400 bg-gray-300 p-4 border-b group relative"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70 flex justify-between"
                >
                {headerName}
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
                </Typography>
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
              </tr>
            );
          })}
        </tbody>
      </table>
  );
}