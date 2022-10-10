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

const Step17 = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext()

  const { fields, append } = useFieldArray({
    control,
    name: 'step17.share',
  })

  const handleAddPerson = () => {
    if (fields.length < 5) {
      append({ name: '', relationship: null, closeness: null })
    }
  }

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <Heading subtitle="Sharing of Satisfaction" />

      <div>
        <Label number="4.51" required>
          On the scale of 1 to 10, with one being the lowest and 10 being the
          highest, how likely are you to share YOUR SATISFACTION towards the
          SASB's services mentioned above to other people in this neighborhood?
        </Label>

        <div css={tw`flex flex-col mt-10`}>
          <div css={tw`flex justify-between mb-5`}>
            <Typography>Strongly Disagree</Typography>
            <Typography>Strongly Agree</Typography>
          </div>
          <div css={tw`flex justify-between`}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(option => (
              <label
                css={tw`flex flex-col space-y-2 items-center select-none`}
                key={option}
              >
                <Radio
                  {...register(`step17.SASBSatisfaction`)}
                  value={option}
                />
                <span css={tw`text-center`}>{option}</span>
              </label>
            ))}
          </div>
        </div>
        <FieldErrorMessage name="step17.SASBSatisfaction" errors={errors} />
      </div>

      <div>
        <Label number="4.52" required>
          With whom would you like to share YOUR SATISFACTION/OPINON to? You may
          provide up to 5 names. Specify your relationship and closeness for
          each person. For closeness , please refer to the diagram provided
          above
        </Label>
        <div>
          <img src={diagram} alt="service" />
        </div>

        <div css={tw`flex space-x-2 items-end`}>
          <Hint css={tw`flex-[2]`}>Name</Hint>
          <Hint css={tw`flex-[2]`}>Relationship</Hint>
          <Hint css={tw`flex-1`}>Closeness</Hint>
        </div>

        <div css={tw`space-y-4`}>
          {fields.map((person, index) => {
            const hasNameError =
              errors.step17?.share && !!errors.step17.share[index]?.name
            const hasRelationshipError =
              errors.step17?.share && !!errors.step17.share[index]?.relationship
            const hasclosenessError =
              errors.step17?.share && !!errors.step17.share[index]?.closeness

            return (
              <div css={tw`flex space-x-2 items-end`} key={person.id}>
                <div css={tw`flex-[2]`}>
                  <Input
                    {...register(`step17.share.${index}.name`, {
                      required: true,
                    })}
                    error={hasNameError}
                    placeholder="Name"
                  />
                </div>
                <Controller
                  name={`step17.share.${index}.relationship`}
                  control={control}
                  render={({ field }) => (
                    <div css={tw`flex-[2]`}>
                      <Dropdown
                        options={[
                          'Neighbor',
                          'Work Colleague',
                          'Friend Acquaintance',
                          'Family Member',
                          'Other',
                        ]}
                        value={field.value}
                        onChange={field.onChange}
                        placeholder="Relationship"
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
                        placeholder="Closeness"
                        error={hasclosenessError}
                      />
                    </div>
                  )}
                />
              </div>
            )
          })}
        </div>

        <div css={tw`mt-4`}>
          <AddButton onClick={handleAddPerson} disabled={fields.length >= 5}>
            <div css={tw`flex items-center space-x-4`}>
              <GrAdd />
              <Typography>Add person</Typography>
            </div>
          </AddButton>
        </div>
      </div>
    </div>
  )
}

export default Step17
