import {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import { Pages } from './pages/pages';
import Components from './components';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [name, setName] = useState(''); 

  useEffect(() => {
    console.log(name);
    (async () => {
      const {data} = await axios.get('http://localhost:8000/api/user', {withCredentials: true});
      setName(data.userName);
    })();
  }, [name]);

  return (
    <>
      <Components.NavBar name={name} setName={setName}/> 
      <div className="container">
        <Routes>
          <Route path="/" exact element={<Pages.Login setName={setName}/>} />
          <Route path="/signup" element={<Pages.Signup />} />
          <Route path="/home"  element={<Pages.Home name={name}/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
