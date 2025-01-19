import api from "./api";

export function getTasks() {
    return api.get("/task/get");
}

export function addTask(task) {
    return api.post("/task/add", task);
}

export function updateTask(id, task) {
    return api.put(`/task/update/${id}`, task);
}

export function deleteTask(id) {
    return api.delete(`/task/delete/${id}`);
}