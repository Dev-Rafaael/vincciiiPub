import React, { useState } from 'react';
import drink3 from '../assets/drink7.jpg';
import drink2 from '../assets/drink6.jpg';
import drink1 from '../assets/drink10.jpg';
import classes from './Home.module.css';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from 'react-modal';
import { FaPlay } from 'react-icons/fa'; // Ícone de play

// Custom Arrows for Slider
const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${classes.customArrow}`}
      style={{ ...style, display: "block", left: "10px" }}
      onClick={onClick}
    />
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${classes.customArrow}`}
      style={{ ...style, display: "block", right: "10px" }}
      onClick={onClick}
    />
  );
};

function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    draggable: true,
  };

  const openModal = () => {
    console.log("Modal aberto");
    setModalIsOpen(true);
  };
  
  const closeModal = () => setModalIsOpen(false);

  return (
    <>
      {/* Slider Section */}
      <div className={classes.home}>
        <Slider {...settings} className={classes.imgHome}>
          <div className={classes.slide}>
            <div className={classes.imgContainer}>
              <img src={drink1} alt="Drink 1" className={classes.img} />
            </div>
          </div>
          <div className={classes.slide}>
            <div className={classes.imgContainer}>
              <img src={drink2} alt="Drink 2" className={classes.img} />
            </div>
          </div>
          <div className={classes.slide}>
            <div className={classes.imgContainer}>
              <img src={drink3} alt="Drink 3" className={classes.img} />
            </div>
          </div>
        </Slider>

        {/* Content Section */}
        <div className={classes.contentHome}>
          <h1>Bem Vindo Ao <span>Vincci PUB</span></h1>
          <h3>Deliciosos Drinks</h3>
          <div className={classes.btn}>
            <Link to="#">Nossos Serviços</Link>
            <Link to="/Orçamento/">Faça Seu Pedido</Link>
          </div>
        </div>

        {/* Video Section */}
        <div className={classes.video}>
          <div className={classes.videoContainer}>
          <div className={classes.iconContainer}>
            <div className={classes.bola}></div>
            <FaPlay className={classes.playIcon} onClick={openModal} />
          </div>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              shouldCloseOnOverlayClick={true}
              className={classes.videoModal}
              overlayClassName={classes.videoModalOverlay}
              contentLabel="Video Modal"
            >
              <button onClick={closeModal} className={classes.closeButton}>X</button>
              <iframe
                src="https://www.youtube.com/embed/LXb3EKWsInQ"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Modal>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className={classes.section}>
        <div className={classes.sectionTitle} data-aos="fade-up">
          <h1>Serviços <span>________</span></h1>
          <h2>Drinks com e sem álcool</h2>
        </div>
        <div className={classes.container}>
          <div className={classes.cardItem}>
            <span><i className="bi bi-cup-straw"></i></span>
            <h4>Bar de caipirinhas</h4>
            <p>Diversas outras combinações de Frutas e Especiarias para Caipirinhas que agradarão todos os seus convidados!</p>
            <Link to="/Orçamento/">Ver Preços</Link>
          </div>
          <div className={classes.cardItem}>
            <span><i className="bi bi-cup-straw"></i></span>
            <h4>Coquetéis Clássicos</h4>
            <p>Gin Tônica, Aperol Spritz e diversos outros drinks perfeitos para festas que demandam Elegância e Sofisticação.</p>
            <Link to="/Orçamento/">Ver Preços</Link>
          </div>
          <div className={classes.cardItem}>
            <span><i className="bi bi-cup-straw"></i></span>
            <h4>Drinks Sem Álcool</h4>
            <p>Grande variedade de Drinks e sabores não alcoólicos para agradar à todos os paladares e conquistar todos os seus convidados. Sem exceções.</p>
            <Link to="/Orçamento/">Ver Preços</Link>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <main>
        <div className={classes.content}>
          <p className={classes.contrateNos}></p>
          <h3>Sua festa tratada com</h3>
          <h4>Profissionalismo e Respeito</h4>
          <p>Bartenders para aniversários, casamentos, ou qualquer outra comemoração importante para você.
            Estamos prontos para servir todos os seus convidados
            com deliciosos drinks com e sem álcool. Conte com os melhores bartenders para o 
            melhor dia da sua vida!</p>
          <div className={classes.contentBtn}>
            <Link to="/Orçamento/">CONTRATE A VINCCI PUB</Link>
          </div>
        </div>
        <div className={classes.contentvideo}>
          <iframe
            src="https://www.youtube.com/embed/GwS5ASoSQos"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </main>

      {/* Packages Section */}
      <section className={classes.sectionPacotes}>
        <div className={classes.pacoteTitle} data-aos="fade-up">
          <h1>Pacotes <span>________</span></h1>
          <h2>Encontre o pacote de drinks ideal para a sua festa</h2>
        </div>
        <div className={classes.sectionContainer}>
          <div className={classes.pacotes}>
            <img src={drink1} alt="Pacote 1" />
            <h2>Drinks sem álcool</h2>
            <p>Bartenders para festas, São Paulo</p>
            <div className={classes.pacotePreco}>
              <p>A partir de R$550,00</p>
            </div>
            <Link to="/Orçamento-Eventos/">SAIBA MAIS</Link>
          </div>
          <div className={classes.pacotes}>
            <img src={drink2} alt="Pacote 2" />
            <h2>Barman + lista de compras</h2>
            <p>Bartenders para festas, São Paulo</p>
            <div className={classes.pacotePreco}>
              <p>A partir de R$1.689,99</p>
            </div>
            <Link to="/Orçamento-Eventos/">SAIBA MAIS</Link>
          </div>
          <div className={classes.pacotes}>
            <img src={drink3} alt="Pacote 3" />
            <h2>Drinks com e sem álcool</h2>
            <p>Bartenders para festas, São Paulo</p>
            <div className={classes.pacotePreco}>
              <p>A partir de R$550,00</p>
            </div>
            <Link to="/Orçamento-Eventos/">SAIBA MAIS</Link>
          </div>
        </div>
        <div className={classes.maispacote}>
          <Link to="/Orçamento-Eventos/">VEJA MAIS PACOTES PARA FESTAS</Link>
        </div>
      </section>

      {/* About Section */}
      <main>
        <div className={classes.sobre}>
          <p className={classes.sobreNos}>Buscando eventos de qualidade?</p>
          <h3>MUITO PRAZER, SOMOS A <span>VINCCI PUB</span></h3>
          <h5>Fundada em 2003, a <span>vincci</span> tem como missão oferecer o melhor ambiente e 
            estrutura para que você possa se divertir. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, molestias esse! Accusamus quibusdam quam suscipit reprehenderit consequuntur? Commodi id hic ipsam ducimus neque quasi</h5>
          <div className={classes.sobreBtn}>
            <Link to="/sobre/">SAIBA MAIS</Link>
          </div>
        </div>
        <div className={classes.sobrefotos}>
          <img src={drink3} alt="Sobre" />
        </div>
      </main>
    </>
  );
}

export default Home;
