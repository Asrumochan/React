import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  const onDelete = (id) => {
    setTasks(tasks.filter((task) => task.id != id));
  };

  const ToggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const onAddTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { ...task, id };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <div style={{maxHeight: "360px"}}>
        <Header
          onAdd={() => {
            setShowAddTask(!showAddTask);
          }}
          showAdd={showAddTask}
        />
        {showAddTask && <AddTask onAdd={onAddTask} />}
      </div>
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={onDelete} onToggle={ToggleReminder} />
      ) : (
        "No tasks to Show"
      )}
    </div>
  );
}

export default App;
