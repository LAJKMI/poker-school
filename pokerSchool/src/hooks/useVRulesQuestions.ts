import { Question } from "../quizz/QuizzComp";
import useData from "./useData";


interface QuizzQuestions {
    id: string,
    quizQuestions: Question[]
}

const useVariantRulesQuestions = () => useData<QuizzQuestions>('quizzQuestions')

export default useVariantRulesQuestions