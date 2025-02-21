import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import GlobalContextProvider, { GlobalContext } from './contexts/GlobalContext';
import { useContext } from 'react';

export default function App() {
  const {darkMode} = useContext(GlobalContext);

  return (
    <div className={`mx-auto px-30 py-15 ${darkMode? "bg-titleBold" : "" }  `}>
        <Header/>
        <Navbar/>
        <Introduction/>
        <Skills/>
        <Profile/>
        <Projects/>
        <Footer/>
    </div>
  )
}

