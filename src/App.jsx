import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Initial } from './components/Initial';
import { Login } from './components/Login';
import { CreateUser } from './features/Users/components/CreateUser';
import ProtectedRoute from './ProtectedRoute';
import { Tasks } from './features/Tasks/components/Tasks';
import { Settings } from './components/Settings';
import { Signup } from './components/Signup';
import { EditUser } from './features/Users/components/EditUser';
import { TestNavBar } from './components/TestNavbar';
import { Users } from './features/Users/components/Users';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Initial /></ProtectedRoute>} />
        <Route path="/test-navbar" element={<ProtectedRoute><TestNavBar /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/usuarios" element={<ProtectedRoute><Users /></ProtectedRoute>} />
        <Route path="/register" element={<ProtectedRoute><CreateUser /></ProtectedRoute>} />
        <Route path="/edit-user" element={<ProtectedRoute><EditUser /></ProtectedRoute>} />
        <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
        <Route path="/tasks" element={<ProtectedRoute><Tasks /></ProtectedRoute>} />
      </Routes>
    </>
  )
}

export default App
