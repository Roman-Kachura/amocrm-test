import { FC } from 'react';

interface PhoneProps {
  tel:string
}

export const Phone:FC<PhoneProps> = ({tel}) => {
  return <a className="phone link" href={`tel:${tel}`}>{tel}</a>
}