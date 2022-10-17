import * as functions from 'firebase-functions'
import * as express from 'express'
import * as cors from 'cors'

import answer from './answer'
import csv from './csv'
import checkAnswer from './checkAnswer'

const mozambique = express()

mozambique.use(cors({ origin: true, credentials: true }))

mozambique.post('/answer', answer)
mozambique.get('/csv', csv)
mozambique.get('/check/:answerId', checkAnswer)

exports.mozambique = functions.https.onRequest(mozambique)
