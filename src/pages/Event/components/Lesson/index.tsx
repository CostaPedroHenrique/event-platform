import React from 'react'
import { CheckCircle, Lock } from 'phosphor-react'
import { ILessonProps } from './types'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom'
import classnames from 'classnames'

const Lesson = ({ title, availableAt, type, slug }: ILessonProps) => {
  const { slug: lessonSlug } = useParams<{ slug: string }>()
  const isLessonAvailable = isPast(availableAt)
  const availableDateFormated = format(
    availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    { locale: ptBR }
  )

  const isActiveLesson = slug === lessonSlug

  return (
    <Link to={`/event/lesson/${slug}`} className="group">
      <span className="text-gray-300">{availableDateFormated}</span>
      <div
        className={classnames(
          'rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500',
          {
            'bg-green-500': isActiveLesson
          }
        )}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={classnames(
                'flex items-center gap-2 text-sm  font-medium',
                {
                  'text-white': isActiveLesson,
                  'text-blue-500': !isActiveLesson
                }
              )}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span
              className={classnames(
                'flex items-center gap-2 text-sm text-orange-500 font-medium'
              )}
            >
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span
            className={classnames(
              'text-xs rounded px-2 py-[0.125rem] text-white border font-bold',
              {
                'border-white': isActiveLesson,
                'border-green-300': !isActiveLesson
              }
            )}
          >
            {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>
        <strong
          className={classnames('mt-5 block', {
            'text-white': isActiveLesson,
            'text-gray-200': !isActiveLesson
          })}
        >
          {title}
        </strong>
      </div>
    </Link>
  )
}

export default Lesson
