import { addTask, getTasks, updateTask } from "../dal/dal.js";

export const addTaskService = async (taskdata) => {
    return await addTask(taskdata);
}

export const getTaskService = async (userid) => {
    return await getTasks(userid);
}

export const updateTaskService = async (userid, taskdata) => {
    return await updateTask(userid, taskdata);
}