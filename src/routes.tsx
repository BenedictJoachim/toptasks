import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login, { loginAction } from "./components/Auth/Login";
import Register, { registerAction } from "./components/Auth/Register";
import TaskDetails from "./components/Tasks/TaskDetail";
import "./index.css";
import AdminPanel from "./pages/AdminPanel";
import Dashboard from "./pages/Dashboard";
import Root from "./root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "admin-panel",
        element: <AdminPanel />,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "tasks/:id",
        element: <TaskDetails task={{
            id: "",
            title: "",
            description: "",
            status: "pending"
        }} />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
