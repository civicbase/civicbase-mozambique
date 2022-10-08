import { Question, Quadratic } from 'types.d'

export const getMostVoted = (results: Quadratic): Question | null => {
  let mostVoted: Question | null = null

  results.forEach(r => {
    if (!mostVoted) {
      mostVoted = r
    }

    if (r.vote > mostVoted.vote) {
      mostVoted = r
    }
  })

  return mostVoted
}
