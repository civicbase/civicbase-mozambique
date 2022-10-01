import { memo } from 'react'
import { useFormContext } from 'react-hook-form'

const Step12 = () => {
  const { getValues } = useFormContext()

  return <div>step 12</div>
}

export default memo(Step12)
