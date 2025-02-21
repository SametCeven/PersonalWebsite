import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import GlobalContextProvider from './contexts/GlobalContext';

export default function App() {

  return (
    <div className='mx-auto my-5 max-w-[1500px]'>
      <GlobalContextProvider>
        <Header/>
        <Navbar/>
        <Introduction/>
        <Skills/>
        <Profile/>
        <Projects/>
        <Footer/>
      </GlobalContextProvider>
    </div>
  )
}

