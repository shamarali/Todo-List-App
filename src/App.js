import React, { useState } from 'react' 
import "./style.css"

function App() {
  const [list, setList] = useState([]);  
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    //Add Todo the List
    setList([...list, newTodo]);

    //Clear Input box
    setInput("");
  };

  const deleteTodo = (id) => {
     //Filter Out Todo with the Id
     const newList = list.filter((todo) => todo.id !== id);

     setList(newList);
  }
  
  return (
    
    <div className="container my-5">
    <div >
      <h1 className="my-5">Todo List</h1>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)}
        />
      <button className="btn btn-success mx-3" onClick={() => addTodo(input)}>Add</button>
      <ul>
        {list.map((todo) => (
          <li key={todo.id} >
            {todo.todo}
            <button className="btn btn-danger mx-3" onClick={() => deleteTodo(todo.id)}>&times;</button></li>
        ))}
      </ul>
    
    </div>
    </div>
  );
}
export default App