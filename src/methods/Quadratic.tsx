import DynamicBar from 'components/DynamicBar'
import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import { Headline } from 'components/Typography'
import Vote from 'components/Vote'
import useQuadratic from 'hooks/use-quadratic'
import { useI18nContext } from 'i18n/i18n-react'
import { memo, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Quadratic = ({
  qs,
  step,
  credits = 100,
  isReset = false,
  sort = false,
}: {
  qs: any[]
  step: string
  credits?: number
  isReset?: boolean
  sort?: boolean
}) => {
  const { LL } = useI18nContext()
  const {
    setValue,
    formState: { errors },
  } = useFormContext()

  const survey = {
    setup: {
      credits,
    },
    quadratic: qs.map((q: string) => ({
      statement: q,
    })),
  }

  const { questions, availableCredits, vote, canVote, reset } = useQuadratic(
    survey,
    sort,
  )

  useEffect(() => {
    if (isReset) {
      reset()
    }
  }, [isReset])

  useEffect(() => {
    if (questions) {
      setValue(step, questions)
    }
  }, [questions])

  return (
    <div>
      <div css={tw`sticky -top-2 z-20 mb-7 bg-white`}>
        <DynamicBar
          total={credits}
          availableCredits={availableCredits}
          language={LL.placeholder.credits()}
        />
      </div>

      {questions.map((question, index) => {
        const canVoteUp = canVote(index, 1)
        const canVoteDown = canVote(index, -1)

        return (
          <div
            key={question.statement}
            css={tw`flex w-full mb-12 justify-between`}
          >
            <Headline css={tw`mb-4 flex`}>
              {index + 1}.&nbsp;
              {question.statement}
            </Headline>

            <div css={tw`flex justify-center`}>
              <Vote
                thumbsDown={LL.placeholder.disagree()}
                thumbsUp={LL.placeholder.agree()}
                total={credits}
                handleVote={(direction: number) => vote(index, direction)}
                vote={question.vote}
                creditSpent={question.credits}
                canVoteUp={canVoteUp}
                canVoteDown={canVoteDown}
                token={LL.placeholder.credits()}
              />
            </div>
          </div>
        )
      })}

      <FieldErrorMessage name={step} errors={errors} />
    </div>
  )
}

export default memo(Quadratic)
