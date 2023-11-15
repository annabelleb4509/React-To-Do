import ToDoListItem from "./ToDoListItem";
import './ToDoList.css'

/*
function ToDoList() {
    return (
        <ul className="ToDoList">
          <ToDoListItem />
          <ToDoListItem />
        </ul>
      );
}
*/


function ToDoList({ todos }) {

const toDoListItems = todos.map((t, idx) => (
<ToDoListItem todo={t} index={idx} key={idx} />));
  return (
    <ul className="ToDoList">
      {toDoListItems}
    </ul>
  );
}



export default ToDoList;