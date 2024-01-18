import {Typography} from "@material-tailwind/react";
import {GrFormNext, GrFormPrevious} from "react-icons/gr";

const PaginationBar = ({page: pageModel, totalRowsCount,setPage}) => {
    const totalPages = Math.round(totalRowsCount/pageModel.pageSize)
    const isFirst = pageModel.page === 1
    const isLast = pageModel.page === totalPages

    return (
        <div className="flex justify-between">
            <Typography>
                Page {pageModel.page} of {totalPages}
            </Typography>
            <div>
                <button disabled={isFirst} className="" onClick={() => {
                    setPage({
                        ...pageModel,
                        page: pageModel.page - 1

                    })
                }}>
                    <GrFormPrevious size={25}/>
                </button>
                <button  disabled={isLast} onClick={() => {
                    setPage({
                        ...pageModel,
                        page: pageModel.page + 1

                    })
                }}>
                    <GrFormNext size={25}/>
                </button>
            </div>
        </div>
    )
}

export default PaginationBar