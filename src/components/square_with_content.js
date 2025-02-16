import React from 'react';
import { Link } from 'react-router-dom';
const QuadradoComConteudo = ({title,descricao,imagem,desc2,title2}) => {
  return (
    <div style={styles.container}>
      <img 
        src={imagem} 
        alt="Exemplo" 
        style={styles.image} 
      />
      <p style={{...styles.text, fontSize:"30px",fontWeight:"bold"}}>{title}</p>
      <p style={styles.text}>{descricao}</p>
      <div style={{height:"30px"}}></div>
      <button style={styles.button}> <Link to={'/service'} state={{desc:desc2,title:title2}}> Conheça mais esse Serviço </Link> </button>
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
    minWidth:'100px',
    minHeight:'270px',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
    padding: '10px',
    marginLeft:'10px',
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
