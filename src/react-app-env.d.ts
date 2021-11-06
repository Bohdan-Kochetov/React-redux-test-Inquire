/// <reference types="react-scripts" />

export interface Post{
  id: number
  title: string
  body: string
}
export interface Comment{
  id: number
  postId: number
  body: string
}
export interface State{
  reducerPost: {
    posts: Post[],
    selectedPost: number,
    handleEdit: boolean
  }
  reducerComments: {
    comments: Comment[],
  }
}
