import { Footer } from 'components/Footer';
import { Menu } from 'components/Menu';
import { PaginaPadrao } from 'components/PaginaPadrao';
import Cardapio from 'Pages/Cardapio';
import { Inicio } from 'Pages/Inicio';
import { NotFound } from 'Pages/NotFound';
import { Pratos } from 'Pages/Pratos';
import { Sobre } from 'Pages/Sobre';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export function AppRouter() {
  return (
    <main className='container'>
      <BrowserRouter>
        <Menu />

        <Routes>
          <Route path='/' element={<PaginaPadrao />}>
            <Route index element={<Inicio />} />
            <Route path='cardapio' element={<Cardapio />} />
            <Route path='sobre' element={<Sobre />} />
          </Route>
          <Route path='*' element={<NotFound/ >} />
          <Route path='prato/:id' element={<Pratos/>} />
        </Routes>
      </BrowserRouter>

      <Footer/>
    </main>
  );
}
