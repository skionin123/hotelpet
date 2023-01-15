import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Reservenowpage from './pages/reservenow';
import Petboarding from './pages/petboarding';






function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/reservenow' element={<Reservenowpage/>}/>
        <Route path='/petboarding' element={<Petboarding/>}/>
      </Routes>
    </Router>
  );
}

export default App;
