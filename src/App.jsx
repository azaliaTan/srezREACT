import { useState } from 'react'
import './App.css'
import { Header } from '../components/Header/Header'
import { Katalog } from '../components/Katalog/Katalog'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage/HomePage'
import { KatalogPage } from '../pages/KatalogPage/KatalogPage'
import { ProductPage } from '../pages/ProductPage/ProductPage'



function App() {


  return (
    <>
  
    <Header/>
    <Routes>
      
     <Route path='/' element ={<HomePage/>}/> 
     <Route path='/katalog' element ={<KatalogPage/>}/>
     <Route path='/katalog/:id' element ={<ProductPage/>}/>
     
    </Routes>
     
    </>
  )
 
}

export default App
