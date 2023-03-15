import './App.css';
import Home from './Content/Home';
import About from './Content/About';
import Services from './Content/Services';
import Works from './Content/Works';
import Contact from './Content/Contact';
import Footer from './Content/Footer';
import Sidebar from './Content/Sidebar';
import ButtonUp from './Content/buttonGoUp';


function App() {
  return (
    <div id="App" className='w-screen h-auto'>
      <Home />
      <About />
      <Services />
      <Works />
      <Contact />
      <Footer />
      <Sidebar />
      <ButtonUp />
      
    </div>
  );
}

export default App;
