import { Models } from "appwrite";

export interface Task {
    id: string;
    title: string;
    description?: string;
    status: "pending" | "in-progress" | "completed";
  }

  export type User = Models.User<Models.Preferences> | null;
  