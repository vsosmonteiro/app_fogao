import React from 'react';
import { FaWhatsapp,FaPhone} from 'react-icons/fa'; 
import minhaImagem from '../assets/retangulo.jpg';

const AlinhadoComFoto = ({texto1,texto2,corBotao1,corBotao2}) => {
  return (
    <div style={{...styles.container}}>
   
      <div style={{alignItems:"center",justifyItems:"center"}}>
        <div style={{fontSize:32, fontWeight:700, width:"12em", textAlign:"center", marginBottom:"0.5em",color:"grey"}}>
          DR. FOGÃO -  ESPECIALISTA EM CONSERTO DE FOGÃO EM MACEIÓ
        </div>
      
      <div style={styles.buttonsContainer}>
        <button style={{...styles.button,backgroundColor:corBotao1}}>  <FaWhatsapp/> {texto1}</button>
        <button style={{...styles.button,backgroundColor:corBotao2}}> <FaPhone></FaPhone> {texto2}</button>
      </div>
      
      </div>
      <img src={minhaImagem} style={{height:400}}></img>
      
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height:'30em',
    background:'white',
    padding: '10px',
    boxSizing: 'border-box',
  },
  buttonsContainer: {
    display: 'flex',
    marginLeft:"10px",
    gap: '10px', // Adiciona espaço entre os botões
  },
  button: {
    padding: '15px 30px', // Botões mais largos
    fontSize: '16px',
    cursor: 'pointer',
    color:'white',
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
