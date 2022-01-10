import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Generador from './pages/generador';
import './App.css';

function App() {
  return (<>
    <Router>
      <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/generate" element={ <Generador /> } />
      </Routes>
    </Router>
    </>
  );
}

export default App;
