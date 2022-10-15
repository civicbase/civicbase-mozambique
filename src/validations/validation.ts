import { TranslationFunctions } from 'i18n/i18n-types'
import { UseFormReturn } from 'react-hook-form'
import { FormValues } from 'types.d'
import * as validation from '.'

const validator = async (
  step: number,
  methods: UseFormReturn<FormValues, object>,
  LL: TranslationFunctions,
) => {
  switch (step) {
    // case 1:
    //   return methods.trigger(`step1`)
    // case 2:
    //   return methods.trigger(`step2`)
    // case 3:
    //   return methods.trigger(`step3`)
    // case 6:
    //   return methods.trigger(`step6`)
    // case 8:
    //   return methods.trigger(`step8`)
    // case 10:
    //   return methods.trigger(`step10`)
    // case 12:
    //   return methods.trigger(`step12`)
    // case 13: {
    //   const sanitationType = methods.getValues('step2.sanitationType')
    //   if (sanitationType === LL.choices.sanitationType[1]()) {
    //     return methods.trigger(`step13`)
    //   }
    //   return true
    // }
    // case 14:
    //   return methods.trigger(`step14`)
    // case 16:
    //   return methods.trigger(`step16`)
    // case 17:
    //   return methods.trigger(`step17`)
    // case 18:
    //   return methods.trigger(`step18`)
    // case 19:
    //   return methods.trigger(`step19`)
    // case 20: {
    //   const sanitationType = methods.getValues('step2.sanitationType')
    //   if (sanitationType === LL.choices.sanitationType[0]()) {
    //     return methods.trigger(`step20`)
    //   }
    //   return true
    // }
    // case 21:
    //   return methods.trigger(`step21`)
    // case 22:
    //   return methods.trigger(`step22`)
    // case 23: {
    //   const contactecSASB = methods.getValues(`step13.serviceProvider.who.SASB`)
    //   if (contactecSASB) {
    //     return methods.trigger(`step23`)
    //   }
    //   return true
    // }
    // case 24:
    //   return methods.trigger(`step24`)
    // case 25:
    //   return methods.trigger(`step25`)
    // case 26:
    //   return methods.trigger(`step26`)
    // case 27:
    //   return methods.trigger(`step27`)
    default:
      return true
  }
}

export default validator
