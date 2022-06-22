import React from 'react'
import { useGetLessons } from '../graphql/server/lesson/queries/getLesson'
import Lesson from './Lesson'
const Sidebar = () => {
  const { data } = useGetLessons()
  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map(lesson => (
          <Lesson
            title={lesson.title}
            availableAt={new Date(lesson.availableAt)}
            slug={lesson.slug}
            type={lesson.lessonType}
            key={lesson.id}
          />
        ))}
      </div>
    </aside>
  )
}

export default Sidebar
