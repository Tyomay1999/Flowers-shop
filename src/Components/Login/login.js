import React, { useState} from 'react';
import loginModule from './login.module.scss';
import './button.css';
import {TextField} from "@material-ui/core";
import { useSelector } from "react-redux";

const Login = () => {
    const [isActive, changeActive] = useState(false);
    const darkOrLight = useSelector(state => state?.changeMode.darkOrLight)
    // const [registerErrorMessage, setRegisterErrorMessage] = useState('');
    const [loginErrorMessage ] = useState('');//setLoginErrorMessage
    const [loading, setLoading] = useState(false)
    const [checked, isChecked] = useState(false);
    const [language] = useState('EN');//setLanguage


    return (
        <div className={darkOrLight ? loginModule.xDark : loginModule.x}>
            <div className={darkOrLight ? loginModule.loginDark : loginModule.login}>
                <div
                    className={`${isActive ? `${loginModule.container} ${loginModule['right-panel-active']}`: `${loginModule.container}`}`}
                    id={loginModule.container}
                >
                    <div className={`${loginModule['form-container']} ${loginModule['sign-up-container']}`}>
                        <div className={loginModule.form}>
                            <h1>{(language === 'EN') ? "Register" : (language === 'RU') ? "Регистрация" : "Գրանցվել"}</h1>
                            <TextField
                                className={loginModule.inputDesign}
                                type='email'
                                label='Email'
                            />
                            <TextField
                                className={loginModule.inputDesign}
                                type='password'
                                label='Password'
                                helperText="Password must be more than 8 letters"
                            />
                            <TextField
                                className={loginModule.inputDesign}
                                type='password'
                                label='Confirm Password'
                                helperText='Passwords must match'
                            />
                            <button
                                className={loginModule.fill1}
                                // disabled={conPassword ? false : true}
                                onClick={() => {
                                    setLoading(!loading);
                                    // checkPassword()
                                }}
                            >
                                {(language === 'EN') ? "Confirm Register" : (language === 'RU') ? "Регистрация" : "Գրանցվել"}
                            </button>
                        </div>
                    </div>
                    <div className={`${loginModule['form-container']} ${loginModule['sign-in-container']}`}>
                        <div className={loginModule.form}>
                            <h1>{(language === 'EN') ? "Login" : (language === 'RU') ? "Авторизоваться" : "Մուտք"}</h1>
                            <TextField
                                className={loginModule.inputDesign}
                                type='email'
                                label='Email'
                                helperText=''
                            />
                            <TextField
                                className={loginModule.inputDesign}
                                type='password'
                                label='Password'
                                helperText="Password must be more than 8 letters"
                                color='primary'
                            />
                            <form className={loginModule.rememberMe} onClick={() => {
                                isChecked(!checked)
                            }}>
                                <input
                                    type='checkbox'
                                    id='remember'
                                    onChange={() => {
                                        isChecked(!checked)
                                    }}
                                />

                                <label htmlFor='remember'>{(language === 'EN') ? "Remember me?" : (language === 'RU') ? "Запомнить меня?" : "Հիշե՞լ ինձ"}</label>
                            </form>
                            <p className={loginModule.errore}>{loginErrorMessage}</p>
                            <button
                                className={loginModule.fill1}
                                // disabled={(email && password) ? false : true}
                                // onClick={() => {
                                //     if (password && email) {
                                //         setLoading(!loading);
                                //         chackUser({
                                //             email,
                                //             password,
                                //             setLoading,
                                //             setLoginErrorMessage,
                                //             history,
                                //             checked
                                //         });
                                //     } else {
                                //         setLoginErrorMessage('Check your username or password or register');
                                //     }
                                // }}
                            >
                                {(language === 'EN') ? "Login" : (language === 'RU') ? "Авторизоваться" : "Մուտք"}
                            </button>
                        </div>
                    </div>
                    <div className={loginModule['overlay-container']}>
                        <div className={darkOrLight ? loginModule.overlayDark : loginModule.overlay}>
                            <div className={darkOrLight ? loginModule['bg-bubblesDark'] : loginModule['bg-bubbles']}>
                                <li/>
                                <li/>
                                <li/>
                                <li/>
                                <li/>
                                <li/>
                                <li/>
                                <li/>
                                <li/>
                                <li/>
                            </div>

                            <div className={`${loginModule['overlay-panel']} ${loginModule['overlay-left']}`}>
                                <p>
                                    {(language === 'EN') ? "To register, enter your personal data and sign in to the system" : (language === 'RU') ? "Для регистрации вводите свои личные данные и осуществите входите в систему" : "Գրանցվելու համար մուտքագրեք ձեր անձնական տվյալները և մուտք գործեք համակարգ"}
                                </p>
                                <button
                                    className={darkOrLight? loginModule.fillDark : loginModule.fill}
                                    id='signIn'
                                    onClick={() => {
                                        if (loading) {
                                            setLoading(false)
                                            changeActive(!isActive)
                                        } else {
                                            changeActive(!isActive)
                                        }
                                    }}
                                >
                                    {(language === 'EN') ? "Sign in" : (language === 'RU') ? "Войти в систему" : "Մուտք գործել"}
                                </button>
                            </div>
                            <div className={`${loginModule['overlay-panel']} ${loginModule['overlay-right']}`}>
                                <h1>
                                    {(language === 'EN') ? "Hello, Friend!" : (language === 'RU') ? "Привет!" : "Ողջույն!"}
                                </h1>
                                <p>
                                    {(language === 'EN')
                                        ? "Enter your personal details and start testing your skills with us"
                                        : (language === 'RU')
                                            ? "Введите свои личные данные и начните проверять свои навыки в месте с нами"
                                            : "Մուտքագրեք ձեր անձնական տվյալները և սկսեք ստուգել ձեր հմտությունները մեզ հետ"}
                                </p>

                                <button
                                    className={darkOrLight? loginModule.fillDark : loginModule.fill}
                                    id="signUp"
                                    onClick={() => {
                                        if (loading) {
                                            setLoading(false)
                                            changeActive(!isActive)
                                        } else {
                                            changeActive(!isActive)
                                        }
                                    }}
                                >
                                    {(language === 'EN') ? "Register" : (language === 'RU') ? "Регистрация" : "Գրանցվել"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Login;

