import React from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Login, { loginAction } from './components/Auth/Login';
import Register, { registerAction } from './components/Auth/Register';
import TaskDetails from './components/Tasks/TaskDetail';
import AdminPanel from './pages/AdminPanel';
import Dashboard from './pages/Dashboard';
import Root from './root';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Root />,
    children: [
      {path: 'dashboard', element: <Dashboard />},
      {path: 'admin-panel', element: <AdminPanel />},
      {path: 'login', element: <Login />, action: loginAction},
      {path: 'register', element: <Register />, action: registerAction},
      {path: 'tasks/id', element: <TaskDetails task={{
        id: '',
        title: '',
        description: '',
        status: 'pending'
      }} />}
    ]
  }
];

const router = createBrowserRouter(routes);
export default router;

