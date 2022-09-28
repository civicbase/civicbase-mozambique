import Conjoint from 'methods/Conjoint'
import Likert from 'methods/Likert'
import Quadratic from 'methods/Quadratic'
import { memo } from 'react'
import { useFormContext } from 'react-hook-form'

const Step12 = () => {
  const { getValues } = useFormContext()

  const x = getValues('test')

  switch (x) {
    case 'a':
      return <Quadratic qs={[]} step="step12" />
    case 'b':
      return <Conjoint qs={[]} step="step12" />
    case 'c':
      return <Likert qs={[]} step="step12" />
    default:
      return <Quadratic qs={[]} step="step12" />
  }
}

export default memo(Step12)
