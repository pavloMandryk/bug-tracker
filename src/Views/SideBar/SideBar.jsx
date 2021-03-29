import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../Controlers/Redux/authSlice';
import './SideBar.css'

const SideBar = () => {
    const dispatch = useDispatch();

    const {auth} = useSelector(state => state);

    const SignOut = () => {
        dispatch(signOut());
    }
    return (
        <div className="side-bar">
            <Link className="nav-link" to="/"><h1 className="brand">KuriousKitten</h1></Link>
            <ul>
                <li><Link to="/" className="nav-link">Dashboard</Link></li>
                <li><Link to="/viewbugs" className="nav-link">View Bugs</Link></li>
                {auth.admin && <li><Link to="/createbug" className="nav-link">Create Bug</Link></li>}
            </ul>
            <button className="nav-link logout" onClick={SignOut}>Logout</button>
        </div>
    )
}

export default SideBar
