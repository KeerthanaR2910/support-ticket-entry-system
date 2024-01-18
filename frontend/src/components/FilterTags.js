import FilterBadge from "./FilterBadge"

const FilterTags = ({filters, setFilters}) => {
    return(
        <div className="flex gap-2 p-2">
            {Object.keys(filters).map(key => {
                return <FilterBadge name={key} value={filters[key]} onClose={setFilters({...filters,[key]:""})}/>
            })}
        </div>
    )
}

export default FilterTags