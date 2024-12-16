import React from "react";
import { Form, useActionData } from "react-router-dom";
import { AppwriteService } from "../../services/AppwwriteServices";

export const registerAction = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const role = (formData.get("role") as string) || "user"; // Explicitly cast to string and default to "user"

  try {
    // Call AppwriteService.register with role
    const newUser = await AppwriteService.register(email, password, role);
    console.log("User registered:", newUser);
    return { success: true };
  } catch (err) {
    console.error("Registration error:", err);
    return { error: "Failed to register user. Please try again." };
  }
};

const Register: React.FC = () => {
  const actionData = useActionData<{ success?: boolean; error?: string }>();

  return (
    <div>
      <h1>Register</h1>
      {actionData?.error && <p style={{ color: "red" }}>{actionData.error}</p>}
      {actionData?.success && <p style={{ color: "green" }}>Registration successful!</p>}
      <Form method="post">
        <div>
          <label>Email:</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" required />
        </div>
        <div>
          <label>Role (Admin only):</label>
          <select name="role">
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </Form>
    </div>
  );
};

export default Register;
