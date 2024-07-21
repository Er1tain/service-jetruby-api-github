import './styles/App/h1.css';
import './styles/App/header.css';
import './styles/App/logo.css';
import './styles/App/button_panel.css';
import './styles/App.css';
import './styles/App/header/animation.css';
import PanelButton from './components/App/PanelButton';
import { useEffect, useRef } from 'react';

function App() {
  const logo = useRef();

  useEffect(()=>{
    logo.current.style.transform = '2s';
    logo.current.style.rotate = '360deg';
  }, [])

  return (
    <div>
        <header>
          <div id="logo_github" ref={logo}></div>
          <h1>API GitHub</h1>
        </header>
        <PanelButton/>
    </div>
  );
}

export default App;
