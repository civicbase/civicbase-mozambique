import { TranslationFunctions } from 'i18n/i18n-types'
import { Values } from 'transform'
import { getMostVoted } from './quadratic'

const ERROR = 37767

export const getSanitation = (values: Values, LL: TranslationFunctions) => {
  if (!values.step2?.sanitationType) {
    return null
  }

  switch (values.step2.sanitationType) {
    case LL.choices.sanitationType[0]():
      return 1
    case LL.choices.sanitationType[1]():
      return 2
    default:
      return ERROR
  }
}

export const getHighestVote = (content: string, step: any) => {
  if (content === 'Treatment - QVSR') {
    const mostVoted = getMostVoted(step)

    return mostVoted?.vote
  } else {
    return null
  }
}
export const getHighestValue = (content: string, step: any) => {
  if (content === 'Treatment - QVSR') {
    const mostVoted = getMostVoted(step)

    return mostVoted?.statement
  } else {
    return null
  }
}

export const getNeighborhood = (values: Values) => {
  if (!values.step2?.neighborhood) {
    return null
  }

  switch (values.step2.neighborhood) {
    case 'Pioneiros':
      return 1
    case 'Chaimiti':
      return 2
    case 'Esturro':
      return 3
    case 'Ponta Gea':
      return 4
    case 'Chipangara':
      return 5
    case 'Matacuane':
      return 6
    case 'Macurungo':
      return 7
    case 'Macuti':
      return 8
    case 'Munhava Central':
      return 9

    default:
      return ERROR
  }
}

export const getDwelling = (values: Values, LL: TranslationFunctions) => {
  if (!values.step2?.dwellingType) {
    return null
  }

  switch (values.step2.dwellingType) {
    case LL.choices.dwellingType[0]():
      return 1
    case LL.choices.dwellingType[1]():
      return 2
    case LL.choices.dwellingType[2]():
      return 3
    case LL.choices.dwellingType[3]():
      return 4

    default:
      return ERROR
  }
}

export const get47 = (values: Values, LL: TranslationFunctions) => {
  if (!values.step3?.compare) {
    return null
  }

  switch (values.step3.compare) {
    case LL.choices.compare[0]():
      return 1
    case LL.choices.compare[1]():
      return 0
    case LL.choices.compare[2]():
      return -1

    default:
      return ERROR
  }
}

export const get411 = (values: Values, LL: TranslationFunctions) => {
  if (!values.step5?.relevantInformation) {
    return null
  }

  switch (values.step5.relevantInformation) {
    case LL.choices.importance[0]():
      return 1
    case LL.choices.importance[1]():
      return 2
    case LL.choices.importance[2]():
      return 3
    case LL.choices.importance[3]():
      return 4
    default:
      return ERROR
  }
}

export const getLikely = (field: any, LL: TranslationFunctions) => {
  if (!field) {
    return null
  }

  switch (field) {
    case LL.choices.likely[0]():
      return 1
    case LL.choices.likely[1]():
      return 2
    case LL.choices.likely[2]():
      return 3
    case LL.choices.likely[3]():
      return 4

    default:
      return ERROR
  }
}

export const get413 = (values: Values, LL: TranslationFunctions) => {
  if (values.step6.content === 'Treatment - QVSR') {
    return values.step6.QVSR
  } else {
    return null
  }
}

export const get414 = (values: Values, LL: TranslationFunctions) => {
  if (values.step6.content === 'Control - Price Slider') {
    return values.step6.amountPreference
  } else {
    return null
  }
}

// 415
export const getRevise = (field: any, LL: TranslationFunctions) => {
  if (!field) {
    return null
  }

  switch (field) {
    case LL.choices.revise[0]():
      return 1
    case LL.choices.revise[1]():
      return 0
    case LL.choices.revise[2]():
      return -1

    default:
      return ERROR
  }
}

export const get417 = (values: Values, LL: TranslationFunctions) => {
  if (values.step8.content === 'Treatment - QVSR') {
    return values.step8.QVSR
  } else {
    return null
  }
}

export const get418 = (values: Values, LL: TranslationFunctions) => {
  if (values.step8.content === 'Control - Price Slider') {
    return values.step8.pricePreference
  } else {
    return null
  }
}

export const getYesNo = (field: string, LL: TranslationFunctions) => {
  if (!field) {
    return null
  }

  switch (field) {
    case LL.choices.yesNo[0]():
      return 1
    case LL.choices.yesNo[1]():
      return 0
    default:
      return null
  }
}

export const getMonthYear = (month?: string, year?: string) => {
  if (!month && !year) {
    return null
  }

  return `${month} - ${year}`
}

export const getServiceProvider = (field: any, LL: TranslationFunctions) => {
  const arr = []
  if (!field) {
    return null
  }

  if (field[LL.choices.serviceProvider[0]()]) {
    arr.push('1')
  }

  if (field[LL.choices.serviceProvider[1]()]) {
    arr.push('2')
  }

  if (field[LL.choices.serviceProvider[2]()]) {
    arr.push('3')
  }

  if (field[LL.choices.serviceProvider[3]()]) {
    arr.push('4')
  }

  if (field[LL.choices.serviceProvider[4]()]) {
    arr.push('5')
  }

  if (field[LL.choices.serviceProvider[5]()]) {
    arr.push('6')
  }

  return arr
}

export const get430 = (values: Values, LL: TranslationFunctions) => {
  if (!values.step10?.SASBNotContactedReasons) {
    return null
  }
}
export const get431 = (values: Values, LL: TranslationFunctions) => {
  if (!values.step10?.serviceProvider.service) {
    return null
  }

  switch (values.step10?.serviceProvider.service) {
    case LL.choices[431][0]():
      return 1
    case LL.choices[431][1]():
      return 2
    case LL.choices[431][2]():
      return 3

    default:
      return ERROR
  }
}

export const getSatisfactionLevel = (field: any, LL: TranslationFunctions) => {
  if (!field) {
    return null
  }

  switch (field) {
    case LL.choices.satisfactionLevel[0]():
      return 1
    case LL.choices.satisfactionLevel[1]():
      return 2
    case LL.choices.satisfactionLevel[2]():
      return 3
    case LL.choices.satisfactionLevel[3]():
      return 4

    default:
      return ERROR
  }
}

export const getSatisfaction = (field: any, LL: TranslationFunctions) => {
  if (!field) {
    return null
  }

  switch (field) {
    case LL.choices.satisfaction[0]():
      return 1
    case LL.choices.satisfaction[1]():
      return 2
    case LL.choices.satisfaction[2]():
      return 3
    case LL.choices.satisfaction[3]():
      return 99

    default:
      return ERROR
  }
}

export const getSatisfy = (field: any, LL: TranslationFunctions) => {
  if (!field) {
    return null
  }

  switch (field) {
    case LL.choices.satisfy[0]():
      return 1
    case LL.choices.satisfy[1]():
      return 2
    case LL.choices.satisfy[2]():
      return 3
    case LL.choices.satisfy[3]():
      return 4

    default:
      return ERROR
  }
}

export const get447 = (values: Values, LL: TranslationFunctions) => {
  if (!values.step13?.satisfaction.SASBCustomerService) {
    return null
  }

  switch (values.step13.satisfaction.SASBCustomerService) {
    case LL.choices.satisfy[0]():
      return 1
    case LL.choices.satisfy[1]():
      return 2
    case LL.choices.satisfy[2]():
      return 3
    case LL.choices.satisfy[3]():
      return 4
    case LL.choices.notAplicable2():
      return 97

    default:
      return ERROR
  }
}

export const get446 = (values: Values, LL: TranslationFunctions) => {
  if (!values.step13?.satisfaction.qualityFecalSludgeLast6Months) {
    return null
  }

  switch (values.step13?.satisfaction.qualityFecalSludgeLast6Months) {
    case LL.choices.satisfaction[0]():
      return 1
    case LL.choices.satisfaction[1]():
      return 2
    case LL.choices.satisfaction[2]():
      return 3
    case LL.choices.satisfaction[3]():
      return 99
    case LL.choices.notAplicable():
      return 97

    default:
      return ERROR
  }
}

const getRelationship = (relationship: string | null, LL: TranslationFunctions) => {
  switch (relationship) {
    case LL.choices.relationship[0]():
      return 1
    case LL.choices.relationship[1]():
      return 2
    case LL.choices.relationship[2]():
      return 3
    case LL.choices.relationship[3]():
      return 4
    case LL.choices.relationship[4]():
      return 5

    default:
      return ERROR
  }
}

export const get452 = (values: Values, LL: TranslationFunctions) => {
  if (values.step14.notSharing) {
    return 'not sharing'
  }
  return values.step14.share?.map((s) => ({
    ...s,
    relationship: getRelationship(s.relationship, LL),
  }))
}

export const getProblems = (field: any, LL: TranslationFunctions) => {
  if (!field) {
    return null
  }

  switch (field) {
    case LL.choices.problems[0]():
      return 1
    case LL.choices.problems[1]():
      return 2
    case LL.choices.problems[2]():
      return 3
    case LL.choices.problems[3]():
      return 4

    default:
      return ERROR
  }
}
export const get510 = (values: Values, LL: TranslationFunctions) => {
  if (!values.step17?.problem) {
    return null
  }

  switch (values.step17?.problem) {
    case LL.choices[510][0]():
      return 1
    case LL.choices[510][1]():
      return 2
    case LL.choices[510][2]():
      return 3
    case LL.choices[510][3]():
      return 4
    case LL.choices[510][4]():
      return 5
    case LL.choices[510][5]():
      return 6
    case LL.choices[510][6]():
      return 7
    case LL.choices[510][7]():
      return 8

    default:
      return ERROR
  }
}

export const get513 = (values: Values, LL: TranslationFunctions) => {
  // TODO
}

export const getHowLong = (field: any, LL: TranslationFunctions) => {
  if (!field) {
    return null
  }

  switch (field) {
    case LL.choices.howLong[0]():
      return 1
    case LL.choices.howLong[1]():
      return 2
    case LL.choices.howLong[2]():
      return 3
    case LL.choices.howLong[3]():
      return 4

    default:
      return ERROR
  }
}

export const get614 = (values: Values, LL: TranslationFunctions) => {
  if (!values.step21?.contacted?.problem) {
    return null
  }

  switch (values.step21?.contacted?.problem) {
    case LL.choices[614][0]():
      return 1
    case LL.choices[614][1]():
      return 2
    case LL.choices[614][2]():
      return 3
    case LL.choices[614][3]():
      return 4
    case LL.choices[614][4]():
      return 5
    case LL.choices[614][5]():
      return 6

    default:
      return ERROR
  }
}
export const get617 = (values: Values, LL: TranslationFunctions) => {
  // TODO
}

export const get517 = (values: Values, LL: TranslationFunctions) => {
  if (!values.step17?.anotherEntity) {
    return null
  }

  switch (values.step17.anotherEntity) {
    case LL.choices.entity[0]():
      return 0
    case LL.choices.entity[1]():
      return 1

    default:
      return ERROR
  }
}

export const get527 = (values: Values, LL: TranslationFunctions) => {
  if (!values.step19?.dealthWith) {
    return null
  }

  switch (values.step19?.dealthWith) {
    case LL.choices.entity[0]():
      return 0
    case LL.choices.entity[1]():
      return 1

    default:
      return ERROR
  }
}

export const get621 = (values: Values, LL: TranslationFunctions) => {
  if (!values.step21?.anotherEntity) {
    return null
  }

  switch (values.step21.anotherEntity) {
    case LL.choices.entity[0]():
      return 0
    case LL.choices.entity[1]():
      return 1

    default:
      return ERROR
  }
}
