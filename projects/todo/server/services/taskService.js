import { addTask, getTasks, updateTask, findById } from "../dal/dal.js";

export const addTaskService = async (taskdata) => {
    return await addTask(taskdata);
}

export const getTaskService = async (userid) => {
    return await getTasks(userid);
}

export const updateTaskService = async (taskid, taskdata) => {
    const task = await findById(taskid)

    if(task.user.toString() != taskdata.user) {
        throw new Error("User Invalid")
    }

    return await updateTask(taskid, taskdata);
}