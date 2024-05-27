import { useState } from "react"
import Question from "../../components/Quiz/Question";

const questions = [{
    question:"Favorite Company:",
    choices: {"Apple":5,"Amazon":10, "zoho":15}
},
    {
    question:"Ready to code?",
    choices: {"Yes":10,"No":0}
}]

const Quiz = () => {
    const [currentQuestionIndex,setCurrentQuestionIndex] = useState(0);
    const [points, setPoints] = useState(0);
    const [showTotalPoint,setShowTotalPoint] = useState(false)

    const handleNextClick = (point) => {
        setPoints(points => points+point);
        if(currentQuestionIndex !== questions.length -1){
            setCurrentQuestionIndex(currentQuestionIndex+1);
        }else{
            setShowTotalPoint(true)
        }
    }

    const handleClear = () =>{
        setCurrentQuestionIndex(0);
        setPoints(0)
        setShowTotalPoint(false)
    }

    return <div className="flex flex-col justify-center items-center h-screen gap-y-5">
            <span className="font-bold text-5xl">Quiz</span>
            {showTotalPoint ? <span>Total point is {points}</span> :
                <Question {...questions[currentQuestionIndex]} handleNextClick={handleNextClick}/>
            }
            <button onClick={handleClear} className={" bg-blue-400 p-2"}>Clear</button>
    </div>
}

export default Quiz


//  Favorite Company:

// Apple  - (5 points)
// Amazon - (10 points)
// Alphabet - (15 points)
// 2. Ready to code?

// Yes - (10 points)
// No - (0 points)
// 3.Favorite Place

// Iceland  - (5 points)
// Chennai  - (10 points)
// Tiruvandram  - (15 points)