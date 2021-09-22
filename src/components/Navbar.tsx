import React from 'react';
import { User } from '../model/Model';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
//import logo from '../images/stripes.svg';

interface INavBarProps {
    user: User|undefined;
}

export class Navbar extends React.Component<INavBarProps>{

    private onClickOpen() {
        document.getElementById('navbar__secondary')!.classList.add('navbar__vis')
    }

    private onClickClose() {
        document.getElementById('navbar__secondary')!.classList.remove('navbar__vis')
    }

    render(){

        let loginLogOut : any;
        if (this.props.user) {
            loginLogOut = <NavLink to='/logout'>{this.props.user.username}</NavLink>
        } else {
            loginLogOut = <NavLink activeClassName='active' to='/login'>Login</NavLink>
        }

        return(
            <div className='navbar'>
                <a href='/' className='navbar__title'>BookItHotel</a>
                <div>
                    <svg onClick={this.onClickOpen} height="32px" id="menu-btn" className="open" viewBox="0 0 32 32">
                        <path fill="white" d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/>
                    </svg>
                </div>
                <div id="navbar__secondary" className='navbar__secondary'>
                    <svg onClick={this.onClickClose} viewBox="0 0 24 24" id="exit-btn" className="exit">
                        <path id="exit" fill="white" d="M14.8,12l3.6-3.6c0.8-0.8,0.8-2,0-2.8c-0.8-0.8-2-0.8-2.8,0L12,9.2L8.4,5.6c-0.8-0.8-2-0.8-2.8,0   c-0.8,0.8-0.8,2,0,2.8L9.2,12l-3.6,3.6c-0.8,0.8-0.8,2,0,2.8C6,18.8,6.5,19,7,19s1-0.2,1.4-0.6l3.6-3.6l3.6,3.6   C16,18.8,16.5,19,17,19s1-0.2,1.4-0.6c0.8-0.8,0.8-2,0-2.8L14.8,12z" />
                    </svg>
                    <ul>
                        <li><NavLink activeClassName='active' exact to='/'>Home</NavLink></li>
                        <li><NavLink activeClassName='active' exact to='/profile'>Profile</NavLink></li>
                        <li><NavLink activeClassName='active' exact to='/spaces'>Spaces</NavLink></li>
                        <li className='navbar__sub'>
                            <NavLink activeClassName='active' to='/services'>Services</NavLink>
                            <div className="navbar__submenu">
                                <ul>
                                    <li><a href="/research">Flights</a></li>
                                    <li><a href="/deployment">Transport</a></li>
                                    <li><a href="/">Hotels</a></li>
                                </ul>
                                <p>We offer a variety of services that will met your every need.</p>
                            </div>
                        </li>
                        <li>{loginLogOut}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

//<span className='navbar__logo'><img src={logo} alt='logo' style={{height:'2em', width:'2em'}}></img></span>