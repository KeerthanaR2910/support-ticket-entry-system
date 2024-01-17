import { Card, Typography } from "@material-tailwind/react";
 
const TABLE_HEAD = [
    {
        field: "topic",
        headerName: "Topic",
        sortable: false,
        filterable: false 
    },
    {
        field: "description",
        headerName: "Description",
        sortable: false,
        filterable: false,
    },
    {
        field: "dateCreated",
        headerName: "Date created",
        sortable: true,
        filterable: false 
    },
    {
        field: "severity",
        headerName: "Severity",
        sortable: false,
        filterable: true,
    },
    {
        field: "type",
        headerName: "Type",
        sortable: false,
        filterable: true,
    },
    {
        field: "assignedTo",
        headerName: "Assigned To",
        sortable: false,
        filterable: true,
    },
    {
        field: "status",
        headerName: "Status",
        sortable: false,
        filterable: true
    },
    {
        field: "resolvedOn",
        headerName: "Resolved On",
        sortable: true,
        filterable: false 
    },
]
// const TABLE_HEAD = ["Topic", "description", "dateCreated", "severity","type","assignedTo","status","resolved on"];
const ROWS = [
  {
    "_id": "65a6ae33d5b37fbc98c25ed4",
    "topic": "newdata2",
    "description": "description",
    "dateCreated": "2024-01-16T16:26:27.530Z",
    "severity": "severity2",
    "type": "type2",
    "assignedTo": "65a6abf815f7e305fedaea88",
    "status": "New",
  },
  {
    "_id": "65a6aeb59196ed829dcb81f1",
    "topic": "newdata4",
    "description": "description",
    "dateCreated": "2024-01-16T16:28:37.635Z",
    "severity": "severity2",
    "type": "type2",
    "assignedTo": "65a6aeab9196ed829dcb81ed",
    "status": "New",
  },
  {
    "_id": "65a6ae25d5b37fbc98c25ed0",
    "topic": "newdata",
    "description": "description",
    "dateCreated": "2024-01-16T16:26:13.080Z",
    "severity": "severity2",
    "type": "type2",
    "assignedTo": "65a6812a6a7638940da64e4f",
    "status": "New",
  },
  {
    "_id": "65a6ae609196ed829dcb81e9",
    "topic": "newdata3",
    "description": "description",
    "dateCreated": "2024-01-16T16:27:12.782Z",
    "severity": "severity2",
    "type": "type2",
    "assignedTo": "65a6812a6a7638940da64e4f",
    "status": "New",
  }
]

export function Table() {
  return (
    <Card className="h-full w-full overflow-scroll p-2">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head.field}
                className="border-gray-400 bg-gray-300 p-4 border-b group "
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70 flex justify-between"
                >
                {head.headerName}
                {head.sortable && <button className="hidden group-hover:block">
                    Sort
                </button>}
                {head.filterable && <button className="hidden group-hover:block">
                    Filter
                </button>}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ROWS.map(({ _id,topic, description, dateCreated, severity,status,assignedTo, resolvedOn, type }, index) => {
            const isLast = index === ROWS.length - 1;
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
    </Card>
  );
}