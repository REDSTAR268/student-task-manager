function TaskStats({ totalTasks, completedTasks, pendingTasks }) {
  return (
    <div className="task-stats">

      <div className="stat-card total">
        <h3>{totalTasks}</h3>
        <p>Total Tasks</p>
      </div>

      <div className="stat-card completed-stat">
        <h3>{completedTasks}</h3>
        <p>Completed</p>
      </div>

      <div className="stat-card pending">
        <h3>{pendingTasks}</h3>
        <p>Pending</p>
      </div>

    </div>
  );
}

export default TaskStats;
