import './App.css';
import {Route, Routes} from "react-router-dom"

import Home from './components/Home';
import SixG from './components/SixG.tsx';
import Article from './components/Article.tsx';
import Conferences from './components/Conferences';
import Certifications from './components/Certifications';
import About from './components/About'
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/6g" element={<Article />} />
            <Route path="/conferences" element={<Conferences />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
