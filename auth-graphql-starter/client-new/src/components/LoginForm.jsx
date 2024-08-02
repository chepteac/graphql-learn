import AuthForm from './AuthForm';
import {useMutation} from '@apollo/client';
import loginMutation from '../mutations/login';
import query from '../queries/current-user';

export default function LoginForm() {
  const [login] = useMutation(loginMutation);

  return (
    <div>
      <h3>Login</h3>
      <AuthForm
        submitHandler={({email, password}) => {
          login({variables: {email, password}, refetchQueries: [{query}]});
        }}
      />
    </div>
  );
}
