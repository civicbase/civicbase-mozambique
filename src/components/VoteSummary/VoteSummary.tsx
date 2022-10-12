import { Hint } from 'components/Typography'
import tw from 'twin.macro'
import { Quadratic } from 'types.d'
import { getMostVoted, getMostNegativeVoted } from 'utils/quadratic'

const VoteSummary = ({ results }: { results: Quadratic }) => {
  const mostVoted = getMostVoted(results)
  const mostNegativeVoted = getMostNegativeVoted(results)
  let marginBottom = 0

  if (mostNegativeVoted) {
    marginBottom = mostNegativeVoted.vote * -1 * 10 * 2
  }

  return (
    <>
      <div
        css={tw`flex justify-between h-56 border-b-[1px] border-gray-300`}
        style={{ marginBottom: `${marginBottom + 16}px` }}
      >
        {results.map(result => {
          const { order, vote, statement } = result
          const height = vote < 0 ? vote * -1 * 10 * 2 : vote * 10 * 2

          return (
            <div
              css={tw`flex flex-1 flex-col relative items-center`}
              key={statement}
            >
              {vote}
              <div
                css={[
                  tw`flex-1 flex flex-col `,
                  vote < 0 ? tw`justify-start` : tw`justify-end`,
                ]}
              >
                <div
                  css={[
                    tw`bg-green-300 w-8`,
                    vote < 0 &&
                      tw`bg-red-300 transform[translateY(100%)] absolute bottom-0`,
                    vote < 0 ? tw`rounded-b-md` : tw`rounded-t-md`,
                    mostVoted?.order === order && tw`bg-blue-300`,
                  ]}
                  style={{ height: `${height}px` }}
                ></div>
              </div>
            </div>
          )
        })}
      </div>

      <div>
        {results.map(result => {
          const { order, vote, statement } = result
          const isMostVoted = mostVoted?.order === order
          if (vote !== 0) {
            return (
              <Hint css={tw`flex items-center my-2`} key={statement}>
                <div
                  css={[
                    tw`h-4 w-4 mr-2 rounded`,
                    vote < 0 ? tw`bg-red-300` : tw`bg-green-300`,
                    isMostVoted && tw`bg-blue-300`,
                  ]}
                />
                ({order + 1})
                {isMostVoted ? (
                  <span css={tw`text-blue-700 mx-1`}>(Highest vote)</span>
                ) : null}
                {statement}
              </Hint>
            )
          }

          return null
        })}
      </div>
    </>
  )
}

export default VoteSummary
