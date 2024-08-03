import AuthForm from './AuthForm';
import {useMutation} from '@apollo/client';
import signupMutation from '../mutations/signup';
import query from '../queries/current-user';
import {useState} from 'react';

export default function SignupForm() {
  const [errors, setErrors] = useState([]);
  const [signup] = useMutation(signupMutation);

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
