import { gql, QueryHookOptions, useQuery } from '@apollo/client'
import { IGetLessonBySlugResponse, IGetLessonBySlugVariables } from './types'

export const GET_LESSON_BY_SLUG_QUERY = gql`
  query getLessonBySlug($slug: String) {
    lesson(where: { slug: $slug }) {
      title
      videoId
      description
      teacher {
        name
        bio
        avatarURL
      }
    }
  }
`

export const useGetLessonBySlug = (
  options?: QueryHookOptions<
    IGetLessonBySlugResponse,
    IGetLessonBySlugVariables
  >
) => {
  return useQuery<IGetLessonBySlugResponse, IGetLessonBySlugVariables>(
    GET_LESSON_BY_SLUG_QUERY,
    options
  )
}
