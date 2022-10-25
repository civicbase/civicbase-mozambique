import { Controller, useFieldArray, useFormContext } from 'react-hook-form'
import tw from 'twin.macro'
import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Label from 'components/Form/Label'
import Radio from 'components/Form/Radio'
import Typography, { Hint } from 'components/Typography'
import Heading from 'components/Heading'
import Dropdown from 'components/Dropdown'
import Input from 'components/Form/Input'
import AddButton from 'components/AddButton'
import { GrAdd } from 'react-icons/gr'
import diagram from '../../images/self_diagram.jpg'
import { useI18nContext } from 'i18n/i18n-react'
import Checkbox from 'components/Form/Checkbox'
import { useEffect } from 'react'

const Step17 = () => {
  const { LL } = useI18nContext()
  const {
    register,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext()

  const notSharing = watch('step17.notSharing')

  useEffect(() => {
    if (notSharing) {
      setValue('step17.share', [])
    }
  }, [])

  const { fields, append } = useFieldArray({
    control,
    name: 'step17.share',
  })

  const handleAddPerson = () => {
    if (fields.length < 3) {
      append({ name: '', relationship: null, closeness: null })
    }
  }

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Heading subtitle={LL.headings[17]()} />

      <div>
        <Label number="4.51" required>
          {LL.questions[451]()}
        </Label>

        <div css={tw`flex flex-col mt-10`}>
          <div css={tw`flex justify-between`}>
            {[LL.choices.likely[0](), LL.choices.likely[1](), LL.choices.likely[2](), LL.choices.likely[3]()].map(
              (option) => (
                <label css={tw`flex flex-col space-y-2 items-center select-none`} key={option}>
                  <Radio {...register(`step17.SASBSatisfaction`)} value={option} />
                  <span css={tw`text-center`}>{option}</span>
                </label>
              ),
            )}
          </div>
        </div>
        <FieldErrorMessage name="step17.SASBSatisfaction" errors={errors} />
      </div>

      <div>
        <Label number="4.52" required>
          {LL.questions[452]()}
        </Label>
        <div>
          <img src={diagram} alt="service" />
        </div>

        {!notSharing && (
          <>
            <div css={tw`flex space-x-2 items-end`}>
              <Hint css={tw`flex-[2]`}>{LL.placeholder.name()}</Hint>
              <Hint css={tw`flex-[2]`}>{LL.placeholder.relationship()}</Hint>
              <Hint css={tw`flex-1`}>{LL.placeholder.closeness()}</Hint>
            </div>

            <div css={tw`space-y-4`}>
              {fields.map((person, index) => {
                const hasNameError = errors.step17?.share && !!errors.step17.share[index]?.name
                const hasRelationshipError = errors.step17?.share && !!errors.step17.share[index]?.relationship
                const hasclosenessError = errors.step17?.share && !!errors.step17.share[index]?.closeness

                return (
                  <div css={tw`flex space-x-2 items-end`} key={person.id}>
                    <div css={tw`flex-[2]`}>
                      <Input
                        {...register(`step17.share.${index}.name`, {
                          required: true,
                        })}
                        error={hasNameError}
                        placeholder={LL.placeholder.name()}
                      />
                    </div>
                    <Controller
                      name={`step17.share.${index}.relationship`}
                      control={control}
                      render={({ field }) => (
                        <div css={tw`flex-[2]`}>
                          <Dropdown
                            options={[
                              LL.choices.relationship[0](),
                              LL.choices.relationship[1](),
                              LL.choices.relationship[2](),
                              LL.choices.relationship[3](),
                              LL.choices.relationship[4](),
                            ]}
                            value={field.value}
                            onChange={field.onChange}
                            placeholder={LL.placeholder.relationship()}
                            error={hasRelationshipError}
                          />
                        </div>
                      )}
                    />
                    <Controller
                      name={`step17.share.${index}.closeness`}
                      control={control}
                      render={({ field }) => (
                        <div css={tw`flex-1`}>
                          <Dropdown
                            options={['1', '2', '3', '4', '5']}
                            value={field.value}
                            onChange={field.onChange}
                            placeholder={LL.placeholder.closeness()}
                            error={hasclosenessError}
                          />
                        </div>
                      )}
                    />
                  </div>
                )
              })}
            </div>
          </>
        )}

        <div css={tw`mt-4`}>
          <AddButton onClick={handleAddPerson} disabled={fields.length >= 3 || notSharing}>
            <div css={tw`flex items-center space-x-4`}>
              <GrAdd />
              <Typography>{LL.placeholder.addPerson()}</Typography>
            </div>
          </AddButton>
        </div>

        <div css={tw`mt-4`}>
          <FieldErrorMessage name="step17.share" errors={errors} />

          <label css={tw`inline-flex space-x-4 items-center select-none mt-2`}>
            <Checkbox {...register(`step17.notSharing`)} />
            <span>{LL.choices.notSharing()}</span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default Step17
