import React from 'react';
import fogaozinho from '../assets/fogaozinho.png';
const QuadradoComConteudo = ({title,descricao}) => {
  return (
    <div style={styles.container}>
      <img 
        src={fogaozinho} 
        alt="Exemplo" 
        style={styles.image} 
      />
      <p style={{...styles.text, fontSize:"30px",fontWeight:"bold"}}>{title}</p>
      <p style={styles.text}>{descricao}</p>
      <div style={{height:"30px"}}></div>
      <button style={styles.button}>Conheça mais esse Serviço</button>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative', // Necessário para posicionar o botão fora do quadrado
    maxWidth:"400px",
    backgroundColor: 'white', // Fundo cinza
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
    padding: '10px',
    boxSizing: 'border-box',
     // Evita que elementos escapem pelos lados
  },
  image: {
    width: '3em',
    height: 'auto',
    maxHeight: '100px',
    objectFit: 'cover',
    borderRadius: '5px',
  },
  text: {
    margin: '10px 0',
    fontSize: '14px',
    textAlign: 'center',
    color: '#333',
  },
  button: {
    position: 'absolute', // Posiciona o botão fora do contêiner
    bottom: '-15px', // Faz o botão escapar pela parte de baixo
    padding: '10px 20px',
    fontSize: '14px',
    backgroundColor: '#34AF22',
    color: '#fff',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#0056b3', // Cor ao passar o mouse
  },
};

export default QuadradoComConteudo;
