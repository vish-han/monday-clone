import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Dashboard  from './pages/Dashboard';
import Tickets from './pages/Tickets';
import Nav from './components/Nav'

function App() {
  return (
    <div className="app">
    <BrowserRouter>
    <Nav />
   <Routes>
    <Route path="/" element={<Dashboard />}/>
    <Route path="/tickets" element={<Tickets />}/>
    <Route path="/tickets/:id" element={<Tickets />} editMode={true}/> 
   </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
