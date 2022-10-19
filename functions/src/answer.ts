import * as functions from 'firebase-functions'
import { db } from '../config/firebase'

const answer = (request: any, response: any) => {
  const answer = {
    ...request.body,
    createdAt: new Date().toLocaleString(),
  }

  db.collection('mozambique')
    .add(answer)
    .then((doc: any) => response.status(201).json(doc.id))
    .catch((error: any) => {
      functions.logger.error('Create answer', error)
      return response.status(500).json(error)
    })
}

export default answer
