import client from './api'
import ShortUniqueId from 'short-unique-id'

const uid = new ShortUniqueId({ length: 16 })

export const createAnswer = (answer: any) => {
  return client('createIndiaAnswer', {
    body: answer,
  })
}
