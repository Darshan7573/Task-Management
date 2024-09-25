import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Register from './components/Register'
import TaskDashboard from './components/TaskDashboard'
import { TaskProvider } from './context/TaskContext'

const App = () => {

  const loggedInUser = JSON.parse(localStorage.getItem('user'))

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/tasks' element={
          <TaskProvider user={loggedInUser}>
            <TaskDashboard />
          </TaskProvider>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App