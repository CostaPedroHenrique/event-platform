import { DefaultUi, Player, Youtube } from '@vime/react'
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Lightning,
  Spinner
} from 'phosphor-react'
import React from 'react'
import '@vime/core/themes/default.css'
import { IVideoProps } from './types'
import { useGetLessonBySlug } from '../../../../graphql/server/lesson/queries/getLessonBySlug'

const Video = ({ lessonSlug }: IVideoProps) => {
  const { data } = useGetLessonBySlug({ variables: { slug: lessonSlug } })
  if (!data) {
    return (
      <div className="flex-1">
        <div className="bg-black flex justify-center p-4">
          <div className="flex items-center justify-center h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
            <Spinner size={40} />
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data?.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{data?.lesson.title}</h1>
            {data?.lesson.description}
            <div className="flex  items-center gap-4 mt-6">
              <img
                className="h-16 w-16 rounded-full border-2 border-blue-500"
                src={data?.lesson.teacher.avatarURL}
                alt={data?.lesson.teacher.name}
              />
              <div className="leading-relaxed">
                <strong className="font-bold text-2xl">
                  {data?.lesson.teacher.name}
                </strong>
                <span className="text-gray-200 text-sm block">
                  {data?.lesson.teacher.bio}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href="/teste"
              className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
            >
              <DiscordLogo size={24} /> Comunidade do discord
            </a>
            <a
              href="/teste"
              className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors"
            >
              <Lightning size={24} /> Acesso o desafio
            </a>
          </div>
        </div>
        <div className="gap-8 mt-20 grid grid-cols-2">
          <a
            href="/"
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Material complementar</strong>
              <p className="text-sm text-gray-200 mt-2">
                Acesse o material complementar para acelerar o seu
                desenvolvimento
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
          <a
            href="/"
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gra-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Wallpapers exclusivos</strong>
              <p className="text-sm text-gray-200 mt-2">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
                máquina
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Video