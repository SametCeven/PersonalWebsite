import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import { GlobalContext } from './contexts/GlobalContext';
import { useContext } from 'react';
import { ToastContainer } from 'react-toastify';

export default function App() {
  const {darkMode,error} = useContext(GlobalContext);

  if(error){
    return(
      <div className={`${darkMode ? "bg-titleBold" : ""} `}>
        <ToastContainer position='top-left' autoClose="2000" theme={darkMode ? "dark" : "light"}/>
        <p className='flex justify-center items-center w-screen h-screen'>API Error...</p>
      </div>
    )
  }

  return (
    <div className={`mx-auto w-[1024] px-30 py-15 max-2xl:px-5 max-xl:px-0 max-lg: max-md:py-5 max-sm:px-0  ${darkMode? "bg-titleBold" : "" } transition delay-150 `} data-cy="app">
        <ToastContainer position='top-left' autoClose="2000" theme={darkMode ? "dark" : "light"} />
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

