import React from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import minhaImagem from '../assets/retangulo.jpg';

import { useState, useEffect } from "react";

const AlinhadoComFoto = ({ texto1, texto2, corBotao1, corBotao2 }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ ...styles.container }}>
      <div style={{ alignItems: "center", justifyItems: "center" }}>
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            width: "12em",
            textAlign: "center",
            marginBottom: "0.5em",
            color: "grey",
          }}
        >
          DR. FOGÃO - ESPECIALISTA EM CONSERTO DE FOGÃO EM MACEIÓ
        </div>

        <div style={{...styles.buttonsContainer, flexDirection: isMobile?'column':'row'}}>
          <a href='https://wa.me/82996900227' target="_blank"
            rel="noopener noreferrer">
            <button style={{ ...styles.button, backgroundColor: corBotao1 }}>
              <FaWhatsapp /> {texto1}
            </button>
          </a>
          <a target="_blank"
            rel="noopener noreferrer"
            href="tel:+5582996900227"> 

          <button style={{ ...styles.button, backgroundColor: corBotao2 }}>
            <FaPhone /> {texto2}
          </button>
          </a>

        </div>
      </div>

      {/* Conditionally render the image */}
      {!isMobile && <img src={minhaImagem} style={{ height: 400 }} />}
    </div>
  );
};


const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '30em',
    background: 'white',
    padding: '10px',
    boxSizing: 'border-box',
  },
  buttonsContainer: {
    display: 'flex',
    marginLeft: "10px",
    gap: '10px', // Adiciona espaço entre os botões
  },
  button: {
    padding: '15px 30px', // Botões mais largos
    fontSize: '16px',
    cursor: 'pointer',
    color: 'white',
    borderRadius: '40px', // Borda arredondada
    border: '0px solid #ccc', // Borda leve
    backgroundColor: '#f0f0f0', // Cor de fundo leve
    transition: 'background-color 0.3s', // Efeito de transição
  },
  buttonHover: {
    backgroundColor: '#e0e0e0', // Cor ao passar o mouse
  },
  image: {
    height: '300px',
    width: '100%',
    objectFit: 'cover',
  },
};


export default AlinhadoComFoto;
