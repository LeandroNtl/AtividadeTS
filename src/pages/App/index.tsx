import { Outlet } from 'react-router-dom';
import HeaderComponent from '../../components/Header';
import FooterComponent from '../../components/Footer';
import MainComponent from '../../components/Main';

const App = () => {
  return (
    <>
      <HeaderComponent />
      <MainComponent>
        <Outlet />
      </MainComponent>
      <FooterComponent />
    </>
  );
};

export default App;