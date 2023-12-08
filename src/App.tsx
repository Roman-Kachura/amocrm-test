import React from 'react';
import { Header } from './modules/Header';
import { Main } from './modules/Main';
import { Footer } from './modules/Footer';
import purpleBall from './assets/purple-ball.svg';
import redBall from './assets/red-ball.svg';
import redBigBall from './assets/red-big-ball.svg';
import { LightCircle, PurpleCircle, RedCircle } from './components/Circles';

export const App = () => {
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
      <LightCircle/>
      <RedCircle/>
      <PurpleCircle/>
      <img src={purpleBall} alt="" className="purple-ball"/>
      <img src={redBall} alt="" className="red-ball"/>
      <img src={redBigBall} alt="" className="red-big-ball"/>
    </>
  )
}
