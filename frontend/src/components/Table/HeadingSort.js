import {HiChevronDown, HiChevronUp, HiChevronUpDown} from "react-icons/hi2";

const HeadingSort = (sort) => {
    return <button className="hidden group-hover:block">
        {sort.value === "asc" ?
            (<HiChevronDown onClick={() => {
                sort.onSort("desc")
            }}/>) :
            (sort.value === "desc" ?
                (<HiChevronUp onClick={() => {
                    sort.onSort(undefined)
                }
                }/>) :
                (<HiChevronUpDown onClick={() => {
                    sort.onSort("asc")
                }}/>))}
    </button>;
}

export default HeadingSort