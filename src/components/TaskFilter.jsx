// TaskFilter.jsx
import React from 'react';

function TaskFilter({ filter, onFilterChange }) {
  return (
    <select value={filter} onChange={onFilterChange} className="w-full sm:w-48 h-10 rounded-md border border-black bg-white text-black">
      <option value="All">All</option>
      <option value="Complete">Complete</option>
      <option value="Incomplete">Incomplete</option>
    </select>
  );
}

export default TaskFilter;

