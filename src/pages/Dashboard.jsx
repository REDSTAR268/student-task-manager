import TaskStats from "../components/TaskStats";

function Dashboard({
  totalTasks,
  completedTasks,
  pendingTasks,
}) {
  return (
    <div className="dashboard-page">

      {/* Dashboard Header */}
      <header className="dashboard-header">
        <h1>Welcome to Student Task Manager</h1>
        <p>
          Organize your studies. Stay productive.
          Achieve your goals.
        </p>
      </header>

      {/* Task Overview */}
      <section className="dashboard-overview">
        <h2>Task Overview</h2>

        <TaskStats
          totalTasks={totalTasks}
          completedTasks={completedTasks}
          pendingTasks={pendingTasks}
        />
      </section>

    </div>
  );
}

export default Dashboard;