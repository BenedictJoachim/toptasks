import { createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';
import Root from './root';
import Dashboard from './pages/Dashboard';
import AdminPanel from './pages/AdminPanel';
import Login, { loginAction } from './components/Auth/Login';
import Register, { registerAction } from './components/Auth/Register';
import TaskDetails from './components/Tasks/TaskDetail';
// ... other imports

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="admin-panel" element={<AdminPanel />} />
      <Route path="login" element={<Login />} action={loginAction} />
      <Route path="register" element={<Register />} action={registerAction} />
      <Route path="tasks/:id" element={<TaskDetails task={{
        id: '',
        title: '',
        description: '',
        status: 'pending'
      }} />} />
    </Route>
  )
);

export default router;