import React from 'react';
import './content.css';
import evandro from '../../assets/evandro.jpg';

const mensagens = ["Evandro Custodio", "Joada Prado", "Felipe Alencar"];

export default () => {
    return <div>
            {mensagens.map((item, index) => {
                return <div className="content">
                           <div className="profile">
                                <div className="userdetail">
                                  <img src={evandro} alt="facebook"></img>
                                  <div >
                                    <strong>Evandro Custodio</strong>
                                    <small> 25/10/2019</small>
                                  </div>
                                </div>
                                  <div className="identify">
                                    Pessoal, alguém sabe se a Rocketseat está contratando?
                                  </div>
                              </div>                                                                        
                          <div className="linha"></div>
                           <div className="userResponse">
                            <div className="userMessage">
                                  <img src={evandro} alt="facebook"></img>
                                  <div className="messagem">
                                    <strong>Diego Fernandes </strong>A Rocketseat está sempre em busca de novos membros para o 
                                    time, e geralmente ficamos de olho em quem se destaca no Bootcamp, 
                                    inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. 
                                    Além disso, se você tem vontade de ensinar gravando vídeos e criando 
                                    posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário
                                    é real)
                                  </div>
                              </div>  
                              <div className="userMessage">
                                  <img src={evandro} alt="facebook"></img>
                                  <div className="messagem">
                                    <strong>Diego Fernandes </strong>A Rocketseat está sempre em busca de novos membros para o 
                                    time, e geralmente ficamos de olho em quem se destaca no Bootcamp, 
                                    inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. 
                                    Além disso, se você tem vontade de ensinar gravando vídeos e criando 
                                    posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário
                                    é real)
                                  </div>
                              </div>                   
                         </div>
                         </div>

              })}
            </div>
  
}
