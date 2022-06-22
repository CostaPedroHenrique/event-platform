import { gql, QueryHookOptions, useQuery } from '@apollo/client'
import { IGetLessonsResponse } from './types'

export const GET_LESSONS_QUERY = gql`
  query getLessons {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      availableAt
      title
      slug
    }
  }
`

export const useGetLessons = (
  options?: QueryHookOptions<IGetLessonsResponse>
) => {
  return useQuery<IGetLessonsResponse>(GET_LESSONS_QUERY, options)
}
