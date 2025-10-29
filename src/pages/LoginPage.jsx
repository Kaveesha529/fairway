import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button, { primaryButton, secondaryButton } from "../components/Button";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Hardcoded authentication
    if (email === "admin@fairway.com" && password === "password") {
      navigate("/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="flex flex-col w-full items-center justify-center h-screen">
      <div className="flex bg-white w-full h-full mt-16">
        <div className="flex flex-1 items-left justify-center">
          <div className="flex flex-col items-left justify-center gap-4">
            <h1 className="text-4xl font-bold">Admin Login</h1>
            <p>Please enter your credentials to access the system</p>
          </div>
        </div>
        <div className="flex items-center justify-start flex-1 w-full">
          <div className="w-3/4 flex flex-col">
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleLogin} className="flex flex-col gap-8">
              <div className="w-full">
                <label className="text-sm font-bold">
                  Username / Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your username or email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="w-full">
                <label className="text-sm font-bold">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="flex flex-row gap-4 w-full">
                <Button buttonClass={secondaryButton}  buttonName={"Forgot Password?"}/>
                <Button buttonClass={primaryButton}  buttonName={"Login"}/>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-[33%]">
        <p className="text-black text-lg">© 2025 Fairway Holdings (Pvt) Ltd.</p>
      </div>
    </div>
  );
};

export default LoginPage;
