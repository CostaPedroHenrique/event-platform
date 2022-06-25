import { gql, MutationHookOptions, useMutation } from '@apollo/client'
import { ICreateSubscriberResponse, ICreateSubscriberVariables } from './types'

export const CREATE_SUBSCRIBER = gql`
  mutation CreateSubscriber($name: String!, $email: String!) {
    createSubscriber(data: { name: $name, email: $email }) {
      id
    }
  }
`

export const useCreateSubscribeMutation = (
  options?: MutationHookOptions<
    ICreateSubscriberResponse,
    ICreateSubscriberVariables
  >
) => {
  return useMutation<ICreateSubscriberResponse, ICreateSubscriberVariables>(
    CREATE_SUBSCRIBER,
    options
  )
}
