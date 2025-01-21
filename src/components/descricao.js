import React from 'react';

const TextBlock = ({ descricaoCima, titulo, descricaoBaixo }) => {
  return (
    <div style={styles.container}>
      <div style={styles.descricao1}>{descricaoCima}</div>
      <h1 style={styles.titulo}>{titulo}</h1>
      <p style={styles.descricao2}>{descricaoBaixo}</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px',
  },
  descricao1: {
    fontSize: '20px',
    fontWeight:'700',
    color: 'grey',
    margin: '0px 0',
  },
  descricao2: {
    fontSize: '20px',
    color: 'grey',
    margin: '0px 0',
  },
  titulo: {
    fontSize: '32px',
    fontWeight: '800',
    color: 'grey',
    margin: '10px 0',
  },
};

export default TextBlock;
