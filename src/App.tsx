import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Posts } from './components/Posts'
import { Signin } from './components/Signin'
import { Signup } from './components/Signup'
import { CreatePost } from './components/CreatePost'
import { NavbarComp } from './components/NavbarComp'
import { UpdatePost } from './components/UpdatePost'
import { ViewPost } from './components/ViewPost'
import { Profile } from './components/Profile'

function App() {
  return (
    <>
      <Router>
        <NavbarComp />
        <Routes>
          <Route path='/' element={<Posts />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/create' element={<CreatePost />} />
          <Route path='/update/:id' element={<UpdatePost />} />
          <Route path='/post/:id' element={<ViewPost />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
