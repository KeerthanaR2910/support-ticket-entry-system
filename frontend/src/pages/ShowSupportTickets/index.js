import {Table} from "../../components/Table/Table";
import {useEffect, useMemo, useState} from "react"
import {Card, CardFooter, CardHeader} from "@material-tailwind/react";
import PaginationBar from "../../components/PaginationBar";
import {getPageQueryParams, getSortQueryParams,getFilterParams} from "../../utils/helper";
import FilterBadges from "../../components/FilterBadges";

const ShowSupportTicket = () => {
    const [rows, setRows] = useState([]);
    const [rowsCount, setRowsCount] = useState(10);
    const [sort, setSort] = useState({});
    const [filters, setFilters] = useState({});
    const [page,setPage] = useState({
        page: 1,
        pageSize: 10
    })
    const [resolve, setResolvedResponse] = useState(false)
    const handleResolve = () => setResolvedResponse(!resolve)

    const getColumns = (sort,filters) => {
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
                filter: {
                    value: filters["severity"],
                    onFilterApply: (filterValue) => {
                        setFilters({...filters, "severity": filterValue})
                    }
                }
            },
            {
                field: "type",
                headerName: "Type",
                sortable: false,
                filterable: true,
                filter: {
                    value: filters["type"],
                    onFilterApply: (filterValue) => {
                        setFilters({...filters, "type": filterValue})
                    }
                }
            },
            {
                field: "assignedTo",
                headerName: "Assigned To",
                sortable: false,
                filterable: true,
                filter: {
                    value: filters["assignedTo"],
                    onFilterApply: (filterValue) => {
                        setFilters({...filters, "assignedTo": filterValue})
                    }
                }
            },
            {
                field: "status",
                headerName: "Status",
                sortable: false,
                filterable: true,
                filter: {
                    value: filters["status"],
                    onFilterApply: (filterValue) => {
                        setFilters({...filters, "status": filterValue})
                    }
                }
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
            {
                field: "resolve",
                headerName: "Resolve"
            },
        ]
    }

    const columns = useMemo(() => getColumns(sort,filters), [sort,filters])

    useEffect(() => {
        const sortParams = getSortQueryParams(sort)
        const pageParams = getPageQueryParams(page)
        const filterParams = getFilterParams(filters)
        fetch(`http://localhost:8888/support-tickets?${pageParams}${sortParams}&${filterParams}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => response.json())
            .then((responseJson) => {
                setRows(responseJson.data)
                setRowsCount(responseJson.totalCount);
            })
    }, [sort,page,filters,resolve])


    useEffect(()=> {setPage({
        page: 1,
        pageSize: 10
    })},[filters])

    return (
        <div>
            <Card className="h-full w-full overflow-scroll p-2">
                <CardHeader>
                    <FilterBadges filters={filters} setFilters={setFilters} />
                </CardHeader>
                <Table columns={columns} rows={rows} handleResolve={handleResolve}/>
                <CardFooter>
                    <PaginationBar page={page} totalRowsCount={rowsCount} setPage={setPage}/>
                </CardFooter>
            </Card>
        </div>
    )
}

export default ShowSupportTicket