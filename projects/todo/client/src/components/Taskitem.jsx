import { FaEdit, FaTrash } from "react-icons/fa";

export default function TaskItem({ task, onEdit, onDelete }) {
    // Map status to colors
    const statusColors = {
        assigned: "bg-yellow-200 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-200",
        started: "bg-blue-200 text-blue-800 dark:bg-blue-700 dark:text-blue-200",
        completed: "bg-green-200 text-green-800 dark:bg-green-700 dark:text-green-200",
    };

    return (
        <div className="flex flex-wrap items-center justify-between p-2 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md mb-4">
            {/* Task Todo */}
            <div className="flex-1 text-lg font-semibold text-gray-800 dark:text-gray-200">
                {task.todo}
            </div>

            {/* Status Selector */}
            <select
                value={task.status}
                onChange={(e) => {
                    task.status = e.target.value; 
                    onEdit(task);
                }}
                className={`py-2 mx-4 rounded-lg font-semibold ${statusColors[task.status]} focus:outline-none`}
            >
                <option value="assigned">Assigned</option>
                <option value="started">Started</option>
                <option value="completed">Completed</option>
            </select>

            {/* Action Buttons */}
            <div className="flex space-x-4">
                {/* Edit Button */}
                <button
                    onClick={() => onEdit(task)}
                    className="p-2 rounded-lg text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-500"
                    aria-label="Edit Task"
                >
                    <FaEdit size={18} />
                </button>

                {/* Delete Button */}
                <button
                    onClick={() => onDelete(task._id)}
                    className="p-2 rounded-lg text-red-600 hover:text-red-800 dark:text-red-300 dark:hover:text-red-500"
                    aria-label="Delete Task"
                >
                    <FaTrash size={18} />
                </button>
            </div>
        </div>
    );
}
