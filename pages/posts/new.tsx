import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Layout from '../../components/Layout'
import { Header } from './'
import { useDispatch } from 'react-redux'
import { addPost } from '../../store/actions/addPost'
import * as Yup from 'yup'

const SubmitSchema = Yup.object().shape({
	title: Yup.string()
		.min(2, 'Too Short!')
		.max(40, 'Too Long!')
		.required('Required'),
	body: Yup.string()
		.min(2, 'Too Short!')
		.max(500, 'Too Long!')
		.required('Required')
});

const AddPost = () => {
  const dispatch = useDispatch();

  return (
    <Layout>
      <Header>Submit your post</Header>
      <Formik
				validationSchema={SubmitSchema}
        initialValues={{ title: '', body: '' }}
        onSubmit={values => {
          dispatch(addPost(values));
        }}
				>	
        {({ errors, touched }) => (
          <StyledForm>
            <StyledField type="input" name="title" placeholder="Title..." />
						{errors.title && touched.title ? (
             <Error>{errors.title}</Error>
           	) : null}
						<StyledField 
							type="textarea" 
							component="textarea" 
							name="body" 
							placeholder="Write your post here..." />
						{errors.body && touched.body ? (
             <Error>{errors.body}</Error>
           	) : null}
            <StyledButton type="submit">
              Submit
            </StyledButton>
          </StyledForm>
				)}
      </Formik>
    </Layout>
  )
};

export default AddPost;

const StyledForm = styled(Form)`
	display: flex;
	flex-direction: column;
	align-items:left;
	width: 80%;
	padding: 20px;
	margin: 20px;
	font-family: Montserrat;
`
const StyledField = styled(Field)`
	padding: 20px;
	margin: 20px;
`
const StyledButton = styled.button`
	padding: 10px;
	margin: 20px 0px;
	border: 2px solid purple;
	border-radius: 5px;
	color: purple;
	cursor: pointer;
	width: 70px;
	:focus {
		outline: none;
	}
`
const Error = styled.div`
	color: red
`