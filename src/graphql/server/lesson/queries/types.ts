interface IGetLessonsResponse {
  lessons: {
    id: string
    title: string
    slug: string
    availableAt: string
    lessonType: 'live' | 'class'
  }[]
}

interface ITeacher {
  name: string
  bio: string
  avatarURL: string
}
interface IGetLessonBySlugVariables {
  slug: string
}
interface IGetLessonBySlugResponse {
  lesson: {
    title: string
    videoId: string
    description: string
    teacher: ITeacher
  }
}

export type {
  IGetLessonsResponse,
  IGetLessonBySlugResponse,
  IGetLessonBySlugVariables
}
