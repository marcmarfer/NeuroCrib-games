// Librerias
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Componentes
import Patitos from './juegos/patitos/Patitos';
import Visual from './juegos/visualGame/Visual';
import Chimp from './juegos/chimp/Chimp';
import Simon from './juegos/simon/Simon';
import Menu from './Menu';
import Kinematics from './juegos/kinematics/Kinematics';

// Estilos CSS
import './index.css'
import WordsBox1 from './juegos/words-box-1/words-box-1';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/patitos" element={<Patitos />} />
        <Route path="/visual" element={<Visual />} />
        <Route path="/simon" element={<Simon />} />
        <Route path="/chimp" element={<Chimp />} />
        <Route path="/kinematics" element={<Kinematics />} />
        <Route path="/words-box-1" element={<WordsBox1/>}/>
      </Routes>
    </Router>
  );
}