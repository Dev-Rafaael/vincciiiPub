import React, { useEffect, useState } from 'react';
import classes from './Pacotes.module.css';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';

import imageMap from '../utils/imageMap'; // Ajuste o caminho conforme necessário

function Pacotes() {
  const [menuItems, setMenuItems] = useState([]);

  
  // Função para buscar pacotes do backend
  useEffect(() => {
    const fetchPacotes = async () => {
      try {
        const response = await fetch('http://localhost/ECOMMERCE-PUB/my-ecommerce-backend/api/getPacotes.php'); // URL do seu arquivo PHP
        const data = await response.json();
        setMenuItems(data);
      } catch (error) {
        console.error('Erro ao buscar pacotes:', error);
      }
    };

    fetchPacotes();
  }, []);

  const formatTitleForURL = (title) => {
    return title.toLowerCase().replace(/\s+/g, '-');
  };

  console.log(menuItems);
  
  return (
    <>
      <div className={classes.navPacotes}>
        <h1>PACOTES</h1>
      </div>
      <section className={classes.section}>
        <h1>ENCONTRE AQUI O <span>PACOTE</span> IDEAL PARA A SUA <span>FESTA</span></h1>
        <div className={classes.sectionContainer}>
          {menuItems.map(item => (
            <div className={classes.orcamentoType} key={item.id}>
              <img src={imageMap[item.img]} alt={item.title} />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <div className={classes.orcamentoPreco}>
                <p>{item.price}</p>
              </div>
              <Link 
                to={`/Orçamento/${formatTitleForURL(item.title)}`} 
                state={{ item }} 
              >
                SAIBA MAIS
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Pacotes;


