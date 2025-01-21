import React from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'; // Importando os ícones das redes sociais

const RedesSociais = () => {
  const redes = [
    { nome: 'WhatsApp', icone: <FaWhatsapp size={80} marginTop={20} marginBottom={20} />, cor: '#25D366', link: 'https://wa.me/82999995956' },
  
  ];

  return (
    <div style={styles.container}>
      {redes.map((rede, index) => (
        <a
          key={index}
          href={rede.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...styles.button, backgroundColor: rede.cor }}
          title={rede.nome}
        >
          {rede.icone}
        </a>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    gap: '15px',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '24px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
  },
  buttonHover: {
    transform: 'scale(1.1)',
    boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.3)',
  },
};

export default RedesSociais;
