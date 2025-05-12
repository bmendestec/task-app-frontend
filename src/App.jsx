import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Initial } from './components/Initial';
import { Login } from './components/Login';
import { CreateUser } from './features/Users/components/CreateUser';
import ProtectedRoute from './ProtectedRoute';
import { Tasks } from './features/Tasks/components/Tasks';
import { ListUsers } from './features/Users/components/ListUsers';
import { Settings } from './components/Settings';
import { Signup } from './components/Signup';
import { EditUser } from './features/Users/components/EditUser';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Initial /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/usuarios" element={<ProtectedRoute><ListUsers /></ProtectedRoute>} />
        <Route path="/register" element={<ProtectedRoute><CreateUser /></ProtectedRoute>} />
        <Route path="/edit-user" element={<ProtectedRoute><EditUser /></ProtectedRoute>} />
        <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
        <Route path="/tasks" element={<ProtectedRoute><Tasks /></ProtectedRoute>} />
      </Routes>
    </>
  )
}

export default App
