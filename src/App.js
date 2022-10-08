import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import AnimatedRoutes from './animatedRoutes';
import Reframe from './Reframe';

function App() {
  return (
    <div className="
    ">
      <div className="content">
      <Router>
        <AnimatedRoutes/>
      </Router>
      </div>
    </div>
  );
}

export default App;
