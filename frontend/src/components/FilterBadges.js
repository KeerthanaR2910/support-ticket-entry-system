import FilterBadge from "./FilterBadge";

const FilterBadges = ({filters,setFilters}) => {
    return <div className="flex gap-2 p-2">
        {
            Object.keys(filters).map(key => <FilterBadge key={key} name={key} value={filters[key]} onClose={() => {
                setFilters({...filters, [key]: ""})
            }
            }/>)
        }
    </div>
}

export default FilterBadges