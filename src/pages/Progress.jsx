function Progress({
  totalTasks,
  completedTasks,
  pendingTasks,
}) {
  const completionPercentage =
    totalTasks === 0
      ? 0
      : Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className="progress-page">

      {/* Page Header */}
      <div className="progress-header">
        <h2>My Progress</h2>
        <p>Track your productivity and achievements.</p>
      </div>

      {/* Progress Statistics */}
      <div className="progress-stats">

        <div className="progress-card">
          <h3>{totalTasks}</h3>
          <p>Total Tasks</p>
        </div>

        <div className="progress-card">
          <h3>{completedTasks}</h3>
          <p>Completed Tasks</p>
        </div>

        <div className="progress-card">
          <h3>{pendingTasks}</h3>
          <p>Pending Tasks</p>
        </div>

      </div>

      {/* Completion Progress */}
      <div className="progress-section">

        <h2>Completion Progress</h2>

        <div className="progress-info">
          <span>Tasks Completed</span>
          <strong>{completionPercentage}%</strong>
        </div>

        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow={completionPercentage}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label="Task completion progress"
        >
          <div
            className="progress-fill"
            style={{ width: `${completionPercentage}%` }}
          ></div>
        </div>

        <p>
          You have completed {completedTasks} out of {totalTasks} tasks.
        </p>

      </div>

    </div>
  );
}

export default Progress;