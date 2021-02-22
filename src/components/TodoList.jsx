import React from "react";
import Todo from "./Todo";

function TodoList({ todos, setTodos, filteredTodos }) {
  const totalTodos = todos.length;
  let booleanValue = false;
  if (totalTodos > 5) {
    booleanValue = true;
  }
  return (
    <div className="todo-container">
      <ul className={`todo-list ${booleanValue && "todo-list-scroll"} `}>
        {filteredTodos.map((todo) => (
          <Todo
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            key={todo.id}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
