import React from 'react';
import styles from './buscador.module.scss';
import { CgSearch } from 'react-icons/cg';

interface IProps {
    busca: string,
    setBusca: React.Dispatch<React.SetStateAction<string>>
}

export default function Buscador({busca, setBusca}: IProps) {
  return (
    <div className={styles.buscador}>
      <input 
        value={busca}
        onChange={evento => setBusca(evento.target.value)}
        placeholder="buscar"
      />
      <CgSearch
        size={20}
        color='#4C4D5E'
      />
    </div>
  );
}