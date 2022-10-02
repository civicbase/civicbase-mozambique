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

interface FormValues {
  step1: {
    unique_id: string
    bill: {
      description: string
      month: string
      consumption: number
      cost: number
      sanitation_tax_cost: number
    }
  }
  step2: {
    dwelling_type: string
    sanitation_type: string
    water_bill: {
      share: string
      share_number?: number
    }
    split?: number
    split_pay?: number
  }
  step3: {
    credits: number
    order: number
    statement: string
    vote: number
  }[]
  step5: {
    is_information_relevant: string
    share_information: string
    share_number: string
    share_0: {
      name: string
      number: string
    }
    share_1: {
      name: string
      number: string
    }
    share_2: {
      name: string
      number: string
    }
    share_3: {
      name: string
      number: string
    }
    share_4: {
      name: string
      number: string
    }
  }
  step6: {
    credits: number
    order: number
    statement: string
    vote: number
  }[]
}

const App = () => {
  const [step, setStep] = useState(1)
  const [userGesture, setUserGesture] = useState(false)
  const { latitude, longitude, error } = useGeolocation(userGesture)
  const { run } = useAsync()

  const methods = useForm<FormValues>({
    defaultValues: {
      step2: {
        water_bill: {
          share_number: 0,
        },
      },
    },
    resolver: zodResolver(validation),
  })

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }
  const handleNext = () => {
    methods.trigger(`step${step}` as any).then(isValid => {
      if (isValid) {
        setStep(step + 1)
      }
    })
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(values => {
          const answer = transform(values)

          run(createAnswer({ ...answer, geolocation: { latitude, longitude } }))

          setStep(13)
        })}
      >
        <PagesLayout
          content={<Content step={step} />}
          header={<Header />}
          footer={
            <Footer
              onPrevious={handlePrevious}
              onNext={handleNext}
              hideNext={step === 12 || step === 13}
              isSubmitStep={step === 12}
              hidePrevious={step === 1}
              isStart={step === 1}
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
