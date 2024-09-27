

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {navbar} from './constants';
import {useEffect, useState} from 'react';
// componentes del sitio
import Layout from './components/Layout';
import query from './queries';
import DataPrivacy from './components/DataPrivacy';
import ErrorPage from './components/error';

//AQUI VAMOS A COLOCAR EL LLAMADO DEL AXIOs
function App() {

  const [cuerpoimg, setDatos1] = useState({datos: {}, error: ''});
  const [cuerpotext, setDatos2] = useState({ datos: {}, error: '' });
  const [complete, setComplete] = useState(false);
const [spiner, setSpiner] = useState('spinershow');

  useEffect(() => { 
    const axiosdata = async () => {
      const getimgs= await query('/images/getImages/66f10e371a0bd72294073e49');
      const gettexts= await query('/entity/getEntity');
      
      await (setDatos1(getimgs), setDatos2(gettexts));
      await setComplete(true);
      return; 
    }
    if (!complete) { axiosdata();}
    else { console.log('Datos cargados'); }
    
  }, []);


  let colors = cuerpotext?.datos?.[0]?.colores?.[0] || {};
  

  for (let i = 1; i < 5; i++) {
    const col = `color${i}`;
    const colores = colors[col] || 'no-color';
    document.documentElement.style.setProperty(`--color${i}`, colores);
  }

  useEffect(() => {
    if (complete) {
      setSpiner('spinerhide');
    }
  }, [complete]);


  return (
    <>
     
      <Routes>
        <Route path="/" element={ complete && <Layout constants={navbar} bodyimg={cuerpoimg} bodytext={cuerpotext}/> } />
        <Route path="/politicas_de_privacidad" element={<DataPrivacy constants={navbar} bodyimg={cuerpoimg} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

       <div className={spiner}>
          <div className="spinner-border color2 " role="status"></div>
          <strong className="color3" style={{ fontSize: '20px', marginLeft: '15px' }}>CARGANDO CONTENIDO...</strong>
      </div>

    </>
  );
}

export default App;

    
   
    
    
 
     