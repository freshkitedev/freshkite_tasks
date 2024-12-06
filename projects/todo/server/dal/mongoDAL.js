import { Taskmodel } from "../model/Task.js";
import { Usermodel } from "../model/User.js"

export const findUserByName = (username) => {
    return Usermodel.findOne({username});
}

export const registerUser = (userdata) => {
    return Usermodel.create(userdata);
}

export const addTask = (taskdata) => {
    return Taskmodel.create(taskdata);
}
