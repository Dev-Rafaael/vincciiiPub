import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs'; // Importe o componente Breadcrumbs
import classes from './Identificação.module.css';

// Defina ou importe a lista de itens (menuItems)
const menuItems = [
  { id: 1, title: "Drinks sem álcool", description: "Bartenders para festas em São Paulo", info: "Bartender para festa Open Bar em São Paulo com 12 opções de Drinks com e sem álcool. Opção ideal para servir crianças e adultos.", price: "A partir de R$550,00" },
  { id: 2, title: "Barman + lista de compras", description: "Mão de obra de Barman para festa", info: "Economize, pague apenas pela mão de obra de Barman para festa e receba uma lista sugestiva de compras de acordo com seu cardápio!", price: "A partir de R$1.689,99" },
  { id: 3, title: "Drinks com e sem álcool", description: "Bartenders para festas em São Paulo", info: "6 opções de Drinks Clássicos + Festival de Caipirinhas com 3 frutas (Limão, Maracujá e Morango) e 3 opções de destilados (Vodka, Saquê e Cachaça).", price: "A partir de R$1.889,99" },
  { id: 4, title: "Pacote de Drinks Clássicos", description: "Bartenders para festas em São Paulo", info: "6 opções de Drinks Clássicos + Festival de Caipirinhas com 3 frutas (Limão, Maracujá e Morango) e 3 opções de destilados (Vodka, Saquê e Cachaça).", price: "A partir de R$550,00" },
];

const formatTitleForURL = (title) => {
  return title.toLowerCase().replace(/\s+/g, '-');
};

const Identificação = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { title } = useParams();
  
  const location = useLocation();
  const formattedTitle = formatTitleForURL(location.state?.item?.title || '');
  const { item, horario, convidados, bartenders } = location.state || {};

  if (!item) {
    return <div>Nenhum item foi selecionado.</div>;
  }
  console.log(horario);
  
  const breadcrumbs = [
    { label: 'Orçamento', url: '/Orçamento' },
    { label: item.title, url: `/Serviço/${formatTitleForURL(item.title)}` },
    { label: 'Identificação', url: '#' }
  ];
  const handleContratarClick = () => {
    if (!horario || !convidados || !bartenders) {
      alert('Por favor, selecione todas as opções antes de continuar.');
      return;
    }
    navigate('/Pagamento/', { state: { 
      item,
      horario,
      convidados,
      bartenders 
    }  });
    
  };
  return (
    <>
      <div className={classes.Identificacao}>
        <div className={classes.navIdentificacao}>
          <h1>IDENTIFICAÇÃO</h1>
          <Breadcrumbs paths={breadcrumbs} />
        </div>
        <div className={classes.IdentificacaoContent}>
          <div className={classes.cadastroIdentificacao}>
            <h2>Agora, iremos criar o seu cadastro:</h2>
            <p>Está quase acabando...</p>
            <div className={classes.ContentIdentificacao}>
              <form action="#" className={classes.formIdentificacao}>
                <label htmlFor="cpf">CPF</label>
                <input type="text" name="cpf" id="cpf" placeholder='Digite Seu CPF' required />
                
                <label htmlFor="nome">Nome Completo</label>
                <input type="text" name="nome" id="nome" placeholder='Digite Seu Nome Completo' required />
                
                <label htmlFor="email">E-Mail</label>
                <input type="email" name="email" id="email" placeholder='Digite Seu E-Mail' required />
                
                <label htmlFor="sexo">Sexo</label>
                <select name="sexo" id="sexo" required>
                  <option value="" disabled selected>Selecione uma Opção</option>
                  <option value="masculino">Masculino</option>
                  <option value="feminino">Feminino</option>
                </select>
                
                <label htmlFor="telefone">DDD + Celular</label>
                <input type="text" name="telefone" id="telefone" placeholder='(11) 91092-8922' required />
                
                <label htmlFor="data">Data de Nascimento</label>
                <input type="date" name="data" id="data" required />
              </form>
            </div>
            <div className={classes.InfoCadastro}>
              <p>Utilizamos seus dados pessoais somente para o cadastro em nossa plataforma, que nos permite lhe prestar nossos serviços.</p>
            </div>
            <div className={classes.btn}>
            <button onClick={handleContratarClick}>CONTRATAR</button>
            </div>
          </div>
          <div className={classes.InfoPacote}>
          <div className={classes.imgPacote}>
            <img src={item.img} alt="img" />
          </div> 
            <h4>{item.title}</h4> 
            <p>{item.description}</p>
            <div className={classes.itemPrice}>
              <p>{item.price}</p>
            </div>
            <div className={classes.infoAdicionais}>
            <h2>Informações adicionais:</h2>
            <div className={classes.info}>
            <p>Horario Da Festa:</p>
            <p>{horario} Horas</p>
            </div>
            <div className={classes.info}>
              <p>Nº  Bartenders:</p>
            <p>{bartenders} Bartenders</p>
            </div>
            <div className={classes.info}>
            <p>Nº Convidados:</p>
            <p>{convidados} Convidados</p>
            </div>
          </div>
          </div>    
        </div>
      </div>
    </>
  );
};

export default Identificação;


