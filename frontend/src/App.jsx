import './App.css'
import Header from './components/Header';
import Home from './pages/Home'
import Note from './pages/Note'
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/notes' element={<Note/>} />
        </Routes>
    </BrowserRouter>
  )
}