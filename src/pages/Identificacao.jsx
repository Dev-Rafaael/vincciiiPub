import React, { useState, useContext } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import classes from './Identificação.module.css';
import { AccountContext } from '../contexts/AccountContext';
import imageMap from '../utils/imageMap'; // Ajuste o caminho conforme necessári

const formatTitleForURL = (title) => {
  return title.toLowerCase().replace(/\s+/g, '-');
};

const Identificação = () => {
  const [cpf, SetCPF] = useState("");
  const [nomeCompleto, SetNomeCompleto] = useState("");
  const [email, SetEmail] = useState("");
  const [senha, SetSenha] = useState("");
  const [sexo, SetSexo] = useState("");
  const [telefone, SetTelefone] = useState("");
  const [dataNascimento, SetDataNascimento] = useState("");
  const { addToAccount } = useContext(AccountContext);
  const navigate = useNavigate();
  const location = useLocation();
  
  const { item, horario, convidados, bartenders, valorTotalFormatado } = location.state || {};

  if (!item) {
    return <div>Nenhum item foi selecionado.</div>;
  }

 
  const breadcrumbs = [
    { label: item.title, url: `/Orçamento/${formatTitleForURL(item.title)}` },
    { label: 'Identificação', url: '/Identificação/' },
    { label: 'Checkout', url: '#' }
  ];

  const handleContratarClick = async () => {
    if (!horario || !convidados || !bartenders) {
      alert('Por favor, selecione todas as opções antes de continuar.');
      return;
    }

    const itemParaConta = {
      cpf,
      nomeCompleto,
      email,
      sexo,
      telefone,
      dataNascimento,
    };
    addToAccount(itemParaConta);

    try {
      const response = await fetch('http://localhost/ECOMMERCE-PUB/my-ecommerce-backend/api/service.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(itemParaConta),
      });
      const data = await response.json();
      console.log('Dados enviados:', data);
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    }

    navigate('/Checkout/', { 
      state: { 
        item,
        horario,
        convidados,
        bartenders,
        valorTotalFormatado
      }  
    });
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
                <input type="text" name="cpf" id="cpf" placeholder='Digite Seu CPF' value={cpf} onChange={(e) => SetCPF(e.target.value)} required />
                
                <label htmlFor="nome">Nome Completo</label>
                <input type="text" name="nome" id="nome" placeholder='Digite Seu Nome Completo' value={nomeCompleto} onChange={(e) => SetNomeCompleto(e.target.value)} required />
                
                <label htmlFor="email">E-Mail</label>
                <input type="email" name="email" id="email" placeholder='Digite Seu E-Mail' value={email} onChange={(e) => SetEmail(e.target.value)} required />
                
                <label htmlFor="senha">Senha</label>
                <input type="password" name="senha" id="senha" placeholder='Digite uma senha' value={senha} onChange={(e) => SetSenha(e.target.value)} required />
                
                <label htmlFor="sexo">Sexo</label>
                <select name="sexo" id="sexo" value={sexo} onChange={(e) => SetSexo(e.target.value)} required>
                  <option value="" disabled>Selecione uma Opção</option>
                  <option value="masculino">Masculino</option>
                  <option value="feminino">Feminino</option>
                </select>
                
                <label htmlFor="telefone">DDD + Celular</label>
                <input type="text" name="telefone" id="telefone" placeholder='(11) 91092-8922' value={telefone} onChange={(e) => SetTelefone(e.target.value)} required />
                
                <label htmlFor="data">Data de Nascimento</label>
                <input type="date" name="data" id="data" value={dataNascimento} onChange={(e) => SetDataNascimento(e.target.value)} required />
              </form>
            </div>
            <div className={classes.InfoCadastro}>
              <p>Utilizamos seus dados pessoais somente para o cadastro em nossa plataforma, que nos permite lhe prestar nossos serviços.</p>
            </div>
            <div className={classes.btn}>
              <button onClick={handleContratarClick}>CONTRATAR</button>
            </div>
          </div>
          <section className={classes.InfoPacote}>
            <div className={classes.imgPacote}>
            <img src={imageMap[item.img]} alt={item.title} />
            </div> 
            <h4>{item.title}</h4> 
            <p>{item.description}</p>
            <div className={classes.itemPrice}>
              <p>R$ {valorTotalFormatado}</p>
            </div>
            <div className={classes.infoAdicionais}>
              <h2>Informações adicionais:</h2>
              <div className={classes.info}>
                <p>Horario Da Festa:</p>
                <p>{horario} Horas</p>
              </div>
              <div className={classes.info}>
                <p>Nº Bartenders:</p>
                <p>{bartenders} Bartenders</p>
              </div>
              <div className={classes.info}>
                <p>Nº Convidados:</p>
                <p>{convidados} Convidados</p>
              </div>
            </div>
          </section>    
        </div>
      </div>
    </>
  );
};

export default Identificação;


