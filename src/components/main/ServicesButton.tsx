import { FC } from 'react';

interface MainButtonProps {
  text: string
}

export const ServicesButton: FC<MainButtonProps> = ({ text }) => {
  return <button className="services__button btn">{text}</button>
}