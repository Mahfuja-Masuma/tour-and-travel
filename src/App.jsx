
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Blogs from './pages/Blogs'
import BlogsDetails from './pages/BlogsDetails'
import PlacesRoute from './pages/PlacesRoute'
import NpPage from './pages/NpPage'

function App() {


  return (
  <>
  <Routes>
    <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/blogs' element={<Blogs/>}/>
    <Route path='/blogs/:id' element={<BlogsDetails/>}/>
    <Route path='/places' element={<PlacesRoute/>}/>
    <Route path='*' element={<NpPage/>}/>
    </Route>
  </Routes>
  </>
  )
}

export default App
