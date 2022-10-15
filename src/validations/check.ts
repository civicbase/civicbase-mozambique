import { UseFormReturn } from 'react-hook-form'
import { FormValues } from 'types.d'

const check = (field: any, methods: UseFormReturn<FormValues, object>) => {
  const value = methods.getValues(field)

  if (!value) {
    methods.setError(field, {
      type: 'custom',
      message: 'Required',
    })

    return false
  }

  return true
}

export default check
