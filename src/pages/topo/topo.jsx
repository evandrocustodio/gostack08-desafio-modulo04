import React from 'react';
import './topo.css';
import facebook from '../../assets/facebook.png';

export default () => {
    return <div className="topo">
      <div >
         <img src={facebook} alt="facebook"></img>
      </div>
      <strong>Meu Perfil</strong>
    </div>;
  
}
