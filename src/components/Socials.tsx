import telegram from '../assets/telegram.svg';
import viber from '../assets/viber.svg';
import whatsapp from '../assets/whatsapp.svg';
import { FC } from 'react';

interface SocialsProps {
  className?:string
}

export const Socials:FC<SocialsProps> = ({className}) => {
  const finalClassName = className ? `socials ${className}` : 'socials';
  return <div className={finalClassName}>
    <a href="src/components#" className="socials__link">
      <img src={telegram} alt="" className="socials__link-image"/>
    </a>
    <a href="src/components#" className="socials__link">
      <img src={viber} alt="" className="socials__link-image"/>
    </a>
    <a href="src/components#" className="socials__link">
      <img src={whatsapp} alt="" className="socials__link-image"/>
    </a>
  </div>
}