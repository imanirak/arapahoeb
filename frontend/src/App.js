
import { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteTodo from '././components/deleteTodo';

function App() {
  const [todos, setTodos] = useState([]);


  useEffect(() => {
  axios.get("/api/todos/").then((response) => {
    const todo = response.data;
    setTodos(todo);

    });
  }, [todos]);

  

  return (
  
    <div className="App" >

    <table>
    <tbody>
    <tr>
      <th><h2>ID</h2></th>
      <th><h2>Title</h2></th>
      <th><h2>Description</h2></th>
      <th><h2>Status</h2></th>
    </tr>
    </tbody>
    {todos?.map((item, i) => (
      <tbody key={i}>
    <tr>
    <td><h2>{item.id}</h2></td>
    <td>{item.title}</td>
    <td>{item.description}</td>
    <td>  <input type="checkbox"  /></td>
    
    <td><DeleteTodo item={item.id}/></td>
    </tr>
</tbody>
))}
</table>    
    </div>
    
  );
}


export default App;
