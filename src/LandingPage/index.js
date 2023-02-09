import React, { useState } from "react";
import './style.css';


export default function LandingPage() {

  const [tema, setTema] = useState(true);

  function alterarTema() {
    setTema(!tema);
  }

  return (
    <div className={tema ? "modo-claro" : "modo-escuro"}>
      <header>
        <div>
          <div className="limitar-secao itens-topo">
            <img className="logo" src="./assets/barbearia-logo.png" alt="logo" />
            <button onClick={alterarTema}>
              <div>
                <img src={tema ? "./assets/moon.png" : "./assets/sun.png"} alt="" />
                <span className={tema ? "modo-claro" : "modo-escuro"}>{tema ? 'Dark' : 'Light'}</span>
              </div>
            </button>
          </div>
        </div>
      </header >

      <section className="secao-banner">
        <div className="banner" ></div>
      </section>

      <section className="secao-textos">
        <div className="texto">
          <h1>
            Bem-vindo a Barber Shop
          </h1>
          <p className="sobre negrito">
            Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.
          </p>
          <p className="sobre">
            Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.
          </p>
          <p className="assinatura">
            S. Kelly
          </p>
        </div>
      </section>
    </div>
  );
}