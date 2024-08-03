import AuthForm from './AuthForm';
import {useMutation} from '@apollo/client';
import loginMutation from '../mutations/login';
import query from '../queries/current-user';
import {useState} from 'react';

export default function LoginForm() {
  const [errors, setErrors] = useState([]);
  const [login] = useMutation(loginMutation);

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
