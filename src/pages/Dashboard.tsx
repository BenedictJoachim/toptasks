import React from "react";
import TaskList from "../components/Tasks/TaskList";
import { Task } from "../types";

const Dashboard: React.FC = () => {
  const tasks: Task[] = []; // Placeholder tasks array

  const handleSelectTask = (id: string) => {
    console.log(`Task selected: ${id}`);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <TaskList tasks={tasks} onSelectTask={handleSelectTask} />
    </div>
  );
};

export default Dashboard;
