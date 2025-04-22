import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Header from './components/Header'
import ProjectDetail from './pages/ProjectDetail'
import About from './pages/About'

function App() {

  return (
    <main className='w-screen h-auto overflow-hidden overflow-y-auto flex flex-col items-center bg-white z-10'>
      <Header/>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:id' element={<ProjectDetail />} />
        <Route path='*' element={<div className='size-full flex items-center justify-center flex-col'>
          404 Not Found
          <Link to='/' className='text-blue-500 hover:underline'>
            Go to Home
          </Link>
        </div>} />
      </Routes>

      <Link to="https://joshod.vercel.app" target='_blank'>
        <small className="fixed bottom-1 left-1 p-2 bg-gray-200 opacity-40 hover:opacity-100 text-gray-800 rounded-xl text-[10px]">Built By DevJoy</small>
      </Link>
    </main>
  )
}

export default App
