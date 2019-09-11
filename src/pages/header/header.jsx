import React from 'react';
import './header.css';
import facebook from '../../assets/facebook.png';

export default () => {
    return <div className="header">
      <div >
         <img src={facebook} alt="facebook"></img>
      </div>
      <strong>Meu Perfil</strong>
    </div>;
  
}
