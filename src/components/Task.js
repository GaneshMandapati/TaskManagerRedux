import { Grid, Button, Tooltip } from "@material-ui/core";
import { useState, useEffect } from "react";
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddTask from "./AddTask";
import { connect } from "react-redux";
import EditTask from "./EditTask";
import { deleteTask, showAllTasks, editTask } from "../redux/actions/actionsCreator";

function Task({ taskData, showAllTasks, deleteTask }) {

  const [show, SetshowtaskFrom] = useState(false);
  const [showEditForm, SetShowEditForm] = useState(false);

  var editTaskData = {};
  useEffect(() => {
    showAllTasks()
  }, [taskData.length])


  function handleTaskDelete(id) {
    deleteTask(id);
  }
  function handleTaskEdit(task) {
    SetShowEditForm(!showEditForm);
    editTaskData = task;
  }
  const handleShowTaskForm = () => {
    SetshowtaskFrom((prevState) => !prevState);
  };

  return (
    <div className="task">
      <div className="taskHeader">
        <div>
          <p> Tasks {taskData.length}</p>
        </div>
        <div>
          <Tooltip title="New Task" placement="top">
            <Button onClick={handleShowTaskForm}>
              <AddIcon />
            </Button>
          </Tooltip>
        </div>
      </div>
      {show ? <AddTask /> : null}

      <div className="taskList">
        {taskData &&
          taskData.map((task, index) => (
            <div key={index}>
              <div className="taskItem">
                <Grid container item xs={6} direction="column">
                  <Grid container spacing={4} m={2}>
                    <Grid container item xs={6} >
                      <div className="taskDesc">
                        <p className="taskMsg">{task.task_msg}</p>
                        <p className="taskDate">{task.task_date}</p>
                      </div>
                    </Grid>
                    <Grid container item xs={6} style={{ display: "flex", alignItems: "center" }}>
                      <Tooltip title="Delete Task" placement="top">
                        <Button
                          style={{ height: "20px" }}
                          onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) handleTaskDelete(task.id) }}
                        >
                          <DeleteIcon />
                        </Button>
                      </Tooltip>
                      <Tooltip title="Edit Task" placement="top">
                        <Button
                          style={{ height: "20px" }}
                        >
                          <EditIcon />
                        </Button>
                      </Tooltip>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </div>
          ))}

      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  taskData: state.tasks.tasks
}
)

const mapDispatchToProps = (dispatch) => {
  return {
    showAllTasks: () => dispatch(showAllTasks()),
    deleteTask: (id) => dispatch(deleteTask(id)),
    editTask: (id) => dispatch(editTask(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);
