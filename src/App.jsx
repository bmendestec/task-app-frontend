import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Initial } from './components/Initial'
import { Login } from './components/Login'
import { Register } from './components/Register'
import ProtectedRoute from './ProtectedRoute'
import { Home } from './components/Home'
import { Usuarios } from './components/Users'
import { Settings } from './components/Settings'

function App() { 

  return (
    <>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Initial /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
        <Route path="/usuarios" element={<ProtectedRoute><Usuarios /></ProtectedRoute>} />
      </Routes>
    </>
  )
}

export default App
