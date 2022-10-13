import {SyntheticEvent, useState} from 'react'
import axios from 'axios';
import "./Login.css"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirectBool, setRedirect] = useState(false);

  const submit = async (e: SyntheticEvent) => {
      e.preventDefault();

      axios.post('http://localhost:8000/api/login', {
        UserEmail: email,
        UserPassword: password
      }, {withCredentials: true})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

      setRedirect(true);
  }

  if (redirectBool) {
    const urlRedirect: string = `http://localhost:3000/home`;
    window.open(urlRedirect, "_self");
  }
  return (
    <>
        <main className="form-signin w-100 m-auto">
          <form onSubmit={submit}>
              <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
              <input type="email" className="form-control" placeholder="Email address" required
                    onChange={e => setEmail(e.target.value)}
              />

              <input type="password" className="form-control" placeholder="Password" required
                    onChange={e => setPassword(e.target.value)}
              />

              <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
          </form>
        </main>
    </>
  )
}

export default Login;