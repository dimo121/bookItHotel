import React from 'react';
import { AuthService } from '../services/AuthService';
import { User } from '../model/Model';
import history from '../utils/history';
import './Login.css';


interface LoginProps{
    authService: AuthService,
    setUser: (user:User) => void
}

interface LoginState {
    username: string,
    password: string,
    loginAttempted: boolean,
    loginSuccesful: boolean
}

interface CustomEvent {
    target: HTMLInputElement
}

export class Login extends React.Component<LoginProps,LoginState>{

    state: LoginState = {
        username: '',
        password: '',
        loginAttempted: false,
        loginSuccesful: false
    }

    private async onSubmit(e:React.FormEvent<HTMLFormElement>):Promise<void>{
        e.preventDefault();
        this.setState({loginAttempted: true})
        const result = await this.props.authService.login(
            this.state.username,
            this.state.password
        )
        if (result) {
            this.setState({loginSuccesful: true})
            this.props.setUser(result)
            history.push('./profile')
        } else {
            this.setState({loginSuccesful: false})
            console.log('wrong login')
        }
    }

    private onUserChange(event:CustomEvent){
        this.setState({
            username: event.target.value
        })
    }

    private onPasswordChange(event:CustomEvent){
        this.setState({
            password: event.target.value
        })
    }

    render(){
        let loginMessage:any;
        if (this.state.loginSuccesful) {
            loginMessage = <label>Login successful</label>
        } else if(this.state.loginAttempted){
            loginMessage = <label>Wrong email and password combination</label>
        }

        return (
            <div className='page-container'>
                <div className='login-container'>
                    <div className='login'>
                        <h3>Enter your login details:</h3>
                        <form onSubmit={event => this.onSubmit(event)}>
                            <input  onChange={e => this.onUserChange(e)} 
                                    placeholder='Username...' 
                                    value={this.state.username}/>
                                <br/>   
                            <input  onChange={e => this.onPasswordChange(e)}
                                    placeholder='Password...' 
                                    value={this.state.password} 
                                    type='password'/>
                                <br/>   
                            <button type='submit' >Login</button>
                        </form>
                        {loginMessage}
                    </div>
                </div>
            </div>
        )
    }
}