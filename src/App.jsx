import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';

export default function App() {

  return (
    <div>
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

