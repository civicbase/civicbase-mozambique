import Dropdown from 'components/Dropdown'
import Checkbox from 'components/Form/Checkbox'
import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Input from 'components/Form/Input'
import Label from 'components/Form/Label'
import Radio from 'components/Form/Radio'
import { memo } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Step12 = () => {
  const {
    control,
    register,
    watch,
    formState: { errors },
  } = useFormContext()

  const contacted = watch('step12.service_provider.contacted')
  const paid = watch('step12.service_provider.paid')

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <div>
        <Label required>Is your home connected to a septic tank?</Label>
        <Controller
          name="step12.connected_septic_tank"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={['Yes', 'No']}
              value={field.value}
              onChange={field.onChange}
              placeholder="Please select an option"
              error={!!errors?.step12?.connected_septic_tank}
            />
          )}
        />
        <FieldErrorMessage
          name="step12.connected_septic_tank"
          errors={errors}
        />
      </div>

      <div>
        <Label required>Have you ever emptied your septic tank before?</Label>
        <Controller
          name="step12.emptied_septic_tank"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={['Yes', 'No']}
              value={field.value}
              onChange={field.onChange}
              placeholder="Please select an option"
              error={!!errors?.step12?.emptied_septic_tank}
            />
          )}
        />
        <FieldErrorMessage name="step12.emptied_septic_tank" errors={errors} />
      </div>

      <div>
        <Label required>
          Did you contact a service provider to empty the cesspool?
        </Label>
        <Controller
          name="step12.service_provider.contacted"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={['Yes', 'No']}
              value={field.value}
              onChange={field.onChange}
              placeholder="Please select an option"
              error={!!errors?.step12?.service_provider?.contacted}
            />
          )}
        />
        <FieldErrorMessage
          name="step12.service_provider.contacted"
          errors={errors}
        />
      </div>

      <div>
        <Label required>
          When was the last time you contacted someone to empty the cesspool?
        </Label>

        {[
          'Before February 2022',
          'Between February and April 2022',
          'After April 2022',
        ].map(option => (
          <label
            css={tw`flex space-x-2 space-y-4 items-baseline select-none`}
            key={option}
          >
            <Radio
              {...register(`step12.service_provider.last_time`)}
              value={option}
            />
            <span css={tw`text-center`}>{option}</span>
          </label>
        ))}

        <FieldErrorMessage
          name="step12.service_provider.last_time"
          errors={errors}
        />
      </div>

      {contacted === 'Yes' && (
        <>
          <div>
            <Label required>Who did you contact? </Label>

            <div css={tw`flex flex-col space-y-4 mt-4`}>
              {['Dono da casa', 'Um canalizador', 'SASB', 'Outro'].map(
                option => (
                  <label
                    css={tw`inline-flex space-x-4 items-center select-none`}
                    key={option}
                  >
                    <Checkbox
                      {...register(
                        `step12.service_provider.contacted_who.${option}`,
                      )}
                    />
                    <span>{option}</span>
                  </label>
                ),
              )}
            </div>
          </div>

          <div>
            <Label required>What services did you request? </Label>

            <div css={tw`flex flex-col space-y-4 mt-4`}>
              {[
                'Fecal Sludge removal',
                'Fecal Sludge Removal (Priority Request)',
                'Cleaning of Septic Tank',
              ].map(option => (
                <label css={tw`inline-flex space-x-4 items-center select-none`}>
                  <Checkbox
                    {...register(
                      `step12.service_provider.requested_service.${option}`,
                    )}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <Label required>Did you pay for the service?</Label>
            <Controller
              name="step12.service_provider.paid"
              control={control}
              render={({ field }) => (
                <Dropdown
                  options={['Yes', 'No']}
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Please select an option"
                  error={!!errors?.step12?.service_provider?.paid}
                />
              )}
            />
            <FieldErrorMessage
              name="step12.service_provider.paid"
              errors={errors}
            />
          </div>

          {paid === 'Yes' && (
            <div>
              <Label required>How much did you pay for the service?</Label>
              <Input
                {...register('step12.service_provider.how_much', {
                  required: true,
                  valueAsNumber: true,
                })}
                error={!!errors?.step12?.service_provider?.how_much}
                type="number"
              />

              <FieldErrorMessage
                name="step12.service_provider.how_much"
                errors={errors}
              />
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default memo(Step12)
