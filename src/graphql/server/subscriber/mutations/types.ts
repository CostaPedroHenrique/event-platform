interface ICreateSubscriberResponse {
  createSubscriber: {
    id: string
  }
}
interface ICreateSubscriberVariables {
  name: string
  email: string
}

export type { ICreateSubscriberResponse, ICreateSubscriberVariables }
