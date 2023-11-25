import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    setTimeout(() => {
      AOS.init();
    }, 1000); // Delay in milliseconds
  }, []);

  return (
    <>
     <Home />
    </>
  );
}

export default App;
