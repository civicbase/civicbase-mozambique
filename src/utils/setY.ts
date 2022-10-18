import { getMostVoted } from './quadratic'

type Fields = {
  content: string
  treatment: string
  control: string
}
/**
 * 1. the Y on 4.15 referes ot 4.13(treatment) or 4.14(control)
 * 2. 4.16 = y if 415 === stay the same
 * @param getValues
 * @param fields
 * @returns
 */

export const getY = (getValues: any, fields: Fields) => {
  let y = 0
  const content = getValues(fields.content)

  if (content === 'Treatment - QVSR') {
    const quadratic = getValues(fields.treatment)
    const mostVoted = getMostVoted(quadratic)

    if (mostVoted) {
      const value = mostVoted.statement.match(/\d+/)

      if (value && value[0]) {
        y = Number(value[0])
      }
    }
  }

  if (content === 'Control - Price Slider') {
    const value = getValues(fields.control)
    y = Number(value)
  }

  return y
}
