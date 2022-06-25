import React, { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCreateSubscribeMutation } from '../../../../graphql/server/subscriber/mutations/createSubscriber'

const NewsLetter = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [createSubscriber, { loading }] = useCreateSubscribeMutation()

  const handleSubscribe = async (event: FormEvent) => {
    event.preventDefault()

    await createSubscriber({
      variables: {
        name: name,
        email: email
      }
    })
    navigate('/event')
  }
  return (
    <div className="p-8 bg-gray-700 border border-gray-500 rounded">
      <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>
      <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
        <input
          type="text"
          placeholder="Seu nome completo"
          className="bg-gray-900 p-5 h-14 rounded"
          onChange={event => setName(event.target.value)}
        />
        <input
          type="email"
          placeholder="Digite seu email"
          className="bg-gray-900 px-5 h-14 rounded"
          onChange={event => setEmail(event.target.value)}
        />
        <button
          disabled={loading}
          type="submit"
          className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
        >
          Garantir minha vaga
        </button>
      </form>
    </div>
  )
}

export default NewsLetter
