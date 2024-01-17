const Modal = ({message,handleCancelClick, handleOkClick}) => {
    return (
        <div className="flex h-full min-w-[50%] w-fit z-1000 absolute top-0 bg-transparent justify-center items-center" onClick={handleCancelClick}>
            <div className="h-[20%] min-h-fit min-w-[50%] w-fit bg-gray-600 text-neutral-200 rounded-2xl">
                <div className="p-5 flex w-full flex-col">
                    <p>{message}</p>
                    <div className="flex justify-end gap-4">
                        <button className=" bg-blue-600 p-2 rounded-md hover:bg-blue-800 hover:outline-double" onClick={handleCancelClick}>Cancel</button>
                        <button className=" bg-neutral-600 p-2 rounded-md hover:bg-neutral-500 hover:outline-double" onClick={handleOkClick}>Ok</button>
                    </div>         
                </div>
            </div>
        </div>
    )
}

export default Modal