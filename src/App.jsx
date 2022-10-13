import './App.css';
import { Pages } from './pages/pages';
import Components from './components';
import { Routes, Route } from 'react-router-dom';

function App() {


  return (
    <>
      <Components.NavBar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Pages.Login />} />
          <Route path="/signup" element={<Pages.Signup />} />
          <Route path="/home" exact element={<Pages.Home/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
