import {useState, useEffect} from 'react'
import axios from 'axios'

const Home = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    (async () => {
      const {data} = await axios.get('http://localhost:8000/api/user', {withCredentials: true});
      setName(data.userName);
    })();
  }, []);

  localStorage.setItem('name', name);

  return (
    <>
      {name ? 'Hi ' + name : 'You are not logged in'}
    </>
  )
}

export default Home