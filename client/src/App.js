import './styles/App/h1.css';
import './styles/App/header.css';
import './styles/App/logo.css';
import './styles/App/button_panel.css';
import './styles/App.css'
import PanelButton from './components/App/PanelButton';

function App() {
  return (
    <div>
        <header>
          <div id="logo_github"></div>
          <h1>API GitHub</h1>
        </header>
        <PanelButton/>
    </div>
  );
}

export default App;
