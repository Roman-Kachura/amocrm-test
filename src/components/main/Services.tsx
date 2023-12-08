import { ServicesButton } from './ServicesButton';
import { ServicesList } from './ServicesList';
import { MobileServicesList } from './MobileServicesList';

export const Services = () => {
  return(
    <div className="services">
      <h4 className="services__title">
        <div>Вместе <span className='services__title_gradient'>с бесплатной</span></div>
        <div><span className='services__title_gradient'>консультацией</span> мы дарим:</div>
      </h4>
      <ServicesList/>
      <MobileServicesList/>
      <ServicesButton text='Получить консультацию'/>
    </div>
  )
}