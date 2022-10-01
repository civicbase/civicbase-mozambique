import Dropdown from 'components/Dropdown'
import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Input from 'components/Form/Input'
import Label from 'components/Form/Label'
import { Controller, useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step6 = () => {
  const {
    register,
    control,
    watch,
    formState: { errors },
  } = useFormContext()

  return <div css={tw`grid grid-cols-1 gap-6`}>step 6</div>
}

export default Step6
