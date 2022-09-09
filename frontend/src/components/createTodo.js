
import { useState } from 'react';
import axios from 'axios';

const TodoCreate = () => {

    const [description, setDescription] = useState("");
    const [title, setTitle] = useState("");
    const [completed, setCompleted] = useState(false);

    const handleSubmit = () => {
        let newTodo = { title, description, completed };
         axios.post("api/todos/", newTodo)
            .then((response) => {
                setTitle("");
                setDescription("");
                setCompleted(false);
                console.log(newTodo)
                console.log( response.data);
       
            });
    
        }


  return (
    <div>
        <h1>Create new todo</h1>
        <form id="todoCreate">
            <label className="formInput"> Title</label>
            <input 
            className="input"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            name="title"
            placeholder="title" />

            <label className="formInput"> Description</label>
            <input 
            className="input"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            type="text"
            name="description"
            placeholder="description" />

            <label className="formInput">completed</label>
            <input 
            className="input"
            onChange={(e) => setCompleted(e.target.value)}
            // value={completed}
            defaultChecked={completed}
            type="checkbox"
            name=""
             />
<button type="submit" form="todoCreate" onClick={handleSubmit}>Create</button>
        </form>
    </div>
  )

  }
export default TodoCreate;