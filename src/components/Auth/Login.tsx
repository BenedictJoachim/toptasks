import React, { useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import { AppwriteService } from "../../services/AppwwriteServices";

export const loginAction = async ({ request }: { request: Request }) => {
    const formData = await request.formData();
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
  
    try {
      await AppwriteService.login(email, password);
      return redirect("/dashboard");
    } catch (err) {
      return { error: (err as Error).message || "An unknown error occurred" };
    }
  };
  
const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await AppwriteService.login(email, password);
      navigate("/dashboard");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  return (
    <div>
      <h1>Login or <Link to={"/Register"}>Signup</Link> if you do not have an account yet.</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
