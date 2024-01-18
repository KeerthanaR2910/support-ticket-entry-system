import { IoFunnelOutline, IoFunnel } from "react-icons/io5";
import {useState} from "react";

const Filter = ({value,onFilterApply}) => {
    const [open,setOpen] = useState(false)
    const [inputValue,setInputValue ]= useState(value ?? "");
    return (
      <div className="flex gap-2">
          <button onClick={() => setOpen(!open)}>
              {open ? <IoFunnel /> : <IoFunnelOutline  className={"hidden group-hover:block"}/>}
          </button>
        {open && 
        <div className="flex gap-1 w-fit relative left-0 z-100">
          <input 
            type={"text"} 
            className=" appearance-none focus:outline-none w-fit p-1" 
            value={inputValue} 
            onChange={(event) => setInputValue(event.target.value)} />
          <button onClick={() => {
            onFilterApply(inputValue);
            setInputValue("")
            setOpen(false);
          }} className="bg-slate-400 p-1 px-1.5 rounded-md text-slate-950">Apply</button>
        </div>
        }
    </div>
  )
}

export default Filter

