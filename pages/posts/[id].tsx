import Layout from '../../components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { PostId, Posts } from '../../types'

const PostPage = ({ id }) => {
	//@ts-ignore
	const posts: Posts = useSelector(state => state.posts.posts);
	const [post, setPost] = useState<PostId>({ title: '', body: '', id: -1 });
	
	useEffect(() => {		
		console.log(posts);
		for (let i in posts) {
			if (posts[i].id == id) {
				setPost(posts[i]);
			}
		}
	}, [posts])

  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>
      <Article>
				<Header>{post.title}</Header>
				<div>{post.body}</div>        
				<Link href='/'>
					<StyledLink>Back to home</StyledLink>
				</Link>
      </Article>
    </Layout>
  )
}

export default PostPage;

PostPage.getInitialProps = async ctx => {
	return {
		id: parseInt(ctx.query.id),
	};
};

const StyledLink = styled.p`
	width: 153px;
	padding: 10px;
	border: 2px solid purple;
	border-radius: 5px;
	color: purple;
	cursor: pointer;
`

const Article = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 100px; 	
`
const Header = styled.h2`
  color: purple;
`
