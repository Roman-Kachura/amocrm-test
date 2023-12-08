import { Company } from '../components/main/Company';
import { Services } from '../components/main/Services';
import { MobileServicesList } from '../components/main/MobileServicesList';

export const Main = () => {
  return (
    <main className="main container">
      <Company/>
      <Services/>
    </main>
  )
}