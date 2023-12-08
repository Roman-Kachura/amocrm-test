import { Phone } from '../Phone';
import { Socials } from '../Socials';

export const FooterContacts = () => {
  return (
    <div className="footer__contacts footer__item">
      <h5 className="title_gray">Контакты</h5>
      <Phone tel="+7 555 555-55-55"/>
      <Socials className='footer__contacts-socials'/>
      <address className='footer__address'>Москва, Путевой проезд 3с1, к 902</address>
    </div>
  )
}