import AuthForm from './AuthForm';
import {useMutation} from '@apollo/client';
import signupMutation from '../mutations/signup';

export default function SignupForm() {
  const [signup] = useMutation(signupMutation);

  return (
    <div>
      <h3>Sign up</h3>
      <AuthForm />
    </div>
  );
}
