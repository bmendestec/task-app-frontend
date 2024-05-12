import React from "react"
import { Outlet } from "react-router-dom"
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer'
import "./App.css"

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App