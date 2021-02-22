import React from "react";

function ProgressBar({ todos }) {
  const totalTodos = todos.length;
  const totalCompletedTodos = todos.filter((todo) => todo.completed === true)
    .length;

  const percentageCompleted = (totalCompletedTodos / totalTodos) * 100;

  return (
    <div>
      <h3 className="progress_header">Task Progress</h3>
      {totalCompletedTodos > 0 && (
        <div className="progress_container">
          <div className="progress">
            <div
              className="progress_bar"
              style={{ width: `${percentageCompleted}%` }}
            >
              {totalCompletedTodos} / {totalTodos}
            </div>
          </div>
        </div>
      )}
      {totalCompletedTodos == 0 && (
        <h1
          style={{
            textAlign: "center",
          }}
        >
          You have {totalTodos} tasks to do
        </h1>
      )}
    </div>
  );
}

export default ProgressBar;
