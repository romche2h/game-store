import './App.scss';
import './styles/_variables.scss';
import About from './components/About/About';
import BestText from './components/section-best-place/BestText';
import Footer from './components/footer/Footer';
import BestImg from './components/section-best-place/BestImg';
import Gallery from './components/section-gallery/Gallery';
import HeaderLeft from './components/header/HeaderLeft';
import HeaderRight from './components/header/HeaderRight';
import { Outlet } from 'react-router-dom';
import SideBar from './components/SideBar/SideBar';

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
        <div className='platform'>platform</div>
        <Gallery />
        <Footer />
        <Outlet />
      </div>
    </>
  );
}

export default App;
