import { UseFormReturn } from 'react-hook-form'
import { FormValues } from 'types.d'

export const manualStep17Validation = (methods: UseFormReturn<FormValues, object>) => {
  methods.clearErrors()
  const sanitationType = methods.getValues('step2.sanitationType')
  const contactedSASB = methods.getValues('step10.serviceProvider.who.SASB')
  const contactedServiceProvider = methods.getValues('step10.serviceProvider.contacted') === 'Yes'

  let valid = true

  // VALIDATE CONTACTED 5.8
  const contacted = methods.getValues('step17.contacted')
  if (sanitationType === 'Flush to Sewer' && !contacted) {
    methods.setError('step17.contacted', {
      type: 'custom',
      message: 'Required',
    })

    valid = false
  }

  // VALIDATE CONTACTED MONTH AND YEAR 5.9
  const month = methods.getValues('step17.contactedMonth')
  const year = methods.getValues('step17.contactedYear')

  if (contactedServiceProvider) {
    if (!month) {
      methods.setError('step17.contactedMonth', {
        type: 'custom',
        message: 'Required',
      })
      valid = false
    }

    if (!year) {
      methods.setError('step17.contactedYear', {
        type: 'custom',
        message: 'Required',
      })
      valid = false
    }
  }

  //   VALIDATE PROBLEM 5.10
  const problem = methods.getValues('step17.problem')
  if (contactedServiceProvider && !problem) {
    methods.setError('step17.problem', {
      type: 'custom',
      message: 'Required',
    })
    valid = false
  }

  //   VALIDATE CONTACTED WHO 5.11
  const contactedWho = methods.getValues('step17.contactedWho')

  if (sanitationType === 'Flush to Sewer' && !contactedWho) {
    methods.setError('step17.contactedWho', {
      type: 'custom',
      message: 'Required',
    })
    valid = false
  }

  //   VALIDATE CONTACT OTHER 5.12
  const isContactedOther = methods.getValues('step17.contactedWho') === 'Other'
  const contactedOther = methods.getValues('step17.contactedOther')

  if (isContactedOther && !contactedOther) {
    methods.setError('step17.contactedOther', {
      type: 'custom',
      message: 'Required',
    })
    valid = false
  }

  //   VALIDATE TREAT FAIR POLITE 5.14
  const treatFairPolite = methods.getValues('step17.treatFairPolite')

  if (contactedSASB && !treatFairPolite) {
    methods.setError('step17.treatFairPolite', {
      type: 'custom',
      message: 'Required',
    })
    valid = false
  }

  //   VALIDATE MORE THAN ONE CALL 5.15
  const moreThanOneCall = methods.getValues('step17.moreThanOneCall')

  if (contactedSASB && !moreThanOneCall) {
    methods.setError('step17.moreThanOneCall', {
      type: 'custom',
      message: 'Required',
    })
    valid = false
  }

  //   VALIDATION BRIBE 5.16
  const bribe = methods.getValues('step17.bribe')

  if (contactedSASB && !bribe) {
    methods.setError('step17.bribe', {
      type: 'custom',
      message: 'Required',
    })
    valid = false
  }

  //   VALIDATION ANOTHER ENTITY 5.17
  const anotherEntity = methods.getValues('step17.anotherEntity')

  if (contactedSASB && !anotherEntity) {
    methods.setError('step17.anotherEntity', {
      type: 'custom',
      message: 'Required',
    })
    valid = false
  }

  //   VALIDATION PROBLEM RESOLVED 5.18
  const problemResolved = methods.getValues('step17.problemResolved')

  if (contactedSASB && !problemResolved) {
    methods.setError('step17.problemResolved', {
      type: 'custom',
      message: 'Required',
    })
    valid = false
  }

  //   VALIDATION HOW LONG 5.19
  const howLong = methods.getValues('step17.howLong')

  if (contactedSASB && !howLong) {
    methods.setError('step17.howLong', {
      type: 'custom',
      message: 'Required',
    })
    valid = false
  }

  return valid
}
