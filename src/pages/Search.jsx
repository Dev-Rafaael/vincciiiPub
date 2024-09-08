import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classes from './Search.module.css'
import { Link } from 'react-router-dom';
import imageMap from '../utils/imageMap'; // Ajuste o caminho conforme necessário
const PesquisaPacotes = () => {
  const [query, setQuery] = useState('');
  const [pacotes, setPacotes] = useState([]);

  useEffect(() => {
    const fetchPacotes = async () => {
      try {
        const response = await axios.get('http://localhost/ECOMMERCE-PUB/my-ecommerce-backend/api/searchPacotes.php', { params: { search: query } });
        setPacotes(response.data);
      } catch (error) {
        console.error('Erro ao buscar pacotes:', error);
      }
    };

    if (query.length > 2) { // Evita chamadas com menos de 3 caracteres
      fetchPacotes();
    } else {
      setPacotes([]);
    }
  }, [query]);
  return (
    <>
    <section className={classes.pesquisaSection}>
    <div className={classes.navPesquisa}>
          <h1>IDENTIFICAÇÃO</h1>
      </div>
    <div>
      <input
        type="text"
        placeholder="Pesquise pacotes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
     <div>
        {pacotes.length > 0 ? (
          pacotes.map((pacote) => (
            <div key={pacote.id}>
              <Link to={`/Orçamento/${encodeURIComponent(pacote.title)}`}>
                <h3>{pacote.title}</h3>
              </Link>
              {/* Adicione mais detalhes conforme necessário */}
              <div className={classes.img}>
              <img src={imageMap[pacote.img]} alt={pacote.title} />
            </div>
            <div className={classes.price}>
              <p>{pacote.price}</p>
            </div>
            </div>
            
          ))
        ) : (
          <p>Nenhum pacote encontrado</p>
        )}
      </div>
    </div>
    </section>
    </>
  );
};

export default PesquisaPacotes;
