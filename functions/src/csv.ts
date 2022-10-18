import { db } from '../config/firebase'
import * as json2csv from 'json2csv'
// import * as fs from 'fs'

const getCsv = (request: any, response: any) => {
  const fields: any = [
    { value: 'id' },
    { value: 'language' },
    { value: 'geolocation' },
    { value: 'startAt' },
    { value: 'finishAt' },
    { value: 'section4.startAt', label: 'Sec. 4 start' },
    { value: 'section4.finishAt', label: 'Sec. 4 finish' },
    { value: 'section5.startAt', label: 'Sec. 5 start' },
    { value: 'section5.finishAt', label: 'Sec. 5 finish' },
    { value: 'section6.startAt', label: 'Sec. 6 start' },
    { value: 'section6.finishAt', label: 'Sec. 6 finish' },
    { value: '42' },
    { value: '43' },
    { value: '44' },
    { value: '45' },
    { value: '46' },
    { value: '47' },
    { value: '48' },
    { value: 'page5' },
    { value: '411' },
    { value: '412' },
    { value: 'page7' },
    { value: '413' },
    { value: '414' },
    { value: '415' },
    { value: '416' },
    { value: 'page9' },
    { value: '417' },
    { value: '418' },
    { value: '419' },
    { value: '420' },
    { value: '421' },
    { value: '422' },
    { value: '423' },
    { value: '424' },
    { value: '425' },
    { value: '426' },
    { value: '427' },
    { value: '428' },
    { value: '429' },
    { value: '430' },
    { value: '431' },
    { value: '432' },
    { value: '433' },
    { value: '435' },
    { value: '436' },
    { value: '437' },
    { value: '438' },
    { value: 'page15' },
    { value: '441' },
    { value: '442' },
    { value: '443' },
    { value: '444' },
    { value: '445' },
    { value: '446' },
    { value: '447' },
    { value: '448' },
    { value: '449' },
    { value: '450' },
    { value: '451' },
    { value: '452' },
    { value: '453' },
    { value: '454' },
    { value: '52' },
    { value: '53' },
    { value: '54' },
    { value: '55' },
    { value: '56' },
    { value: '57' },
    { value: '58' },
    { value: '59' },
    { value: '510' },
    { value: '511' },
    { value: '512' },
    { value: '513' },
    { value: '514' },
    { value: '515' },
    { value: '516' },
    { value: '517' },
    { value: '518' },
    { value: '519' },
    { value: '520' },
    { value: '521' },
    { value: '522' },
    { value: '523' },
    { value: '524' },
    { value: '525' },
    { value: '526' },
    { value: '527' },
    { value: '528' },
    { value: '529' },
    { value: '530' },
    { value: '531' },
    { value: '62' },
    { value: '63' },
    { value: '64' },
    { value: '65' },
    { value: '66' },
    { value: '67' },
    { value: '68' },
    { value: '69' },
    { value: '610' },
    { value: '611' },
    { value: '612' },
    { value: '613' },
    { value: '614' },
    { value: '615' },
    { value: '616' },
    { value: '617' },
    { value: '618' },
    { value: '619' },
    { value: '620' },
    { value: '621' },
    { value: '622' },
    { value: '623' },
    { value: '624' },
    { value: '625' },
  ]

  db.collection('mozambique')
    .get()
    .then((data) => {
      const answers: any[] = []

      data.forEach((doc) => {
        answers.push({
          ...(doc.data() as any),
        })
      })

      const csv = new json2csv.Parser({ fields })
      const answerCSV = csv.parse(answers)

      response.attachment('mozambique.csv')
      response.status(200).send(answerCSV)

      // fs.writeFile('data.csv', csv.parse(answers), (err) => {
      //   if (err) {
      //     throw err
      //   }
      // })

      // response.send(Buffer.from(fs))

      // response.status(200).json(answers)
    })
}

export default getCsv
