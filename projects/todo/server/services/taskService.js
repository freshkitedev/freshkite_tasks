import { addTask } from "../dal/mongoDAL.js"

export const addTaskService = async (taskdata) => {
    return await addTask(taskdata);
}