import { useState } from 'react';

function NewToDoForm({ addTodo }) {
    const [newTodo, setNewTodo] = useState('')
    
    function handleAddTodo () {
        event.preventDefault();
        addTodo(newTodo);
        setNewTodo("");
    }

    return (
        <>
        <h2>New To-Do</h2>
        <form onSubmit={handleAddTodo}>
            <input 
                value={newTodo} 
                onChange={(event) => setNewTodo(event.target.value)}
                placeholder="New To-Do" 
                required
                pattern=".{4,}"
            />
            <button type="submit">ADD TO-DO</button>
        </form>
        </>
    );
};
    
    
    
    export default NewToDoForm;