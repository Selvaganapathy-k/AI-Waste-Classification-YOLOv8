import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  User,
  Mail,
  Lock,
  UserPlus,
  Leaf,
} from "lucide-react";

import toast from "react-hot-toast";
import { registerUser } from "../api/api";

function Register() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRegister(e) {

    e.preventDefault();

    setLoading(true);

    try {

      await registerUser(
        username,
        email,
        password
      );

      toast.success("Registration Successful 🎉");

      setTimeout(() => {
        navigate("/login");
      }, 1000);

    } catch (err) {

      console.log(err);

      toast.error("Registration Failed");

    }

    setLoading(false);
  }

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="brand">

          <div className="logo-circle">

            <Leaf size={45} />

          </div>

          <h1>EcoVision AI</h1>

          <p>Create your account</p>

        </div>

        <form onSubmit={handleRegister}>

          <div className="login-input">

            <User size={22} />

            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

          </div>

          <div className="login-input">

            <Mail size={22} />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

          </div>

          <div className="login-input">

            <Lock size={22} />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

          </div>

          <button type="submit">

            <UserPlus size={20} />

            {loading ? "Creating Account..." : "Register"}

          </button>

        </form>

        <p className="auth-link">

          Already have an account?

          <span onClick={() => navigate("/login")}>
            Login
          </span>

        </p>

      </div>

    </div>
  );
}

export default Register;