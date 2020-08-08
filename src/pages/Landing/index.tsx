import React from 'react';

import logoImg from '../../assents/imagens/logo.svg';
import landingImg from '../../assents/imagens/landing.svg';

import studyIcon from '../../assents/imagens/icons/study.svg';
import giveClassesIcon from '../../assents/imagens/icons/give-classes.svg';
import purpleHeartIcon from '../../assents/imagens/icons/purple-heart.svg';

import './styles.css';

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img src={landingImg} alt="plataforma de estudos" className="hero-image"/>

                <div className="buttons-container">
                    <a href="" className="study">
                        <img src={studyIcon} alt="estudar"/>
                        Estudar
                    </a>

                    <a href="" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar aulas"/>
                        Dar aulas
                    </a>
                </div>

                <span className="total-connections">
                    Total de 200 conexões realizadas <img src={purpleHeartIcon} alt="Coração roxo"/>
                </span>
            </div>
        </div>
    )
}

export default Landing;