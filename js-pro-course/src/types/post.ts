export interface IPost {
    id: number
    image?: string
    text: string
    date: any
    lesson_num: number
    title: string
    author: number
    liked?: boolean
    marked?: boolean
}