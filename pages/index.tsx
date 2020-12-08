import Layout from '../components/Layout'
import axios from 'axios'
import Link from 'next/link'
import { GetServerSideProps } from 'next'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import fetchAllPosts from '../store/actions/posts'
import { useEffect } from 'react'
import { PostId } from '../types'

const Home = ({ posts }) => {
	const dispatch = useDispatch();
	
	useEffect(() => {
		dispatch(fetchAllPosts(posts))
	}, []);

  return (
    <Layout>
      <Header>These are the latests posts</Header>
      <Main>
      <ul>
        {posts.map(({ title, body, id }: PostId, index) => {
          if (title && body && (index > posts.length - 5)) return (
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

export default Home;

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

const Header = styled.h2`
  color: purple;
  padding: 20px 0px 0px 40px;
`
