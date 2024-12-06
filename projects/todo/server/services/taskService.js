import { addTask, getTasks } from "../DAL/dal.js";

export const addTaskService = async (taskdata) => {
    return await addTask(taskdata);
}

export const getTaskService = async (userid) => {
    return await getTasks(userid);
}