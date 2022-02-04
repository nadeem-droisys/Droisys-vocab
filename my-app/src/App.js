import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Newword from './components/Newword';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
     <Navbar/>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/Newword" element={<Newword />} />
       <Route path="/About" element={<About />} />
     </Routes>
     </BrowserRouter>
  );
}

export default App;
