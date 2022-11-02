import { getMostVoted } from './quadratic'

type Fields = {
  content: string
  treatment: string
  control: string
}
/**
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
