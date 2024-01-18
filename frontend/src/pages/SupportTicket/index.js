import { DataGrid, getGridStringOperators } from "@mui/x-data-grid"
import { useState,useEffect } from "react"
import { useSearchParams } from "react-router-dom"

const ShowSupportTicket = () => {
    const[searchParams, setSearchParams ] = useSearchParams();
    const [rows, setRows] = useState([]);
    const [rowCount, setRowCount] = useState(50);
    const [paginationModel, setPaginationModel] = useState({
        page: searchParams.get("page") - 1 || 0,
        pageSize: searchParams.get("limit") || 10,
    });

    useEffect(() => {
        const queryParams = window.location.search
        fetch(`http://localhost:8888/support-tickets${queryParams}`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) =>  response.json())
            .then((responseJson) => {
                setRows(responseJson.data)
                setRowCount(responseJson.totalCount);
            })
    },[searchParams])

    const columns = [
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
            width: 200
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
            filterOperators: getGridStringOperators().filter(
                (operator) => operator.value === 'equals',
            ),
        },
        {
            field: "type",
            headerName: "Type",
            sortable: false,
            filterable: true,
            filterOperators: getGridStringOperators().filter(
                (operator) => operator.value === 'equals',
            ),
        },
        {
            field: "assignedTo",
            headerName: "Assigned To",
            sortable: false,
            filterable: true,
            filterOperators: getGridStringOperators().filter(
                (operator) => operator.value === 'equals',
            ),
        },
        {
            field: "status",
            headerName: "Status",
            type: "singleSelect",
            sortable: false,
            filterable: true,
            valueOptions: ['New', 'Assigned', 'Resolved'],
            filterOperators: getGridStringOperators().filter(
                (operator) => operator.value === 'equals',
            ),
        },
        {
            field: "resolvedOn",
            headerName: "Resolved On",
            sortable: true,
            filterable: false 
        },
    ]
    const onSortModelChange = (sortModel) => {
        const sortParams = sortModel.map(({field, sort}) => {
            return `${field}+${sort}`
        }).join(",")
        if (sortParams !== "") {
            const updatedSearchParams = {
                ...Object.fromEntries(searchParams.entries()),
                "sort": sortParams,
            }
            setSearchParams(updatedSearchParams)
        } else {
            const {sort, ...rest} = searchParams
            setSearchParams(rest)
        }
    };
    const onPaginationModelChange = (paginationModel) => {
        setPaginationModel(paginationModel)
        const updatedSearchParams = {
            ...Object.fromEntries(searchParams.entries()),
            "page": paginationModel.page+1,
            "limit": paginationModel.pageSize
        }
        setSearchParams(updatedSearchParams);
    };
    const onFilterModelChange = (filterModel) => {
        console.log(filterModel)
    }
    return (
        <div>
            SupportTicket
            <div>Create new SupportTicket</div>
            <DataGrid 
                rows={rows}
                getRowId={(row) => row._id}
                columns={columns}
                pagination
                rowCount={rowCount}
                pageSizeOptions={[5]}
                paginationModel={paginationModel}
                paginationMode="server"
                onPaginationModelChange={onPaginationModelChange}
                onSortModelChange={onSortModelChange}
                onFilterModelChange={onFilterModelChange}
                disableColumnSelector
            />
        </div>
    )   
}


export default ShowSupportTicket