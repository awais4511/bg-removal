import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import Navbar from './component/Navbar'
import Footer from './component/Footer'

const App = () => {
  return (
    <div className='min-h-screen'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/result' element={<Result/>}/>
          <Route path='/buycredit' element={<BuyCredit/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App