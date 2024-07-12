
import { Route, Routes } from 'react-router-dom';
import Main from './components/pages/main';
import './App.css';
import Ielts from './components/pages/ielts';
import Business from './components/pages/business';
import Modules from './components/pages/modules';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/ielts' element={<Ielts/>}/>
      <Route path='/modules' element={<Modules/>}/>
      <Route path='/business' element={<Business/>}/>
    </Routes>
    </div>
  );
}

export default App;
