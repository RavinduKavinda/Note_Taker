import './App.css'
import Home from './pages/Home'
import Note from './pages/Note'
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/notes' element={<Note/>} />
      </Routes>
    </BrowserRouter>
  )
}