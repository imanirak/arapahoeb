
import './App.css';
import React from 'react';
import axios from 'axios';

// const baseURL = 'http://localhost:8000/';

function App() {
  const [todos, setTodos] = React.useState([]);
 
  const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  React.useEffect(() => {
  axios.get("/api/todos/"). then((response) => {
    setTodos(response.data);

console.log()
    });
  }, [todos]);


  return (
  
    <div className="App" style={styles}>

    <table>
    <tr>
    
      <th><h2>ID</h2></th>
      <th><h2>Title</h2></th>
      <th><h2>Description</h2></th>
      <th><h2>Status</h2></th>
    </tr>
    {todos?.map((item, i) => (
    <tr key={i}>
    <td><h2>{item.id}</h2></td>
    <td>{item.title}</td>
    <td>{item.description}</td>
    {/* checked={item.completed} */}
    <td>  <input type="checkbox"  /></td>
    </tr>

))}
</table>    
    </div>
    
  );
}


export default App;
