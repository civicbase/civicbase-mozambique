import { db } from '../config/firebase'

const checkAnswer = (request: any, response: any) => {
  const { answerId } = request.params

  db.collection('mozambique')
    .where('id', '==', answerId)
    .get()
    .then((data: any) => {
      const answer: any = []

      data.forEach((doc: any) => {
        answer.push({
          ...(doc.data() as any),
          id: doc.id,
        })
      })

      return response.status(200).json(answer)
    })
    .catch((error: any) => {
      return response.status(500).json(error)
    })
}

export default checkAnswer
