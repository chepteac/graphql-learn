import AuthForm from './AuthForm';
import {useMutation, useQuery} from '@apollo/client';
import signupMutation from '../mutations/signup';
import query from '../queries/current-user';
import {useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';

export default function SignupForm() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  const [signup] = useMutation(signupMutation);
  const {data, loading} = useQuery(query);
  const prevUser = useRef(data.user);

  if (!prevUser.current && data.user && !loading) {
    navigate('/dashboard');
  }

  prevUser.current = data.user;

  return (
    <div>
      <h3>Sign up</h3>
      <AuthForm
        errors={errors}
        submitHandler={({email, password}) => {
          signup({
            variables: {email, password},
            refetchQueries: [{query}],
          }).catch(res => {
            setErrors(res.graphQLErrors.map(error => error.message));
          });
        }}
      />
    </div>
  );
}
