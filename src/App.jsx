import './App.scss';
import './styles/_variables.scss';
import About from './components/About/About';
import BestText from './components/BestPlace/BestText';
import Footer from './components/footer/Footer';
import BestImg from './components/BestPlace/BestImg';
import Gallery from './components/Gallery/Gallery';
import HeaderLeft from './components/Header/HeaderLeft';
import HeaderRight from './components/Header/HeaderRight';
import SideBar from './components/SideBar/SideBar';
import Platform from './components/Platform/Platform';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div className='container'>
        <SideBar />
        <HeaderLeft />
        <HeaderRight />
        <About />
        <BestImg />
        <BestText />
        <Platform />
        <Gallery />
        <Footer />
        <Outlet />
      </div>
    </>
  );
}

export default App;
