function TaskCard({
  task,
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
  return (
    <div className="task-item">

      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />

      {/* Task Information */}
      <div className="task-info">

        {editingTaskId === task.id ? (
          <input
            type="text"
            value={editInput}
            onChange={(e) => setEditInput(e.target.value)}
          />
        ) : (
          <span className={task.completed ? "completed" : ""}>
            {task.text}
          </span>
        )}

        {task.deadline ? (
          <small className="task-deadline">
            Due: {task.deadline}
          </small>
        ) : (
          <small className="task-deadline">
            No deadline set
          </small>
        )}

      </div>

      {/* Priority */}
      <span className={`priority-badge ${task.priority || "medium"}`}>
        {(task.priority || "medium").toUpperCase()}
      </span>

      <select
        value={task.priority || "medium"}
        onChange={(e) =>
          updateTaskPriority(task.id, e.target.value)
        }
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      {/* Action Buttons */}
      <div className="task-actions">

        {editingTaskId === task.id ? (
          <>
            <button
              className="save-button"
              onClick={() => saveEditing(task.id)}
            >
              Save
            </button>

            <button
              className="cancel-button"
              onClick={cancelEditing}
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            className="edit-button"
            onClick={() => startEditing(task)}
          >
            Edit
          </button>
        )}

        <button
          className="delete-button"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default TaskCard;