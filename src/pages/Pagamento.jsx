
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs'; // Importe o componente Breadcrumbs
import classes from './Pagamento.module.css';

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

const Pagamento = () => {
  const [estados, setEstados] = useState('');
  const [banco, setBanco] = useState('');
  const location = useLocation();
  const formattedTitle = formatTitleForURL(location.state?.item?.title || '');
  const { item, horario, convidados, bartenders } = location.state || {};

  if (!item) {
    return <div>Nenhum item foi selecionado.</div>;
  }
  console.log(horario);
  

  return (
    <>
      <div className={classes.Pagamento}>
        <div className={classes.navPagamento}>
          <h1>PAGAMENTO</h1>
        </div>
        <div className={classes.pagamentoContent}>
          <div className={classes.cadastroPagamento}>
            <h2>Endereço Para Cobrança:</h2>
            <div className={classes.ContentPagamento}>
              <form action="#" className={classes.formPagamento}>
                <label htmlFor="CEP">CEP</label>
                <input type="text" name="CEP" id="CEP" placeholder='CEP' required />
                <div className={classes.inline}> 
                    <div className={classes.estado}>
                    <label htmlFor="estado">Estado</label>
                      <select name="estados" id="estados" value={estados} onChange={(e) => setEstados(e.target.value)} require>
                        <option value="Sao Paulo" disabled selected>São Paulo</option>
                      </select>
                    </div>
                    <div className={classes.cidade}>
                    <label htmlFor="cidade">Cidade</label>
                    <input type="text" name="cidade" id="cidade" placeholder='CIDADE' required />
                 </div>
              </div>
                <label htmlFor="bairro">Bairro</label>
                <input type="text" name="bairro" id="bairro" placeholder='BAIRRO' required />

                <label htmlFor="rua">Rua</label>
                <input type="text" name="rua" id="rua" placeholder='RUA' required />
                
                <div className={classes.inline}> 
                    <div className={classes.numero}>
                    <label htmlFor="numero">Número</label>
                    <input type="text" name="numero" id="numero" placeholder='NUMERO' required /> 
                  </div>
                  <div className={classes.complemento}>
                      <label htmlFor="complemento">Complemento</label>
                      <input type="text" name="complemento" id="complemento" placeholder='COMPLEMENTO' required />
                  </div>
              </div>
              </form>
            </div>
            <div className={classes.tipoPagamento}>
              <h2>Qual A forma de Pagamento?</h2>
              <form action="#" className={classes.formTipoPagamento}>
              <div class="form-check" className={classes.checkboxs}>
                <div className={classes.debito}>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                 CARTÃO DE DÉBITO
                </label>
              </div>
              <div className={classes.credito}>
              <div class="form-check">
                <input class="form-check-input " type="checkbox" value="" id="flexCheckChecked" />
                <label class="form-check-label" for="flexCheckChecked">
                  CARTÃO DE CRÉDITO
                </label>
              </div>
            </div>
          </div>
                <label htmlFor="CpfTitular">CPF DO TITULAR</label>
                <input type="text" name="CpfTitular" id="CpfTitular" placeholder='CPF Do Titular' required />
                
            <div className={classes.inline}> 
                  <div className={classes.numeroCartao}>
                    <label htmlFor="numeroCartao">NÚMERO DO CARTÃO</label>
                    <input type="text" name="numeroCartao" id="numeroCartao" placeholder='---- ---- ---- ----' required />
                </div>
                <div className={classes.banco}>
                <label htmlFor="banco">Banco</label>
                  <select name="estados" id="estados" value={banco} onChange={(e) => setBanco(e.target.value)} require>
                    <option value="" disabled selected >Banco</option>
                    <option value="Banco Do Brasil" >Banco Do Brasil</option>
                    <option value="Itau">Itaú</option>
                    <option value="Inter"  >Inter</option>
                    <option value="Santander">Santander</option>
                    <option value="Bradesco" >Bradesco</option>
                  </select>
              </div>  
            </div>
                <label htmlFor="NomeNoCartao">Nome Impresso No Cartão</label>
                <input type="text" name="NomeNoCartao" id="NomeNoCartao" placeholder='Nome Impresso No Cartão' required />

                <label htmlFor="validade">Data De Validade</label>
                <input type="date" name="validade" id="validade"  required />
                </form>
                <div className={classes.InfoPagamento}>
              <p>Ao concluir a compra, você concorda com o nosso <a href="">termo de adesão</a> , o que automaticamente ativará o seu plano e permitirá que você frequente nossas academias</p>
            </div> 
            </div>
            <div className={classes.btn}>
              <button>FINALIZAR</button>
            </div>
          </div>
      <section className={classes.InfoPacote}>
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
       </section> 
        </div>
      </div>
    </>
  );
};

export default Pagamento;


