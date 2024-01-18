import {Card, CardFooter, Typography} from "@material-tailwind/react";
import { HiChevronUpDown,HiChevronDown,HiChevronUp } from "react-icons/hi2";
import { CiFilter } from "react-icons/ci";

export function Table({columns, rows}) {
  return (
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {columns.map(({field,headerName, sortable,filterable,sort}) => (
              <th
                key={field}
                className="border-gray-400 bg-gray-300 p-4 border-b group "
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
                          console.log("head.sort.onSort.desc",sort.value)
                          sort.onSort("desc")
                      }} />) :
                      (sort.value === "desc" ?
                          (<HiChevronUp onClick={() =>{
                              console.log("head.sort.onSort.undefined",sort.value)
                              sort.onSort(undefined)}
                          } />)  :
                          (<HiChevronUpDown onClick={() => {
                              console.log("head.sort.onSort.asc",sort.value)
                              sort.onSort("asc")
                          }} />) )}
                </button>}
                {filterable && <button className="hidden group-hover:block" onClick={() => {}}>
                    <CiFilter />
                </button>}
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