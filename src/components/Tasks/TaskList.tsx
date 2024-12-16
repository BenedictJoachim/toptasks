import React from "react";

interface Task {
  id: string;
  title: string;
  status: "pending" | "in-progress" | "completed";
}

interface TaskListProps {
  tasks: Task[];
  onSelectTask: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onSelectTask }) => {
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} onClick={() => onSelectTask(task.id)}>
            {task.title} - {task.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
