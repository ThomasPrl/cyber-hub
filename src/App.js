import './App.css';
import {Route, Routes} from "react-router-dom"

import Home from './components/Home';
import Conferences from './components/Conferences';
import Certifications from './components/Certifications';
import About from './components/About'

function App() {
  return (
    <div className="App">
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/conferences" element={<Conferences />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
