import { FooterAbout } from '../components/footer/FooterAbout';
import { FooterMenu } from '../components/footer/FooterMenu';
import { FooterContacts } from '../components/footer/FooterContacts';
import { FooterRights } from '../components/footer/FooterRights';

export const Footer = () => {
  return (
    <footer className="footer container">
      <FooterAbout/>
      <FooterMenu/>
      <FooterContacts/>
      <FooterRights/>
    </footer>
  )
}