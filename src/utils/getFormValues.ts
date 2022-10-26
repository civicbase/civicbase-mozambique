import { TranslationFunctions } from 'i18n/i18n-types'
import { getLocalDate } from 'utils/getLocalDate'
import params from 'utils/params'

const getDefaultValues = (LL: TranslationFunctions, content: string, QVSRSliderContent: string) => {
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
    step5: {
      content: content,
    },
    step6: {
      amountPreference: '8500',
      content: QVSRSliderContent,
    },
    step8: {
      pricePreference: '80',
      content: QVSRSliderContent,
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
      content: content,
    },
    step14: {
      share: [{ name: '', relationship: null, closeness: null }],
    },
  }
}

const getFormValues = (LL: TranslationFunctions, content: string, QVSRSliderContent: string) => {
  const values: string | null = localStorage.getItem('civicbase_form')

  if (values) {
    return JSON.parse(values)
  }

  return getDefaultValues(LL, content, QVSRSliderContent)
}

export default getFormValues
