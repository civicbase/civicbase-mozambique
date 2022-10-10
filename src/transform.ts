import { FormValues } from 'types'

interface Values extends FormValues {
  geolocation: {
    latitude?: number
    longitude?: number
  }
}

export const transform = (values: Values) => {
  const result = {
    startAt: values.startAt,
    finishAt: values.finishAt,
    geolocation: values.geolocation,
    uniqueId: values.step1.uniqueId,
    language: values.step1.language,
    dwellingType: values.step2.dwellingType,
    neighborhood: values.step2.neighborhood,
    sanitationType: values.step2.sanitationType,
    page3: values.step3,
    page4: values.step4,
    page5: values.step5,
    page6: values.step6,
    page7: values.step7,
    page8: values.step8,
    page9: values.step9,
    page10: values.step10,
    page11: values.step11,
    page12: values.step12,
    page13: values.step13,
    page14: values.step14,
    page15: values.step15,
    page16: values.step16,
    page17: values.step17,
    page18: values.step18,
    page19: values.step19,
    page20: values.step20,
    page21: values.step21,
    page22: values.step22,
    page23: values.step23,
    page24: values.step24,
    page25: values.step25,
    page26: values.step26,
    page27: values.step27,
  }

  return result
}
