import './App.css'
import Header from './components/Header';
import EditNote from './pages/EditNote';
import Home from './pages/Home'
import Note from './pages/Note'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <BrowserRouter>
      <Toaster/>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/notes' element={<Note/>} />
          <Route path='/edit-note/:id' element={<EditNote/>} />
        </Routes>
    </BrowserRouter>
  )
}