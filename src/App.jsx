import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Sunday",
      reminder: true,
    },
    {
      id: 2,
      text: "Go to the grocery store",
      day: "Monday",
      reminder: false,
    },
    {
      id: 3,
      text: "Biking",
      day: "Friday",
      reminder: true,
    },
  ]);
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        "No Tasks to show"
      )}
    </div>
  );
}

export default App;
