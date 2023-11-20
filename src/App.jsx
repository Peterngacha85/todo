
import { useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState(['']);
  const [todoList, setTodoList] = useState([]);

  const handleInputChange = (e) => {
    setTodo(e.target.value)
  }

  const HeaderTittle = () => {
    if(todoList.length == ''){
return(
<div className="heading">NO ACTIVITIES TODAY YET</div>
)
      }else{
         return (<div className="heading">{todoList.length} ACTIVITIES ADDED</div>)
        
      }
    }
  
  const handleAddTodo = () => {
    if(todo.trim() !== ''){
      setTodoList([...todoList, todo]);
      setTodo('');
    }
  }

  const handleDeleteTodo = (index) => {
    const newTodoList = [...todoList]
    newTodoList.splice(index, 1)
    setTodoList(newTodoList)
  }

  return (
    <div className='container'>
      <div className="heading">{HeaderTittle()}</div>
         <hr/>
      <div className="form">
        <input type="text" value={todo} onChange={handleInputChange} />
        <button onClick={handleAddTodo}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <div className="scroll-view">
          <ul>
            {
              todoList.slice(0, 3).map((item, index) => {
                return (
                  <li key={index}>
                    <span>{item}</span>
                    <button>
                      <span onClick={() => handleDeleteTodo(index)}>Delete</span>
                    </button>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}


export default App
