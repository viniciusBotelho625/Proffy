import React from 'react';

import whatsappIcon from '../../assents/imagens/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/58275652?s=460&u=d0e6003dcb493d1ff1017455897ce7b6607cb7e4&v=4" alt="Vinicius Botelho"/>
                <div>
                    <strong>Vinicius Botelho</strong>
                    <span>Química</span>
                </div>
            </header>
        
            <p>
                Química é a ciência que estuda a composição, estrutura, propriedades da matéria. 
                <br></br>
                <br></br>
                Com isso as mudanças sofridas por ela durante as reações químicas e a sua relação com a energia. 
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="WhatsApp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;