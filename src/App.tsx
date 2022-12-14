import { useMemo, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import PagesLayout from 'layout/Pages'
import validationSchema from './validation'
import Content from 'components/Content'
import Geolocation from 'components/Geolocation'
import useGeolocation from 'hooks/use-geolocation'
import Footer from 'components/Footer'
import Header from 'components/Header'
import useAsync from 'hooks/use-async'
import { createAnswer } from 'services/answer'
import { transform } from 'transform'
import { FormValues } from 'types.d'
import validator from 'validations'
import { useI18nContext } from 'i18n/i18n-react'
import ODKConfirmation from 'components/ODKConfirmation'
import getFormValues from 'utils/getFormValues'

const App = () => {
  const { LL } = useI18nContext()
  const [step, setStep] = useState(1)
  const [odkConfirm, setConfirm] = useState(false)
  const [userGesture, setUserGesture] = useState(false)
  const { latitude, longitude, error } = useGeolocation(userGesture)
  const { run } = useAsync()

  const methods = useForm<FormValues>({
    defaultValues: useMemo(() => getFormValues(LL), []),
    resolver: zodResolver(validationSchema(LL)),
  })

  const handlePrevious = () => {
    if (step > 1) {
      switch (step) {
        case 18:
          const sewerConnection = methods.getValues('step2.sanitationType') === LL.choices.sanitationType[0]()
          if (!sewerConnection) {
            setStep(step - 2)
          } else {
            setStep(step - 1)
          }

          break
        case 20:
          const contactecSASB = methods.getValues(`step10.serviceProvider.who.SASB`)

          if (!contactecSASB) {
            setStep(step - 2)
          } else {
            setStep(step - 1)
          }
          break
        default:
          setStep(step - 1)
          break
      }
    }
  }
  const handleNext = () => {
    validator(step, methods, LL).then((isValid) => {
      if (isValid) {
        setStep(step + 1)
      }
    })
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit((values) => {
          const answer = transform(
            {
              ...values,
              geolocation: { latitude, longitude },
            },
            LL,
          )

          localStorage.removeItem('civicbase_form')
          run(createAnswer(answer))

          setStep(step + 1)
        })}
      >
        <PagesLayout
          content={<Content onNext={handleNext} onPrevious={handlePrevious} step={step} />}
          header={<Header />}
          footer={
            <Footer
              onPrevious={handlePrevious}
              onNext={handleNext}
              hideNext={step === 22 || step === 23}
              isSubmitStep={step === 22}
              hidePrevious={step === 1 || step === 23}
              isStart={step === 1}
              step={step}
            />
          }
          ODKConfirmation={!odkConfirm && <ODKConfirmation handleConfirm={() => setConfirm(true)} />}
          geolocation={
            (!latitude || !longitude) &&
            odkConfirm && <Geolocation handleShareGeolocation={() => setUserGesture(true)} error={error} />
          }
          step={step}
        />
      </form>
    </FormProvider>
  )
}

export default App
