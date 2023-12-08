import logo from '../../assets/logo_welbex.svg';

export const Logo = () => {
  return(
    <div className="logo">
      <a href="#" className="logo__link">
        <img src={logo} alt="logo" className="logo__image"/>
      </a>
      <div className="logo__text">
        <div>крупный интегратор CRM</div>
        <div>в Росcии и ещё 8 странах</div>
      </div>
    </div>
  )
}