import { FC } from 'react';

interface LinkProps {
  href: string
  text: string
  className?: string
}

export const Link: FC<LinkProps> = ({ href, text, className }) => {
  const finalClassName = className ? `${className} link` : 'link';
  return <a className={finalClassName} href={href}>{text}</a>
}