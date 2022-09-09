import axios from 'axios';


export default function DeleteTodo(props) {
const item = props.item;



const handleDelete = async () => {
       await  axios.delete(`api/todos/${item}`)
            .then((res) => {

            });

        }


  return (
    <div>
  <button className="standardButton" onClick={() => {handleDelete(item); }}>Delete</button>
    </div>
  )
}
