import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//pages
import { Result, Home } from './pages/index';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/result/:id' element={<Result />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
