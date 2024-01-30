// Card.jsx
import React, { useState } from "react";
import { FaFileAlt, FaTrashAlt, FaEdit } from "react-icons/fa";
import { motion } from "framer-motion";

function Card({
  name,
  desc,
  status,
  date,
  onDelete,
  onEdit,
  onStatusChange,
  reference,
}) {
  const [taskStatus, setTaskStatus] = useState(status);
  const [isEditing, setIsEditing] = useState(false);
  const [newDesc, setNewDesc] = useState(desc);

  const handleCheckboxChange = () => {
    const newStatus = taskStatus === "Complete" ? "Incomplete" : "Complete";
    setTaskStatus(newStatus);
    onStatusChange(newStatus);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    onEdit(newDesc);
  };

  const handleDescChange = (e) => {
    if (e.target.value.split(" ").length <= 40) {
      // Set word limit here
      setNewDesc(e.target.value);
    }
  };

  return (
    <motion.div
  drag
  dragConstraints={reference}
  whileDrag={{ scale: 1.2 }}
  className="relative flex-shrink-0 w-full sm:w-60 h-80 rounded-lg bg-zinc-600 text-white px-8 py-10 overflow-hidden flex flex-col"
>
      <div className="absolute top-4 right-4">
        <input
          type="checkbox"
          className="h-5 w-5"
          checked={taskStatus === "Complete"}
          onChange={handleCheckboxChange}
        />
      </div>
      <FaFileAlt />
      <p className="text-lg leading-tight mt-5 font-semibold">{name}</p>
      {isEditing ? (
        <>
          <textarea
            className=" bg-gray-600"
            value={newDesc}
            onChange={handleDescChange}
          />
          <button onClick={handleSaveClick}>Save</button>
        </>
      ) : (
        <>
          <p className="text-sm leading-tight mt-2">{desc}</p>
          <button
            className="bg-blue-400 hover:bg-blue-600 p-3 rounded-full absolute bottom-4 left-4"
            onClick={handleEditClick}
          >
            <FaEdit />
          </button>
        </>
      )}
      <p
        className={`text-sm leading-tight mt-2 ${
          taskStatus === "Complete" ? "text-green-500" : "text-red-500"
        }`}
      >
        {taskStatus}
      </p>
      <p className="text-xs leading-tight mt-2">{date}</p>
      <div className="mt-auto flex justify-end">
        <button
          className="bg-red-400 hover:bg-red-600 p-3 rounded-full absolute bottom-4 right-4"
          onClick={onDelete}
        >
          <FaTrashAlt />
        </button>
      </div>
    </motion.div>
  );
}

export default Card;
