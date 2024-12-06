import { addTaskService, getTaskService } from "../services/taskService.js";

export const addTaskController = async (req, res) => {
    try {
        const taskdata = {
            user: req.user.id,
            todo: req.body.todo,
            status: req.body.status,
        }
        console.log(taskdata);
        const ret = await addTaskService(taskdata);
        res.status(200).json(ret);
    } catch(err) {
        console.log(err);
        res.status(400).json({error:err.message})
    }
}

export const getTaskController = async (req, res) => {
    try {
        const ret = await getTaskService(req.user.id);
        res.status(200).json(ret);
    } catch(err) {
        console.log(err);
        res.status(400).json({error:err.message})
    }
}