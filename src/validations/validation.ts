import { TranslationFunctions } from 'i18n/i18n-types'
import { UseFormReturn } from 'react-hook-form'
import { FormValues } from 'types.d'

const validator = async (step: number, methods: UseFormReturn<FormValues, object>, LL: TranslationFunctions) => {
  switch (step) {
    case 1:
      return methods.trigger(`step1`)
    case 2:
      return methods.trigger(`step2`)
    case 3: {
      const dwellingType = methods.getValues('step2.dwellingType')
      const shareBill = methods.getValues('step3.waterBill.share')
      const shareNumber = methods.getValues('step3.waterBill.shareNumber')

      if (
        dwellingType === LL.choices.dwellingType[1]() ||
        dwellingType === LL.choices.dwellingType[2]() ||
        dwellingType === LL.choices.dwellingType[3]()
      ) {
        // methods.trigger(`step3`)

        if (!shareBill) {
          methods.setError('step3.waterBill.share', {
            type: 'custom',
            message: 'Required',
          })

          return false
        }
      }

      return methods.trigger(`step3`)
    }
    case 5:
      return methods.trigger(`step5`)
    case 8:
      return methods.trigger(`step8`)
    case 10:
      return methods.trigger(`step10`)
    case 13: {
      const sanitationType = methods.getValues('step2.sanitationType')
      if (sanitationType === LL.choices.sanitationType[1]()) {
        return methods.trigger(`step13`)
      }
      return true
    }
    case 16:
      return methods.trigger(`step16`)
    case 17:
      return methods.trigger(`step17`)
    case 18:
      return methods.trigger(`step18`)
    case 19:
      return methods.trigger(`step19`)
    case 20: {
      const sanitationType = methods.getValues('step2.sanitationType')
      if (sanitationType === LL.choices.sanitationType[0]()) {
        return methods.trigger(`step20`)
      }
      return true
    }
    case 21:
      return methods.trigger(`step21`)
    case 22:
      return methods.trigger(`step22`)
    case 23: {
      const contactecSASB = methods.getValues(`step13.serviceProvider.who.SASB`)
      if (contactecSASB) {
        return methods.trigger(`step23`)
      }
      return true
    }
    case 25:
      return methods.trigger(`step25`)
    case 26:
      return methods.trigger(`step26`)
    default:
      return true
  }
}

export default validator
