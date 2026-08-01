import {
    Home,
    History,
    User,
    LogOut
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

function Sidebar() {

    const navigate = useNavigate();

    function logout() {

        localStorage.clear();

        navigate("/login");

    }

    return (

        <div className="sidebar">

            <div className="side-logo">
                🌱 EcoVision AI
            </div>

            <Link to="/dashboard">
                <Home size={22} />
                Dashboard
            </Link>

            <Link to="/history">
                <History size={22} />
                History
            </Link>

            <Link to="/profile">
                <User size={22} />
                Profile
            </Link>

            <button
                className="logout-btn"
                onClick={logout}
            >
                <LogOut size={22} />
                Logout
            </button>

        </div>

    );

}

export default Sidebar;