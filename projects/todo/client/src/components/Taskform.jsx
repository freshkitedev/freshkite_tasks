import { useEffect, useState } from "react";

export const Taskform = ({ onAddTodo, etask }) => {
  const [todo, setDescription] = useState(etask?.todo ?? '');
  const [status, setStatus] = useState(etask?.status ?? "assigned");

  useEffect(() => {
    setDescription(etask?.todo ?? '');
    setStatus(etask?.status ?? 'assigned');
  }, [etask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() === "") {
      alert("Description cannot be empty!");
      return;
    }
    onAddTodo({ todo, status });
    setDescription("");
    setStatus("assigned");
  };

  return (
    <div className="h-[350px] w-[30%] ml-8 mt-4 p-6 bg-white dark:bg-gray-600 shadow-lg rounded-lg">
      <h2 className="text-2xl text-center font-bold text-gray-800 dark:text-white mb-4">{etask ? "Edit Todo" :"Add Todo"}</h2>
      <form onSubmit={handleSubmit}>
        {/* Description Field */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Description
          </label>
          <textarea
            id="description"
            value={todo}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
            placeholder="Enter your task description..."
          />
        </div>

        {/* Status Dropdown */}
        <div className="mb-4">
          <label
            htmlFor="status"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Status
          </label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
          >
            <option value="assigned">Assigned</option>
            <option value="started">Started</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-500"
        >
          {etask ? "Edit Todo" :"Add Todo"}
        </button>
      </form>
    </div>
  );
};