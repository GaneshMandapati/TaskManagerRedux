import { SHOW_ALL_TASKS, ADD_TASK, EDIT_TASK, SHOW_TASK, DELETE_TASK } from './types'

import axios from 'axios'

const config = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjU4ODY5NzMsIm5iZiI6MTYyNTg4Njk3MywianRpIjoiNGIxYzk3ZmYtZjk2Yi00MjRiLTg5YTQtMDlkYTk4ZDVkZGVkIiwiaWRlbnRpdHkiOnsibmFtZSI6IlN1YmkgU2lyIiwiZW1haWwiOiJzbWl0aGNoZXJ5bEB5YWhvby5jb20iLCJ1c2VyX2lkIjoidXNlcl82YmVlYzQ1OTkxNWY0NTA3YThkMjUyMGU2MGUwM2MzZSIsImNvbXBhbnlfaWQiOiJjb21wYW55XzNjNjhjZDk0ZWJkNjQ4Yzc4ZDc2ODcyY2ZhOWY4Y2ZiIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9mMmU5YWNkZWM4MTdlMjRkMjk4MGQ4NTNlODkzODVmNT9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.-eN6bCHhA3wq41wTyecN-LcJiDylUSxB5AuzE00yZCk`,
        'Accept': 'application / json'
    }
};

export const showAllTasks = () => async dispatch => {

    await axios
        .get(
            "https://stage.api.sloovi.com/task/lead_6996a7dcdddc4af3b4f71ccb985cea38",
            config
        ).then((response) => {
            dispatch({
                type: SHOW_ALL_TASKS,
                payload: response.data.results
            })
        })
}



export const deleteTask = id => async dispatch => {
    await axios
        .delete(
            `https://stage.api.sloovi.com/task/lead_6996a7dcdddc4af3b4f71ccb985cea38/${id}`,
            config
        ).then(() => {
            console.log("sucesss")
            dispatch({
                type: DELETE_TASK,
                payload: id
            })
        })
}

export const editTask = newTaskData => async dispatch => {

    axios.put(
        `https://stage.api.sloovi.com/task/lead_6996a7dcdddc4af3b4f71ccb985cea38/task_b459a96f228147d68a70145e5c7c1517`,
        config
    ).then((response) => {

        dispatch({
            type: EDIT_TASK,
            payload: response.data.results
        })
    })

}

export const addTask = newTaskData => async dispatch => {

    axios
        .post(
            "https://stage.api.sloovi.com/task/lead_6996a7dcdddc4af3b4f71ccb985cea38",
            JSON.stringify(newTaskData),
            config
        ).then((response) => {

            dispatch({
                type: ADD_TASK,
                payload: response.data.results
            })

        })


}

