import './App.css';
import ToDoItem from './ToDoItem';

function App() {
  const todoItems = {text:"Take a bath", completed:false, important:true};
  return (
    <ToDoItem {...todoItems}/>
  );
}

export default App;
