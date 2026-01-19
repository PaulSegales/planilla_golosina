import './App.css'
import Administrador from './components/Administrador';

import VerificarPassword from './components/VerificarPassword'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VerificarPassword />} />
          <Route path="/Administrador" element={<Administrador />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
