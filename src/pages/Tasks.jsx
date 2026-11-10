
import TaskStats from "../components/TaskStats";
import TaskCard from "../components/TaskCard";

function Tasks({
  tasks,
  filteredTasks,
  filter,
  setFilter,
  taskDeadline,
  setTaskDeadline,
  totalTasks,
  completedTasks,
  pendingTasks,
  taskInput,
  setTaskInput,
  addTask,
  taskPriority,
  setTaskPriority,
  toggleTask,
  deleteTask,
  updateTaskPriority,
  editingTaskId,
  editInput,
  setEditInput,
  startEditing,
  saveEditing,
  cancelEditing,
}) {
  // Get the three most recently added tasks
  const recentTasks = [...tasks].slice(-3).reverse();

  return (
    <div className="tasks-page">

      {/* Page Header */}
      <div className="tasks-header">
        <h2>My Tasks</h2>
        <p>Manage your daily study tasks.</p>
      </div>

      {/* Main Tasks Layout */}
      <div className="tasks-layout">

        {/* LEFT SIDE: Task Management */}
        <section className="tasks-main">

          {/* Task Statistics */}
          <TaskStats
            totalTasks={totalTasks}
            completedTasks={completedTasks}
            pendingTasks={pendingTasks}
          />


          <div className="filter-buttons">

            <button
              className={filter === "all" ? "active" : ""}
              onClick={() => setFilter("all")}
            >
              All
            </button>

            <button
              className={filter === "pending" ? "active" : ""}
              onClick={() => setFilter("pending")}
            >
              Pending
            </button>

            <button
              className={filter === "completed" ? "active" : ""}
              onClick={() => setFilter("completed")}
            >
              Completed
            </button>

          </div>

          {/* Add Task */}
          <div className="task-input">

            <input
              type="text"
              placeholder="Enter a new task..."
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addTask();
                }
              }}
            />
              <label>Task Deadline</label>

              <input
                type="date"
                value={taskDeadline}
                onChange={(e) => setTaskDeadline(e.target.value)}
              />

            <select
              value={taskPriority}
              onChange={(e) => setTaskPriority(e.target.value)}
            >
              <option value="low">Low Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="high">High Priority</option>
            </select>

            <button onClick={addTask}>
              Add Task
            </button>

          </div>

         
          {/* Task List */}
          <div className="task-list">

            {filteredTasks.length === 0 ? (
              <p className="empty-message">
                {filter === "all"
                  ? "No tasks yet. Add your first task!"
                  : filter === "pending"
                  ? "No pending tasks. Great work!"
                  : "No completed tasks yet. Complete a task to see it here!"}
              </p>
            ) : (
              filteredTasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
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
              ))
            )}

          </div>


        </section>

        {/* RIGHT SIDE: Task History */}
        <aside className="task-history">

          <h2>Task History</h2>

          {/* History Statistics */}
          <div className="history-stats">

            <div className="history-item">
              <span>Completed</span>
              <strong>{completedTasks}</strong>
            </div>

            <div className="history-item">
              <span>Pending</span>
              <strong>{pendingTasks}</strong>
            </div>

            <div className="history-item">
              <span>Total Tasks</span>
              <strong>{totalTasks}</strong>
            </div>

          </div>

          {/* Recent Tasks */}
          <div className="recent-tasks">

            <h3>Recent Tasks</h3>

            {recentTasks.length === 0 ? (
              <p>No recent tasks yet.</p>
            ) : (
              recentTasks.map((task) => (
                <div className="recent-task" key={task.id}>

                  <span className={task.completed ? "completed" : ""}>
                    {task.text}
                  </span>

                  <small>
                    {task.completed ? "Completed" : "Pending"}
                  </small>

                </div>
              ))
            )}

          </div>

        </aside>

      </div>

    </div>
  );
}

export default Tasks;
