
import './App.css';
import { Addnewtask } from './components/Addnewtask';
import { TaskList } from './components/TaskList';

function App() {
  return (
    <div className="App">
      <Addnewtask/>
   <TaskList/>
    </div>
  );
}

export default App;
