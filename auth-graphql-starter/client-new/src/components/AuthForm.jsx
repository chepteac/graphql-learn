import {useState} from 'react';

export default function AuthForm({submitHandler, errors}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="row">
      <form
        className="col s6"
        onSubmit={e => {
          e.preventDefault();
          submitHandler({email, password});
        }}
      >
        <div className="input-field">
          <input
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="input-field">
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="errors">
          {errors.map(error => (
            <div key={error}>{error}</div>
          ))}
        </div>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}
