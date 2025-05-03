import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Initial } from './components/Initial'
import { Login } from './components/Login'
import { Register } from './components/Register'
import ProtectedRoute from './ProtectedRoute'
import { Home } from './components/Home'
import { Usuarios } from './components/Users'
import { Settings } from './components/Settings'
import { Signup } from './components/Signup'
import { Edituser } from './components/Edituser'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Initial /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/register" element={<ProtectedRoute><Register /></ProtectedRoute>} />
        <Route path="/edit-user" element={<ProtectedRoute><Edituser /></ProtectedRoute>} />
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
        <Route path="/usuarios" element={<ProtectedRoute><Usuarios /></ProtectedRoute>} />
      </Routes>
    </>
  )
}

export default App
