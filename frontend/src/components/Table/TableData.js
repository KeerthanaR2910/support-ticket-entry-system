import {Typography} from "@material-tailwind/react";

const TableData = ({value, classes}) => {
    return <td className={classes}>
        <Typography
            variant="small"
            color="blue-gray"
            className="font-normal"
        >
            {value}
        </Typography>
    </td>
}

export default TableData;