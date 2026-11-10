
import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Progress from "./pages/Progress";
import Settings from "./pages/Settings";
import Contact from "./pages/Contact";
function App() {

  // Store tasks
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("studentTasks");

    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Other states
  const [filter, setFilter] = useState("all");
  const [theme, setTheme] = useState("dark");
  const [taskInput, setTaskInput] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editInput, setEditInput] = useState("");

  // Priority state
  const [taskPriority, setTaskPriority] = useState("medium");
  // Deadline state
  const [taskDeadline, setTaskDeadline] = useState("");

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem("studentTasks", JSON.stringify(tasks));
  }, [tasks]);

  // Calculate task statistics
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks = totalTasks - completedTasks;

  // Filter tasks
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") {
      return task.completed;
    }

    if (filter === "pending") {
      return !task.completed;
    }

    return true;
  });

  // Add a new task
  function addTask() {
    if (taskInput.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: taskInput.trim(),
      completed: false,
      priority: taskPriority,
      deadline: taskDeadline,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTaskInput("");
    setTaskPriority("medium");
    setTaskDeadline("");
  }

  // Complete or uncomplete a task
  function toggleTask(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  // Delete a task
  function deleteTask(id) {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  }

  
// Update task priority
function updateTaskPriority(id, newPriority) {
  setTasks((prevTasks) =>
    prevTasks.map((task) =>
      task.id === id
        ? { ...task, priority: newPriority }
        : task
    )
  );
}

  // Start editing a task
  function startEditing(task) {
    setEditingTaskId(task.id);
    setEditInput(task.text);
  }

  // Save edited task
  function saveEditing(id) {
    if (editInput.trim() === "") return;

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, text: editInput.trim() }
          : task
      )
    );

    setEditingTaskId(null);
    setEditInput("");
  }

  // Cancel editing
  function cancelEditing() {
    setEditingTaskId(null);
    setEditInput("");
  }

  return (
    <BrowserRouter>
      <div className={`app ${theme}`}>

        {/* Navigation Bar */}
        <Navbar theme={theme} setTheme={setTheme} />

        {/* Application Pages */}
        <main>
          <Routes>

            {/* Dashboard */}
            <Route
              path="/"
              element={
                <Dashboard
                  totalTasks={totalTasks}
                  completedTasks={completedTasks}
                  pendingTasks={pendingTasks}
                />
              }
            />

            {/* My Tasks */}
            <Route
              path="/tasks"
              element={
                <Tasks
                  tasks={tasks}
                  filteredTasks={filteredTasks}
                  filter={filter}
                  setFilter={setFilter}
                  totalTasks={totalTasks}
                  completedTasks={completedTasks}
                  pendingTasks={pendingTasks}
                  taskInput={taskInput}
                  setTaskInput={setTaskInput}
                  addTask={addTask}
                  taskPriority={taskPriority}
                  setTaskPriority={setTaskPriority}
                  taskDeadline={taskDeadline}
                  setTaskDeadline={setTaskDeadline}
                  toggleTask={toggleTask}
                  deleteTask={deleteTask}
                  updateTaskPriority={updateTaskPriority}
                  editingTaskId={editingTaskId}
                  editInput={editInput}
                  setEditInput={setEditInput}
                  startEditing={startEditing}
                  saveEditing={saveEditing}
                  cancelEditing={cancelEditing}
                />
              }
            />

            {/* Progress */}
            <Route
              path="/progress"
              element={
                <Progress
                  totalTasks={totalTasks}
                  completedTasks={completedTasks}
                  pendingTasks={pendingTasks}
                />
              }
            />

            {/* Settings */}
            <Route
              path="/settings"
              element={
                <Settings
                  theme={theme}
                  setTheme={setTheme}
                />
              }
            />

            {/* Contact */}
            <Route
              path="/contact"
              element={<Contact />}
            />
            
            {/* Unknown routes */}
            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />

          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;
