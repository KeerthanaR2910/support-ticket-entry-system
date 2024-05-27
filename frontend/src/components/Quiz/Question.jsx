import { useState } from "react"

const Question = ({question, choices,handleNextClick}) => {
    const [selectedChoice, setSelectedChoice] = useState("");

    const choiceSelectionHandler = (event) => {
        setSelectedChoice(event.target.value)
    }

    const onNext = () => {
        setSelectedChoice("")
        const point = choices[selectedChoice];
        handleNextClick(point);

    }
    return <div className="flex flex-col gap-3">
        {question}
        <select value={selectedChoice} onChange={choiceSelectionHandler} required className=" border-2">
            <option value="" disabled="disabled" selected={true}/>
            {Object.keys(choices).map((choice) => {
                return <option value={choice} key={choice}>
                    {choice}
                </option>
            })}
        </select>
        <button onClick={onNext} disabled={selectedChoice===""} className={selectedChoice==="" ?" bg-slate-100" :" bg-slate-400"}>Next</button>
    </div>
}

export default Question