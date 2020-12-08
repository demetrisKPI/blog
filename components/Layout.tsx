import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components';

export default function Layout({ children }) {
	return (
		<GlobalStyle>
			<Head>
				<title>My Blog</title>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="preconnect" href="https://fonts.gstatic.com"/>
				<link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"/>
			</Head>
			<Nav>
				<Link href='/'>
					<StyledLink>Home</StyledLink>
				</Link>
				<Link href='/posts'>
					<StyledLink>Posts</StyledLink>
				</Link>
				<Link href='/posts/new'>
					<StyledLink>Add Post</StyledLink>
				</Link>
			</Nav>
			<div>{children}</div>
		</GlobalStyle>
	);
}

const GlobalStyle = styled.div`
	margin: 0;
	padding: 0;
	font-family: Montserrat;
	font-size: 18px;
`

const StyledLink = styled.p`
	padding: 10px;
	border: 2px solid purple;
	border-radius: 5px;
	color: purple;
	cursor: pointer;
`

const Nav = styled.nav`
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin: 1rem;
	border-bottom: 2px solid purple;
	position: relative;
	margin: 0;
	box-shadow: 0 6px 8px 0 rgba(0,0,0,0.24), 0 15px 25px 0 rgba(0,0,0,0.19);
`
