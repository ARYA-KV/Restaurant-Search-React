
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import View from './Pages/View'
import Landing from './Pages/Landing'


function App() {

  

  return (
    <>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/Home' element={<Home/>}/>

      <Route  path='/:id/View'  element={<View/>}/>
    </Routes>
     
    </>
  )
}

export default App
