import { TranslationFunctions } from 'i18n/i18n-types'
import { getLocalDate } from 'utils/getLocalDate'
import params from 'utils/params'
import { getRandomQVSRSlider, getRandomTreatmentControl } from './random'

const getDefaultValues = (LL: TranslationFunctions) => {
  const language = navigator.language.split(/[-_]/)[0]

  return {
    startAt: getLocalDate(),
    step1: {
      language: language === 'pt' ? LL.choices.languages[1]() : LL.choices.languages[0](),
      uniqueId: params.uniqueId,
    },
    step3: {
      waterBill: {
        shareNumber: 0,
      },
    },
    step4: [
      { id: '1', statement: LL.choices[48][0](), vote: 0, credits: 0, order: 0 },
      { id: '2', statement: LL.choices[48][1](), vote: 0, credits: 0, order: 1 },
      { id: '3', statement: LL.choices[48][2](), vote: 0, credits: 0, order: 2 },
      { id: '4', statement: LL.choices[48][3](), vote: 0, credits: 0, order: 3 },
      { id: '5', statement: LL.choices[48][4](), vote: 0, credits: 0, order: 4 },
    ],
    step5: {
      content: getRandomTreatmentControl(),
    },
    step6: {
      amountPreference: '8500',
      content: getRandomQVSRSlider(),
      QVSR: [
        { id: '1', statement: '6500 MT', vote: 0, credits: 0, order: 0 },
        { id: '2', statement: '7500 MT', vote: 0, credits: 0, order: 1 },
        { id: '3', statement: '8500 MT', vote: 0, credits: 0, order: 2 },
        { id: '4', statement: '9500 MT', vote: 0, credits: 0, order: 3 },
        { id: '5', statement: '10500 MT', vote: 0, credits: 0, order: 4 },
      ],
    },
    step7: {
      x: 0,
    },
    step8: {
      pricePreference: '80',
      content: getRandomQVSRSlider(),
      QVSR: [
        { id: '1', statement: '64 MT', vote: 0, credits: 0, order: 0 },
        { id: '2', statement: '72 MT', vote: 0, credits: 0, order: 1 },
        { id: '3', statement: '80 MT', vote: 0, credits: 0, order: 2 },
        { id: '4', statement: '88 MT', vote: 0, credits: 0, order: 3 },
        { id: '5', statement: '96 MT', vote: 0, credits: 0, order: 4 },
      ],
    },
    step9: {
      x: 0,
    },
    step10: {
      serviceProvider: {
        howMuch: 0,
      },
    },
    step11: {
      pricePreference: '2350',
    },
    step12: {
      content: getRandomTreatmentControl(),
    },
    step14: {
      share: [{ name: '', relationship: null, closeness: null }],
    },
  }
}

const getFormValues = (LL: TranslationFunctions) => {
  const values: string | null = localStorage.getItem('civicbase_form')

  if (values) {
    return JSON.parse(values)
  }

  return getDefaultValues(LL)
}

export default getFormValues
