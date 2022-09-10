import axios from "axios";
import { useState } from 'react';


export default function EditTodo(props) {
    const [isShown, setIsShown] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [completed, setCompleted] = useState(false);
  
    const item = props.item;
  
 
  function updateTodo() {
    const newTodo = {title:title, description:description, completed:completed}
    axios
      .put(`api/todos/${item.id}/`, 
        newTodo
      )
      .then((response) => {
        setTitle("")
        setDescription("")
        setCompleted(true)

      });
  }

  const handleClick = event => {
    setIsShown(current => !current);
  };



  return (
<div>
<button className="standardButton" onClick={handleClick}>edit</button>
{isShown && (
  <div>
  <h1>Create new todo</h1>
        <form id="">
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
            type="textbox"
            name=""
             />
<button type="submit" form="" onClick={updateTodo}>save</button>
        </form>
  </div>
)}
</div>
  );}
