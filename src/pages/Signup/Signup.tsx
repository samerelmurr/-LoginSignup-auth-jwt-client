import {SyntheticEvent, useState} from 'react'
import axios from 'axios';
import "./Signup.css"

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirectBool, setRedirect] = useState(false);

  const submit = async (e: SyntheticEvent) => {
      e.preventDefault();

      axios.post('http://localhost:8000/api/register', {
        UserName: name,
        UserEmail: email,
        UserPassword: password
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

      setRedirect(true);
  }

  if (redirectBool) {
    const urlRedirect: string = `http://localhost:3000/`;
    window.open(urlRedirect, "_self");
  }
  return (
    <>
      <main className="form-signin w-100 m-auto">
        <form onSubmit={submit}>
          <h1 className="h3 mb-3 fw-normal">Please register</h1>

          <input className="form-control" placeholder="Name" required
                  onChange={e => setName(e.target.value)}
            />

          <input type="email" className="form-control" placeholder="Email address" required
                  onChange={e => setEmail(e.target.value)}
            />

          <input type="password" className="form-control" placeholder="Password" required
                  onChange={e => setPassword(e.target.value)}
            />

          <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
        </form>
      </main>
    </>
  )
}

export default Signup