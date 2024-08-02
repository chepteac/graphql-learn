import {useId, useState} from 'react';

export default function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailInputId = useId();
  const passwordInputId = useId();

  return (
    <div className="row">
      <form className="col s6">
        <div className="input-field">
          <label htmlFor={emailInputId}>Email</label>
          <input
            id={emailInputId}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor={passwordInputId}>Password</label>
          <input
            id={passwordInputId}
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}
