import React, { useState } from "react";
import { Task } from "../types";
import TaskForm from "../components/Tasks/TaskForm";
import TaskList from "../components/Tasks/TaskList";

const AdminPanel: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);

  const handleCreateTask = (task: { title: string; description: string }) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title: task.title,
      description: task.description,
      status: "pending",
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const handleSelectTask = (id: string) => {
    setSelectedTaskId(id);
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <TaskForm onSubmit={handleCreateTask} />
      <TaskList tasks={tasks} onSelectTask={handleSelectTask} />
    </div>
  );
};

export default AdminPanel;
