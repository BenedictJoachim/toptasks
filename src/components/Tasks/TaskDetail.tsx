import React from "react";

interface TaskDetailsProps {
  task: {
    id: string;
    title: string;
    description: string;
    status: "pending" | "in-progress" | "completed";
  };
}

const TaskDetails: React.FC<TaskDetailsProps> = ({ task }) => {
  return (
    <div>
      <h2>Task Details</h2>
      <p><strong>Title:</strong> {task.title}</p>
      <p><strong>Description:</strong> {task.description}</p>
      <p><strong>Status:</strong> {task.status}</p>
    </div>
  );
};

export default TaskDetails;
