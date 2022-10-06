import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import PagesLayout from 'layout/Pages'
import validation from './validation'
import Content from 'components/Content'
import Geolocation from 'components/Geolocation'
import useGeolocation from 'hooks/use-geolocation'
import Footer from 'components/Footer'
import Header from 'components/Header'
import useAsync from 'hooks/use-async'
import { createAnswer } from 'services/answer'
import { transform } from 'transform'
import params from 'utils/params'
import { FormValues } from 'types.d'

const App = () => {
  const [step, setStep] = useState(1)
  const [userGesture, setUserGesture] = useState(false)
  const { latitude, longitude, error } = useGeolocation(userGesture)
  const { run } = useAsync()
  const language = navigator.language.split(/[-_]/)[0]

  const methods = useForm<FormValues>({
    defaultValues: {
      step1: {
        language: language === 'pt' ? 'Português' : 'English',
        uniqueId: params.uniqueId,
      },
      step2: {
        waterBill: {
          shareNumber: 0,
        },
      },
      step7: {
        amountPreference: 8500,
      },
      step9: {
        pricePreference: 80,
      },
      step11: {
        feePreference: 50,
      },
    },
    resolver: zodResolver(validation),
  })

  console.log('errors', methods.formState.errors)

  const handlePrevious = () => {
    if (step > 1) {
      const sanitationType = methods.getValues('step2.sanitationType')
      if (sanitationType !== 'Flush to Septic Tank' && step === 14) {
        setStep(step - 2)
      } else {
        setStep(step - 1)
      }
    }
  }
  const handleNext = () => {
    methods.trigger(`step${step}` as any).then(isValid => {
      if (isValid) {
        const sanitationType = methods.getValues('step2.sanitationType')
        if (sanitationType !== 'Flush to Septic Tank' && step + 1 === 13) {
          setStep(step + 2)
        } else {
          setStep(step + 1)
        }
      }
    })
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(values => {
          const answer = transform(values)

          console.log('answer', {
            ...answer,
            geolocation: { latitude, longitude },
          })

          run(createAnswer({ ...answer, geolocation: { latitude, longitude } }))
        })}
      >
        <PagesLayout
          content={<Content step={step} />}
          header={<Header />}
          footer={
            <Footer
              onPrevious={handlePrevious}
              onNext={handleNext}
              hideNext={step === 28}
              isSubmitStep={step === 28}
              hidePrevious={
                step === 1 ||
                step === 3 ||
                step === 4 ||
                step === 5 ||
                step === 6 ||
                step === 7
              }
              isStart={step === 1}
              step={step}
            />
          }
          geolocation={
            (!latitude || !longitude) && (
              <Geolocation
                handleShareGeolocation={() => setUserGesture(true)}
                error={error}
              />
            )
          }
        />
      </form>
    </FormProvider>
  )
}

export default App
