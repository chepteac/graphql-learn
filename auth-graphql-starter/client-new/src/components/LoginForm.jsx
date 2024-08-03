import AuthForm from './AuthForm';
import {useMutation, useQuery} from '@apollo/client';
import loginMutation from '../mutations/login';
import query from '../queries/current-user';
import {useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';

export default function LoginForm() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  const [login] = useMutation(loginMutation);
  const {data, loading} = useQuery(query);
  const prevUser = useRef(data.user);

  if (!prevUser.current && data.user && !loading) {
    navigate('/dashboard');
  }

  prevUser.current = data.user;

  return (
    <div>
      <h3>Login</h3>
      <AuthForm
        errors={errors}
        submitHandler={({email, password}) => {
          login({
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
