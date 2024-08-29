import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './pages/Home.jsx'
import FaleConosco from './pages/faleConosco.jsx'
import Sobre from './pages/Sobre.jsx'
import PoliticaPrivacidade from './pages/PoliticaPrivacidade.jsx'
import Orçamento from './pages/Orçamento.jsx'
import Images from './pages/images.jsx'
import {register} from 'swiper/element/bundle'
import Serviço from './pages/Serviço.jsx'
register()

import Identificacao from './pages/Identificacao.jsx'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Pagamento from './pages/Pagamento.jsx'



const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
      path:"/",
      element:<Home/>,
      }, {
        path:"/fale-conosco/",
        element:<FaleConosco/>
       },{
        path:"/sobre/",
        element:<Sobre/>  
        },
         {
        path:"/Politica-Privacidade/",
        element:<PoliticaPrivacidade/>  
        },
        {
          path:"/Orçamento/",
          element:<Orçamento/>
        },
        {
          path:"/images/",
          element:<Images/>
        },
        {
          path:"Serviço/:title",
          element:<Serviço/>
        },
        // {
        //   path:"Confirmação",
        //   element:<Confirmacao/>
        // },
        {
          path:"Identificação/",
          element:<Identificacao/>
        }, 
         {
          path:"Pagamento/",
          element:<Pagamento/>
        },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
