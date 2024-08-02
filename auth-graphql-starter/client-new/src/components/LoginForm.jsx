import AuthForm from './AuthForm';
import {useMutation} from '@apollo/client';
import loginMutation from '../mutations/login';

export default function LoginForm() {
  const [login] = useMutation(loginMutation);

  return (
    <div>
      <h3>Login</h3>
      <AuthForm />
    </div>
  );
}
