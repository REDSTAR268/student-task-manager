
import { Link, NavLink } from "react-router-dom";

function Navbar({ theme, setTheme }) {
  function toggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    );
  }

  return (
    <nav className="navbar">

      <div className="nav-logo">
        <Link to="/">Student-Task-Manager</Link>
      </div>

      <div className="nav-links">
        <NavLink to="/" end className={({ isActive }) =>
          isActive ? "active" : ""
        }>
          Dashboard
        </NavLink>

        <NavLink to="/tasks" className={({ isActive }) =>
          isActive ? "active" : ""
        }>
          My Tasks
        </NavLink>

        <NavLink to="/progress" className={({ isActive }) =>
          isActive ? "active" : ""
        }>
          Progress
        </NavLink>

        <NavLink to="/settings" className={({ isActive }) =>
          isActive ? "active" : ""
        }>
          Settings
        </NavLink>

        <NavLink to="/contact" className={({ isActive }) =>
          isActive ? "active" : ""
        }>
          Contact
        </NavLink>
      </div>

      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={
          theme === "dark"
            ? "Switch to light mode"
            : "Switch to dark mode"
        }
        title={theme === "dark" ? "Light mode" : "Dark mode"}
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>

    </nav>
  );
}

export default Navbar;
