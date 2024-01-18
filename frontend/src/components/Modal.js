const Modal = ({message,handleCancelClick, handleOkClick}) => {
    return (
        <div className="flex h-full min-w-[50%] absolute top-0 left-[25%] w-fit z-1000 bg-transparent justify-center items-center" onClick={handleCancelClick}>
            <div className="h-auto min-h-fit min-w-[50%] w-fit bg-gray-600 text-neutral-200 rounded-2xl">
                <div className="p-5 flex w-full flex-col gap-2">
                    <p>{message}</p>
                    <div className="flex justify-end gap-4">
                        {handleCancelClick && <button className=" bg-blue-600 p-1 rounded-md  hover:bg-neutral-500 hover:outline-double" onClick={handleCancelClick}>Cancel</button>}
                        <button className=" bg-neutral-600 p-1 rounded-md hover:bg-blue-800 hover:outline-double" onClick={handleOkClick}>Ok</button>
                    </div>         
                </div>
            </div>
        </div>
    )
}

export default Modal