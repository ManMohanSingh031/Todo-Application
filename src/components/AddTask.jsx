// AddTask.jsx
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import TaskFilter from "./TaskFilter";

const AddTask = ({ onAddTask, filter, onFilterChange }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask({
      name: taskName,
      desc: taskDesc,
      date: new Date().toLocaleString(),
      status: "Incomplete",
    });
    setTaskName("");
    setTaskDesc("");
    toggleForm();
  };

  return (
    <div className="flex flex-col justify-between items-center bg-gray-200 p-4">
  <div className="flex flex-col md:flex-row justify-between w-full md:w-1/2 h-24  rounded-lg bg-white items-center p-2 space-y-4 md:space-y-0">
    <button
      onClick={toggleForm}
      type="button"
      className="flex justify-center items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-6 rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
    >
      <div className="bg-slate-600 rounded-full p-1 mr-2">
        <FaPlus />
      </div>
      Add Task
    </button>
    <TaskFilter filter={filter} onFilterChange={onFilterChange} />
  </div>

  {isFormOpen && (
    <div
      className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>
        <div className="inline-block align-bottom bg-zinc-700 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <form
            onSubmit={handleSubmit}
            className="p-4 flex flex-col items-center w-full h-full rounded-lg"
          >
            <label className="w-full text-white ">
              Task Name:
              <input
                type="text"
                name="name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                className="ml-0 mt-2 w-full h-8 rounded-lg text-black"
              />
            </label>
            <label className="w-full mt-4 text-white ">
              Task Description:
              <input
                type="text"
                name="desc"
                value={taskDesc}
                onChange={(e) => setTaskDesc(e.target.value)}
                className="ml-0 mt-2 w-full h-8 rounded-lg  text-black"
              />
            </label>
            <input
              type="submit"
              value="Submit"
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            />
          </form>
        </div>
      </div>
    </div>
  )}
</div>

  );
};

export default AddTask;
