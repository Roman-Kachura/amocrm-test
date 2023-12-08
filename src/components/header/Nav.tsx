import { Link } from '../Link';

export const Nav = () => {
  return (
    <nav className="nav header__nav">
      <Link className="header__nav-link" href="#" text="Услуги"/>
      <Link className="header__nav-link" href="#" text="Виджеты"/>
      <Link className="header__nav-link" href="#" text="Интеграции"/>
      <Link className="header__nav-link" href="#" text="Кейсы"/>
      <Link className="header__nav-link" href="#" text="Сертификаты"/>
    </nav>
  )
}