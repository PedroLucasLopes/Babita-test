import { render } from '@testing-library/react';
import React, { Component } from 'react';

// Import CSS
import './login.css'

// Import imagens da pasta
import logo from "./images/logo-think.png"
import login from "./images/login-think.png"
import user from "./images/user-think.png"
import password from "./images/password-think.png"
import download from "./images/download-think.png"
import search from "./images/search-think.png"
import exit from "./images/exit-think.png"

export default class LoginPage extends Component {

    render() {
        return (

        <div className="login">

            <div class="header">

                <img src={logo} className="headerLogo"/>

                    <ul>
                        <li>
                            <img src={download} className="headerIcon"></img>
                        </li>

                        <li>
                            <a href="#" className="liLink">Download de arquivos</a>
                        </li>

                        <li>
                            <img src={search} className="headerIcon"></img>
                        </li>

                        <li>
                            <a href="#" className="liLink">Consultas</a>
                        </li>
                    </ul>

                    <ul className="endHeader">
                        <li>
                            <img src={exit} className="headerIcon"></img>
                        </li>

                        <li>
                            <a href="#" className="liLink center">Sair</a>
                        </li>
                    </ul>
                </div>

            <div className="main">

                <h1>THINK FORNECEDOR</h1>
                
                <div className="inputContainer">
                    <img src={user} className="inputIcon"/>
                    <input type="text" placeholder="Usuário" ></input>
                </div>
 
                <div className="inputContainer">
                    <img src={password} className="inputIcon"/>
                    <input type="password" placeholder="Senha"></input>
                </div>

                <div className="loginContainer">
                    <a href="/" className="loginLink">LOGIN</a>
                    <img src={login} className="loginIcon"/>
                </div>

                <a href="#">
                    <img src={logo} className="logoIcon"/>
                </a>

            </div>

        </div>
        )
    }
}