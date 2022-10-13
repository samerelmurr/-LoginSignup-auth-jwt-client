import axios from 'axios';
import { Link } from 'react-router-dom';

const NavBar = (props: { name: string, setName: (name: string) => void }) => {
    
    const logout = async () => {
        await axios.post('http://localhost:8000/api/logout', {}, {withCredentials: true});
        props.setName('');
    }

  return (
    <>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Login App</Link>
                <div>
                    {(props.name === null || props.name === '') ?
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Login</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/signup">Signup</Link>
                            </li>
                        </ul> 
                        :	
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/" onClick={logout}>Logout</Link>
                            </li>
                        </ul>
                    }
                </div>
            </div>
        </nav>
    </>
  )
}

export default NavBar;