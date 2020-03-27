import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import herosImage from '../../assets/heroes.png';
import { FiLogIn } from 'react-icons/fi';

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />

                <form>
                    <h1>Faca seu logon</h1>

                    <input placeholder="Sua ID"/>
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={24} color="#e02041"/>
                        Nao tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={herosImage} alt="Heroes" />
        </div>
    );
}