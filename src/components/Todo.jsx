import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Todo({ text, todo, todos, setTodos }) {
  const deleteHandler = () => {
    console.log(todos);
    console.log(todo);
    setTodos(todos.filter((el) => el.id !== todo.id)); //todos.filter filters all the elements inside the array of todos. Each todo is one element from array of todos so it checks all todos element's id with the current clicked todo, if it matches it gets rid of it.
    Swal.fire({
      icon: "success",
      title: "Successfully Deleted !",
      showConfirmButton: false,
      timer: 1500,
      toast: true,
      position: "top-right",
    });
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id == todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div>
      <div className="todo">
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
          {text}
        </li>
        <button onClick={completeHandler} className="complete-btn">
          <i className="fas fa-check"></i>
        </button>
        <button onClick={deleteHandler} className="trash-btn">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default Todo;
