import { Question, Quadratic } from 'types.d'

export const getMostVoted = (results: Quadratic): Question | null => {
  let mostVoted: Question | null = null

  if (!results) {
    return null
  }

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

export const getMostNegativeVoted = (results: Quadratic): Question | null => {
  let mostVoted: Question | null = null

  if (!results) {
    return null
  }

  results.forEach(r => {
    if (r.vote < 0) {
      if (!mostVoted) {
        mostVoted = r
      } else {
        if (r.vote < mostVoted.vote) {
          mostVoted = r
        }
      }
    }
  })

  return mostVoted
}

export const hasVoted = (results: Quadratic): boolean => {
  let hasVoted = false

  if (!results) {
    return false
  }

  results.forEach(r => {
    if (r.vote !== 0) {
      hasVoted = true
    }
  })

  return hasVoted
}
