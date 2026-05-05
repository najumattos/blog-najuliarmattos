import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Contato from './screens/Contato';
import Sobre from './screens/Sobre';
import { BlogContainer } from './screens/Blog/BlogContainer';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navbar />
        <section>
          <Routes>
            <Route path="/" element={<BlogContainer />} />
            <Route path="/artigos" element={<BlogContainer />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/post/:postId" element={<BlogContainer />} />
          </Routes>
        </section>
      </div>
    </HashRouter>
  );
}

export default App
