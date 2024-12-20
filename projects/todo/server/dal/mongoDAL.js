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

export const findById = (id) => {
    return Taskmodel.findById(id);
}

export const getTasks = (userid) => {
    return Taskmodel.find({user:userid});
}

export const updateTask = (id, taskdata) => {
    return Taskmodel.findByIdAndUpdate(id, taskdata, {new:true});
}

export const deleteTask = (id) => {
    return Taskmodel.findByIdAndDelete(id);
}