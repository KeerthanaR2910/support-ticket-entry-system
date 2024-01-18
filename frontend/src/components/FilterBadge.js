import { IoClose } from "react-icons/io5";


const FilterBadge = ({name, value, onClose}) => {
    if(value){
        return (
            <div className=" bg-slate-200 rounded-lg w-fit flex items-center p-2">
                {name}:{value}
                <button onClick={onClose} className="hover:text-white">
                    <IoClose />
                </button>
            </div>
        )
    }
}

export default FilterBadge