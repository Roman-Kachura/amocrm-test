import { Logo } from '../components/header/Logo';
import { Nav } from '../components/header/Nav';
import { Phone } from '../components/Phone';
import { Socials } from '../components/Socials';

export const Header = () => {
  return (
    <header className="header container">
      <Logo/>
      <Nav/>
      <div className="header__contacts">
        <Phone tel={'+7 555 555-55-55'}/>
        <Socials/>
      </div>
    </header>
  )
}