import React from 'react'
import LoginForm from '../../components/form/login'
import style from './login.module.css'

class LoginPage extends React.Component {

    render() {

        return (
            <div className={'container-fluid'}>
                <div className={'row'}>
                    <div className={style.hero}>
                        <LoginForm />
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage
