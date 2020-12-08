declare module 'react-redux' {
	interface DefaultRootState extends initialState {}
}

export type initialState = { posts: Posts }

export type Post = { title: string, body: string }

export interface PostId extends Post { id: number }

export type Posts = PostId[]
