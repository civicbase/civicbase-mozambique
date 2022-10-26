import { TranslationFunctions } from 'i18n/i18n-types'
import { FormValues } from 'types'
import {
  get411,
  get413,
  get414,
  get417,
  get418,
  get430,
  get431,
  get446,
  get447,
  get452,
  get47,
  get510,
  get513,
  get517,
  get527,
  get614,
  get617,
  get621,
  getDwelling,
  getHowLong,
  getLikely,
  getMonthYear,
  getNeighborhood,
  getProblems,
  getRevise,
  getSanitation,
  getSatisfaction,
  getSatisfactionLevel,
  getSatisfy,
  getServiceProvider,
  getYesNo,
} from 'utils/answer'

export interface Values extends FormValues {
  geolocation: {
    latitude?: number
    longitude?: number
  }
}

export const transform = (values: any, LL: TranslationFunctions) => {
  const result = {
    startAt: values.startAt,
    finishAt: values.finishAt,
    geolocation: values.geolocation,
    id: values.step1.uniqueId,
    language: values.step1.language,
    section4: values.section4,
    section5: values.section5,
    section6: values.section6,
    // page2
    42: getNeighborhood(values),
    43: getSanitation(values, LL),
    44: getDwelling(values, LL),
    // page3
    45: getYesNo(values.step3?.waterBill.share, LL),
    46: values.step3?.waterBill.shareNumber,
    47: get47(values, LL),
    // page4
    48: values.step4,
    // page5
    page5: values.step5?.content,
    411: get411(values, LL),
    412: getLikely(values.step5?.shareInformation, LL),
    //page6
    page6: values.step6?.content,
    413: get413(values, LL),
    414: get414(values, LL),
    // page7
    415: getRevise(values.step7?.revisePrice, LL),
    416: values.step7?.willingPay,
    // page8
    page8: values.step8?.content,
    417: get417(values, LL),
    418: get418(values, LL),
    // page9
    419: getRevise(values.step9?.revisePrice, LL),
    420: values.step9?.willingPay,
    // page10
    425: getYesNo(values.step10?.emptiedSepticTank, LL),
    426: getYesNo(values.step10?.serviceProvider.contacted, LL),
    427: getMonthYear(values.step10?.serviceProvider.contactedMonth, values.step10?.serviceProvider.contactedYear),
    428: getServiceProvider(values.step10?.serviceProvider.who, LL),
    429: values.step10?.serviceProvider.other,
    430: get430(values, LL),
    431: get431(values, LL),
    432: getYesNo(values.step10?.serviceProvider.paid, LL),
    433: values.step10?.serviceProvider.howMuch,
    // page11
    434: values.step11.pricePreference,
    // page12
    page12: values.step12?.content,
    // page13
    441: getSatisfactionLevel(values.step13?.satisfaction.sewer, LL),
    442: getSatisfaction(values.step13?.satisfaction.sewerlast6Months, LL),
    443: getSatisfy(values.step13?.satisfaction.qualityDrainage, LL),
    444: getSatisfaction(values.step13?.satisfaction.qualityDrainageLast6Months, LL),
    445: getSatisfactionLevel(values.step13?.satisfaction.SASBFecalSludgeDeslidgingService, LL),
    446: get446(values, LL),
    447: get447(values, LL),
    448: getSatisfaction(values.step13?.satisfaction.SASBCustomerServiceLast6Months, LL),
    449: getSatisfactionLevel(values.step13?.satisfaction.beiraMunicipality, LL),
    450: getSatisfaction(values.step13?.satisfaction.beiraMunicipalityLast6Months, LL),
    // page14
    451: getLikely(values.step14?.SASBSatisfaction, LL),
    452: get452(values, LL),
    // page15
    453: getYesNo(values.step15?.shareSASBSatisfaction, LL),
    454: getYesNo(values.step15?.knowHowContactSASB, LL),
    // page16
    54: getProblems(values.step16?.oftenSewerProblem, LL),
    55: getSatisfaction(values.step16?.sewerReductions, LL),
    56: getProblems(values.step16?.oftenBadSmellDwellingCompound, LL),
    57: getSatisfaction(values.step16?.sewerBadSmellDwellingCompoundReductions, LL),
    // page17
    58: getYesNo(values.step17?.contacted, LL),
    59: getMonthYear(values.step17?.contactedMonth, values.step17?.contactedYear),
    510: get510(values, LL),
    511: getServiceProvider(values.step17?.contactedWho, LL),
    512: values.step17?.contactedOther,
    513: get513(values, LL),
    514: getYesNo(values.step17?.treatFairPolite, LL),
    515: getYesNo(values.step17?.moreThanOneCall, LL),
    516: getYesNo(values.step17?.bribe, LL),
    517: get517(values, LL),
    518: getYesNo(values.step17?.problemResolved, LL),
    519: getHowLong(values.step17?.howLong, LL),
    // page18
    520: getRevise(values.step18?.revisePrice, LL),
    521: values.step18?.willingPay,
    // page19
    524: getYesNo(values.step19?.treatFairPolite, LL),
    525: getYesNo(values.step19?.moreThanOneCall, LL),
    526: getYesNo(values.step19?.bribe, LL),
    527: get527(values, LL),
    528: getYesNo(values.step19?.problemResolved, LL),
    529: getHowLong(values.step19?.howLong, LL),
    // page20
    62: getProblems(values.step20?.drainageBoxBlocked, LL),
    64: getProblems(values.step20?.drainageDitchBlock, LL),
    66: getProblems(values.step20?.walkedWater, LL),
    68: getProblems(values.step20?.StagnantWaterDisease, LL),
    69: getSatisfaction(values.step20?.StagnantWaterReductions, LL),
    // page21
    612: getYesNo(values.step21?.contactedDrainageIssue, LL),
    613: getMonthYear(values.step21?.contacted?.month, values.step21?.contacted?.year),
    614: get614(values, LL),
    615: values.step21?.contacted?.other,
    616: getServiceProvider(values.step21?.contacted?.who, LL),
    617: get617(values, LL),
    618: getYesNo(values.step21?.treatFairPolite, LL),
    619: getYesNo(values.step21?.moreThanOneCall, LL),
    620: getYesNo(values.step21?.bribe, LL),
    621: get621(values, LL),
    622: getYesNo(values.step21?.problemResolved, LL),
    623: getHowLong(values.step21?.howLong, LL),
    // page22
    522: getRevise(values.step22?.revisePrice, LL),
    523: values.step22?.willingPay,
  }

  return result
}
