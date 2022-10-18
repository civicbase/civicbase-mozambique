import { TranslationFunctions } from 'i18n/i18n-types'
import { FormValues } from 'types'
import {
  get411,
  get413,
  get414,
  get417,
  get418,
  get421,
  get422,
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
    45: getYesNo(values.step2?.waterBill.share, LL),
    46: values.step2?.waterBill.shareNumber,
    // page3
    47: get47(values, LL),
    // page4
    48: values.step4,
    // page5
    page5: values.step5?.content,
    // page6
    411: get411(values, LL),
    412: getLikely(values.step6?.shareInformation, LL),
    //page7
    page7: values.step7?.content,
    413: get413(values, LL),
    414: get414(values, LL),
    // page8
    415: getRevise(values.step8?.revisePrice, LL),
    416: values.step8?.willingPay,
    // page9
    page9: values.step9?.content,
    417: get417(values, LL),
    418: get418(values, LL),
    // page10
    419: getRevise(values.step10?.revisePrice, LL),
    420: values.step10?.willingPay,
    // page11
    page11: values.step11?.content,
    421: get421(values, LL),
    422: get422(values, LL),
    // page12
    423: getRevise(values.step12?.revisePrice, LL),
    424: values.step12?.willingPay,
    // page13
    425: getYesNo(values.step13?.emptiedSepticTank, LL),
    426: getYesNo(values.step13?.serviceProvider.contacted, LL),
    427: getMonthYear(values.step13?.serviceProvider.contactedMonth, values.step13?.serviceProvider.contactedYear),
    428: getServiceProvider(values.step13?.serviceProvider.who, LL),
    429: values.step13?.serviceProvider.other,
    430: get430(values, LL),
    431: get431(values, LL),
    432: getYesNo(values.step13?.serviceProvider.paid, LL),
    433: values.step13?.serviceProvider.howMuch,
    // page14
    435: Number(values.step14?.fsm.tooExpensive),
    436: Number(values.step14?.fsm.tooCheap),
    437: Number(values.step14?.fsm.expensive),
    438: Number(values.step14?.fsm.greatValue),
    // page15
    page15: values.step15?.content,
    // page16
    441: getSatisfactionLevel(values.step16?.satisfaction.sewer, LL),
    442: getSatisfaction(values.step16?.satisfaction.sewerlast6Months, LL),
    443: getSatisfy(values.step16?.satisfaction.qualityDrainage, LL),
    444: getSatisfaction(values.step16?.satisfaction.qualityDrainageLast6Months, LL),
    445: getSatisfactionLevel(values.step16?.satisfaction.SASBFecalSludgeDeslidgingService, LL),
    446: get446(values, LL),
    447: get447(values, LL),
    448: getSatisfaction(values.step16?.satisfaction.SASBCustomerServiceLast6Months, LL),
    449: getSatisfactionLevel(values.step16?.satisfaction.beiraMunicipality, LL),
    450: getSatisfaction(values.step16?.satisfaction.beiraMunicipalityLast6Months, LL),
    // page17
    451: getLikely(values.step17?.SASBSatisfaction, LL),
    452: get452(values, LL),
    // page18
    453: getYesNo(values.step18?.shareSASBSatisfaction, LL),
    454: getYesNo(values.step18?.knowHowContactSASB, LL),
    // page19
    52: getProblems(values.step19?.oftenSewerDwellingCompoundProblem, LL),
    53: getSatisfaction(values.step19?.sewerDwellingCompoundReductions, LL),
    54: getProblems(values.step19?.oftenSewerProblem, LL),
    55: getSatisfaction(values.step19?.sewerReductions, LL),
    56: getProblems(values.step19?.oftenBadSmellDwellingCompound, LL),
    57: getSatisfaction(values.step19?.sewerBadSmellDwellingCompoundReductions, LL),
    // page20
    58: getYesNo(values.step20?.contacted, LL),
    59: getMonthYear(values.step20?.contactedMonth, values.step20?.contactedYear),
    510: get510(values, LL),
    511: getServiceProvider(values.step20?.contactedWho, LL),
    512: values.step20?.contactedOther,
    513: get513(values, LL),
    514: getYesNo(values.step20?.treatFairPolite, LL),
    515: getYesNo(values.step20?.moreThanOneCall, LL),
    516: getYesNo(values.step20?.bribe, LL),
    517: get517(values, LL),
    518: getYesNo(values.step20?.problemResolved, LL),
    519: getHowLong(values.step20?.howLong, LL),
    // page21
    520: getRevise(values.step21?.revisePrice, LL),
    521: values.step21?.willingPay,
    // page22
    522: getRevise(values.step22?.revisePrice, LL),
    523: values.step22?.willingPay,
    // page23
    524: getYesNo(values.step23?.treatFairPolite, LL),
    525: getYesNo(values.step23?.moreThanOneCall, LL),
    526: getYesNo(values.step23?.bribe, LL),
    527: get527(values, LL),
    528: getYesNo(values.step23?.problemResolved, LL),
    529: getHowLong(values.step23?.howLong, LL),
    // page24
    530: getRevise(values.step24?.revisePrice, LL),
    531: values.step24?.willingPay,
    // page25
    62: getProblems(values.step25?.drainageBoxBlocked, LL),
    63: getSatisfaction(values.step25?.drainageBoxBlockReductions, LL),
    64: getProblems(values.step25?.drainageDitchBlock, LL),
    65: getSatisfaction(values.step25?.drainageDitchBlockReductions, LL),
    66: getProblems(values.step25?.walkedWater, LL),
    67: getProblems(values.step25?.soakedPassingCar, LL),
    68: getProblems(values.step25?.StagnantWaterDisease, LL),
    69: getSatisfaction(values.step25?.StagnantWaterReductions, LL),
    610: getProblems(values.step25?.floodAfterRain, LL),
    611: getSatisfaction(values.step25?.floodAfterRainReductions, LL),
    // page26
    612: getYesNo(values.step26?.contactedDrainageIssue, LL),
    613: getMonthYear(values.step26?.contacted?.month, values.step26?.contacted?.year),
    614: get614(values, LL),
    615: values.step26?.contacted?.other,
    616: getServiceProvider(values.step26?.contacted?.who, LL),
    617: get617(values, LL),
    618: getYesNo(values.step26?.treatFairPolite, LL),
    619: getYesNo(values.step26?.moreThanOneCall, LL),
    620: getYesNo(values.step26?.bribe, LL),
    621: get621(values, LL),
    622: getYesNo(values.step26?.problemResolved, LL),
    623: getHowLong(values.step26?.howLong, LL),
    // page27
    624: getRevise(values.step27?.revisePrice, LL),
    625: values.step27?.willingPay,
  }

  return result
}
