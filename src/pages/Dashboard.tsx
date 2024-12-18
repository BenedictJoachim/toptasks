import React from "react";
import TaskList from "../components/Tasks/TaskList";
import { Task } from "../types";
import { AppwriteService } from "../services/AppwwriteServices";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  const tasks = await AppwriteService.getTasks();
  return tasks;
}
const Dashboard: React.FC = () => {
  const tasks = useLoaderData();

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
