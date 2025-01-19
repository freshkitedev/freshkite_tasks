import { useEffect, useState } from "react"
import { addTask, deleteTask, getTasks, updateTask } from "../services/taskService";
import { useError } from "../contexts/Errorcontext";
import Taskitem from "../components/Taskitem";
import { Taskform } from "../components/Taskform";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/Authcontext";

export const Tasklist = () => {
    const [tasks, setTasks] = useState([]);
    const { handleError, clearError } = useError();
    const [etask, setEditTask] = useState(null);
    const {logout} = useAuth();

    async function loadTask() {
        try {
            const taskData = await getTasks();
            if (taskData.length != 0) {
                setTasks(taskData);
            }
            clearError();
        } catch (err) {
            handleError(err);
            logout();
            clearError();
        }
    }

    useEffect(() => {
        loadTask();
    }, [])

    function handleEdit(task) {
        setEditTask({...task});
    }

    async function handleDelete(id) {
        try {
            await deleteTask(id);
            const ntasks = tasks.filter(task => task._id !== id );
            setTasks(ntasks);
            toast.success("Task deleted successfully");
        } catch (err) {
            toast.error(err);
        }
    }

    async function handleCreateTask(task) {
        try {
            const newTask = await addTask(task);
            setTasks(tasks ? [...tasks, newTask]: newTask);
            toast.success("Task added successfully");
        } catch (err) {
            toast.error(err);
        }
    }

    async function handleUpdateTask(task) {
        try {
            const updatedTask = await updateTask(etask._id, task);
            const newTasks = tasks.map(task => task._id === etask._id ? updatedTask: task );
            setTasks(newTasks)
            setEditTask(null);
            toast.success("Task updated successfully");
        } catch (err) {
            toast.error(err);
        }
    }

    return (
        <div className="min-h-screen mx-auto bg-gradient-to-r from-blue-400 to-purple-600 dark:from-gray-800 dark:to-gray-900">
            <div className="flex justify-between">
                <Taskform onAddTodo={etask ? handleUpdateTask : handleCreateTask}
                    etask={etask}
                />

                <div className="w-[60%] mx-4 mt-4 p-6 bg-white dark:bg-gray-600 shadow-lg rounded-lg">
                    {tasks.length !== 0 ? (tasks.map((task) => {
                        return (<Taskitem key={task._id} task={task} onEdit={handleEdit} onDelete={handleDelete} />);
                    })) :
                        (<p className="text-gray-600 dark:text-gray-200">No task found</p>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Tasklist