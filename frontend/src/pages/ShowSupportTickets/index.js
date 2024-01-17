import {Table} from "../../components/Table";
import { useState,useEffect } from "react"

const ShowSupportTicket = () => {
    const [rows,setRows] = useState([]);
    const [rowsCount,setRowsCount] = useState(10);
    const [sort, setSort] = useState({});
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
            filterable: false ,
            sort:{
                value: sort["dateCreated"],
                onSort: (sortValue) => {
                    setSort({"dateCreated": sortValue})
                    updateColumnAfterSorting("dateCreated",sortValue,columns,setColumns);

                }
            }
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
            headerName: "AssignedTo",
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
            filterable: false,
            sort:{
                value: sort["resolvedOn"],
                onSort: (sortValue) => {
                    setSort({"resolvedOn": sortValue})
                    updateColumnAfterSorting("resolvedOn",sortValue,columns,setColumns);
                }
            }
        },
    ]

    const [columns, setColumns] = useState(TABLE_HEAD)
    
    useEffect(() => {
        const sortParams = getSortQueryParam(sort)
        fetch(`http://localhost:8888/support-tickets?${sortParams}`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) =>  response.json())
            .then((responseJson) => {
                setRows(responseJson.data)
                setRowsCount(responseJson.totalCount);
            })
    },[sort])

    return (
        <div>
            <Table columns={columns} rows={rows}/>
        </div>
    )
}

const updateColumnAfterSorting = (sortField, sortValue, columns,setColumns) => {
    const filteredColumns = columns.map((column) => {
        if(sortField === column.field){
            return {
                ...column,
                sort:{
                    ...column.sort,
                    value: sortValue
                }
            }
        }else {
            return column
        }
    })
    setColumns(filteredColumns)
}

const getSortQueryParam = (sort) => {
    return Object.keys(sort).map((key) => {
        if(sort[key]) return `${key}+${sort[key]}`;
    })[0] ?? "";
}

export default ShowSupportTicket