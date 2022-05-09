import Cardapio from 'Pages/Cardapio';
import { Inicio } from 'Pages/Inicio';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/cardapio' element={<Cardapio/>}/>
      </Routes>
    </BrowserRouter>
  );
}