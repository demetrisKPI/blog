import Layout from '../../components/Layout'
import axios from 'axios'
import { GetServerSideProps } from 'next'
import styled from 'styled-components';
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import fetchAllPosts from '../../store/actions/posts'
import { useEffect } from 'react'

const AllPosts = ({ posts }) => {
	const dispatch = useDispatch();
	
	useEffect(() => {
		dispatch(fetchAllPosts(posts))
	}, []);

  return (
    <Layout>
      <Header>These are the posts</Header>
      <Main>
      <ul>
        {posts.map(({ title, body, id }: { title: string, body: string, id: number }) => {
          if (title && body && id) return (
						<Post key={id}>
							<Link href={`/posts/${id}`}>
                <h3>{title}</h3>
              </Link>
							<p>{body}</p>
						</Post>
          )
        })}
      </ul>
      </Main>
    </Layout>
  )
}

export default AllPosts;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get('https://simple-blog-api.crew.red/posts')

  if (res.data) {
    return {
      props: {
        posts: res.data
      }
    }
  } else {
    return {
      props: {
        notFound: true
      }
    }    
  }
}

const Main = styled.main`
  padding: 40px;
  padding-top: 0px;
`

const Post = styled.li`
  padding: 10px;
`

export const Header = styled.h2`
  color: purple;
  padding: 20px 0px 0px 40px;
`
