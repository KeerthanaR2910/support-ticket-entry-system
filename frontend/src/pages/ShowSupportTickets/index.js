import {Table} from "../../components/Table";
import {useEffect, useMemo, useState} from "react"
import {Card, CardFooter} from "@material-tailwind/react";
import PaginationBar from "../../components/PaginationBar";

const ShowSupportTicket = () => {
    const [rows, setRows] = useState([]);
    const [rowsCount, setRowsCount] = useState(10);
    const [sort, setSort] = useState({});
    const [page,setPage] = useState({
        page: 1,
        pageSize: 10
    })

    const getColumns = (sort) => {
        return [
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
                filterable: false,
                sort: {
                    value: sort["dateCreated"],
                    onSort: (sortValue) => {
                        setSort({"dateCreated": sortValue})
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
                sort: {
                    value: sort["resolvedOn"],
                    onSort: (sortValue) => {
                        setSort({ "resolvedOn": sortValue})
                    }
                }
            },
        ]
    }
    const columns = useMemo(() => getColumns(sort), [sort])

    useEffect(() => {
        const sortParams = getSortQueryParam(sort)
        const pageParams = getPageQueryParams(page);
        fetch(`http://localhost:8888/support-tickets?${pageParams}&${sortParams}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => response.json())
            .then((responseJson) => {
                setRows(responseJson.data)
                setRowsCount(responseJson.totalCount);
            })
    }, [sort,page])

    return (
        <div>
            <Card className="h-full w-full overflow-scroll p-2">
                <Table columns={columns} rows={rows}/>
                <CardFooter>
                    <PaginationBar page={page} totalRowsCount={rowsCount} setPage={setPage}/>
                </CardFooter>
            </Card>
        </div>
    )
}

const updateColumnAfterSorting = (sortField, sortValue, columns, setColumns) => {
    const filteredColumns = columns.map((column) => {
        if (sortField === column.field) {
            return {
                ...column,
                sort: {
                    ...column.sort,
                    value: sortValue
                }
            }
        } else {
            return column
        }
    })
    setColumns(filteredColumns)
}

const getSortQueryParam = (sort) => {
    const sortQueryString = Object.keys(sort).map((key) => {
        if (sort[key]) return `${key}:${sort[key]}`;
    }).join(",");
    return `sort=${encodeURIComponent(sortQueryString)}` ?? "";
}

const getPageQueryParams = (page) => {
    return `page=${page.page}&limit=${page.pageSize}` 
}

export default ShowSupportTicket