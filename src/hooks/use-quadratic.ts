import { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'

export type Question = {
  id: string
  statement: string
  vote: number
  credits: number
  order?: number
}

const useQuadratic = (name: string, credits: number) => {
  const { watch, setValue, getValues } = useFormContext()
  const [availableCredits, setAvailableCredits] = useState(credits || 0)

  const questions = watch(name)

  const canVote = (index: number, vote: number) => {
    let simulatedCost = 0

    questions?.forEach((q: Question, i: number) => {
      if (i === index) {
        simulatedCost += Math.pow(q.vote + vote, 2)
      } else {
        simulatedCost += q.credits
      }
    })

    if (!credits) {
      return false
    }

    return simulatedCost <= credits
  }

  const vote = (index: number, vote: number) => {
    if (canVote(index, vote)) {
      const newQuestion = questions?.map((question: Question, i: number) => {
        return index === i
          ? {
              ...question,
              vote: question.vote + vote,
              credits: Math.pow(question.vote + vote, 2),
            }
          : question
      })

      setValue(name, newQuestion)
    }
  }

  //   Update available credits
  useEffect(() => {
    const totalCost = questions?.reduce((cost: number, question: Question) => cost + Math.pow(question.vote, 2), 0)

    if (credits) {
      setAvailableCredits(credits - totalCost)
    }
  }, [questions, credits])

  return {
    canVote,
    vote,
    questions,
    availableCredits,
  }
}

export default useQuadratic
