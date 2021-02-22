import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Form({ setInputText, todos, setTodos, inputText, setStatus }) {
  const MySwal = withReactContent(Swal);

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitToDoHandler = (e) => {
    e.preventDefault();
    if (inputText) {
      setTodos([
        ...todos,
        { text: inputText, completed: false, id: Math.random() * 1000 },
      ]);
      setInputText("");
      MySwal.fire({
        icon: "success",
        title: "Successfully Added !",
        showConfirmButton: false,
        timer: 1500,
        toast: true,
        position: "top-right",
      });
    } else {
      MySwal.fire({
        icon: "warning",
        title: "Please add some data !",
        showConfirmButton: false,
        timer: 1500,
        toast: true,
        position: "top-right",
      });
    }
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          onChange={inputTextHandler}
          value={inputText}
          type="text"
          className="todo-input"
        />
        <button
          onClick={submitToDoHandler}
          className="todo-button"
          type="submit"
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Form;
