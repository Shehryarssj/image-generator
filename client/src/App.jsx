import React from 'react'
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom'
import {logo} from './assets/';
import {Home, CreatePost} from './pages';

export default function App() {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to='/'>
          <img src={logo} alt="open ai logo" className='w-28 object-contain' />
        </Link>
        <Link to="/create-post" className="font-inter font-medium text-white px-4 py-2 rounded-md bg-[#6469ff]">Create</Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/create-post" element={<CreatePost/>}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  )
}