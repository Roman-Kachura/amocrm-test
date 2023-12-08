import { Link } from '../Link';

export const FooterMenu = () => {
  return (
    <div className="footer__menu footer__item">
      <h5 className="title_gray">Меню</h5>
      <div className="footer__menu-wrapper">
        <ul className="footer__menu-list list">
          <li><Link href="#" text="Расчёт стоимости"/></li>
          <li><Link href="#" text="Услуги"/></li>
          <li><Link href="#" text="Виджеты"/></li>
          <li><Link href="#" text="Интеграции"/></li>
          <li><Link href="#" text="Наши клиенты"/></li>
        </ul>
        <ul className="footer__menu list">
          <li><Link href="#" text="Кейсы"/></li>
          <li><Link href="#" text="Благодарственные письма"/></li>
          <li><Link href="#" text="Сертификаты"/></li>
          <li><Link href="#" text="Блог на Youtube"/></li>
          <li><Link href="#" text="Вопрос / Ответ"/></li>
        </ul>
      </div>
    </div>
  )
}