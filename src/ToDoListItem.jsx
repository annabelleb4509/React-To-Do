import './ToDoListItem.css'


const ToDoListItem = ({ todo, index }) => {
    return (
      <li 
        className="ToDoListItem"
        style={{
            backgroundColor: index % 2 ? "lavender" : "plum"
        }}
      >
        <div className="flex-ctr-ctr">{index + 1}</div>
        {todo}
      </li>
    );
  };
  
  export default ToDoListItem;

