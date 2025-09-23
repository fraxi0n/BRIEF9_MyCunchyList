import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import { Header } from './templates/Header.tsx';
import HomePage from './pages/HomePage.tsx';
import { MoviePage } from './pages/MoviePage.tsx';
import { Footer } from './templates/Footer.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Header pString="HEADER ET NAV" />
      <Routes>
        <Route path="/"   element={<HomePage/>}/>
        <Route path="/home"   element={<HomePage/>}/>
        <Route path="/movie/:id"   element={<MoviePage pString={'MOVIE PAGE '}/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
