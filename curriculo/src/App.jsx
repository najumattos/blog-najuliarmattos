import './App.css'
import { useEffect, useState } from 'react';
import { BlogContainer } from "./screens/Blog/BlogContainer";
import Navbar from './components/Navbar';
import ProfileAna from './screens/ProfileAna';

function App() {
  const getViewFromHash = () => (window.location.hash === '#curriculo' ? 'curriculo' : 'blog');
  const [view, setView] = useState(getViewFromHash);

  useEffect(() => {
    const onHashChange = () => setView(getViewFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <div className="App">    
      <Navbar />
      <section className="cv-item">
        {view === 'curriculo' ? <ProfileAna /> : <BlogContainer />}
      </section>      
    </div>
  );
}

export default App
