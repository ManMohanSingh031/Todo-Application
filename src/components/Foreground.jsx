// Foreground.jsx
import React, { useState, useEffect, useRef } from "react";
import AddTask from "./AddTask";
import Card from "./Card";

const Foreground = () => {
  const [tasks, setTasks] = useState(() => {
    const localTasks = localStorage.getItem("tasks");
    return localTasks ? JSON.parse(localTasks) : [];
  });
  const [filter, setFilter] = useState("All");
  const ref = useRef(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handleEdit = (index, newDesc) => {
    const newTasks = [...tasks];
    newTasks[index].desc = newDesc;
    setTasks(newTasks);
  };

  const handleStatusChange = (index, newStatus) => {
    const newTasks = [...tasks];
    newTasks[index].status = newStatus;
    setTasks(newTasks);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
       <AddTask
        onAddTask={handleAddTask}
        filter={filter}
        onFilterChange={handleFilterChange}
      />
      <div ref={ref} className="flex flex-wrap justify-center bg-zinc-800 p-4 gap-20" style={{minHeight: '100vh'}}>
        {tasks
          .filter((task) => filter === "All" || task.status === filter)
          .map((item, index) => (
            <Card
              key={`${index}-${item.status}`}
              {...item}
              onDelete={() => handleDelete(index)}
              onEdit={(newDesc) => handleEdit(index, newDesc)}
              onStatusChange={(newStatus) =>
                handleStatusChange(index, newStatus)
              }
              reference= {ref}
            />
          ))}
      
      </div>
    </>
  );
};

export default Foreground;
