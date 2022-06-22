interface ILessonProps {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
}

export type { ILessonProps }
