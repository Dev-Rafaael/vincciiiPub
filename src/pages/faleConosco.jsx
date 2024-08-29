
import { Link } from 'react-router-dom'

import classes from './faleConosco.module.css'

function faleConosco() {
  return (
    <div className={classes.faleConosco}>
      
      <div className={classes.imgFale}>
        
       <h1>FALE CONOSCO</h1>
       <p>
        Ficamos felizes em aprender e ouvir de você. Entre em contato conosco para nos informar como podemos ajudá-lo.</p>
        </div>
        <div className="mb-5" data-aos="fade-up" data-aos-delay="200">
        <iframe 
          style={{ border: 0, width: '100%', height: '400px' }} 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus" 
          frameBorder="0" 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
        <section className={classes.formFaleConosco}>
            
        <div className={classes.sac}>
            <h2>SAC</h2>
          </div> 
          <div className={classes.formContainer}>
            <div className={classes.formText}>
          <h2>Fale Conosco</h2>
          <p>Envie-nos uma Mensagem.</p>         
          </div>
          <form  className={classes.form}>
            <div className={classes.block}>
              <label htmlFor="nome" >
                <input type="text" placeholder='NOME' />
              </label>
              <label htmlFor="email" >
                <input type="email" placeholder='SEU EMAIL' />
              </label>
            </div>
            <div className={classes.inline}>
            <label htmlFor="telefone" >
              <input type="number" placeholder='TELEFONE' />
            </label>

            <label htmlFor="textarea" >
              <input type="textarea" placeholder='MENSAGEM' />
            </label>
            <input type="submit" value="ENVIAR MENSAGEM" />
          </div>
          </form>
          </div>
           <div className={classes.contatos}>
           <div className={classes.container} data-aos="fade-up" data-aos-delay="100">
        <div className={classes.rowGy4}>
          <div className={classes.colLg4}>
            <div className={`${classes.infoItem} `} data-aos="fade-up" data-aos-delay="300">
            <i class="bi bi-geo-alt-fill"></i>
              <div>
                <h3>Location</h3>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>
            {/* End Info Item */}

            <div className={`${classes.infoItem} `} data-aos="fade-up" data-aos-delay="400">
            <i class="bi bi-alarm"></i>
              <div>
                <h3>Open Hours</h3>
                <p>Monday-Saturday:<br />11:00 AM - 2300 PM</p>
              </div>
            </div>
            {/* End Info Item */}

            <div className={`${classes.infoItem} `} data-aos="fade-up" data-aos-delay="400">
             <i class="bi bi-telephone-fill"></i>
              <div>
                <h3>Call Us</h3>
                <p>+1 5589 55488 55</p>
              </div>
            </div>
            {/* End Info Item */}

            <div className={`${classes.infoItem} ${classes.dFlex}`} data-aos="fade-up" data-aos-delay="500">
            <i class="bi bi-envelope"></i>
              <div>
                <h3>Email Us</h3>
                <p>info@example.com</p>
              </div>
            </div>
            {/* End Info Item */}
          </div>

         </div>
         </div>
         
          </div> 
    </section>
    </div>
    
  )
}

export default faleConosco