const AddTask = () => {
  return (
    <form className="add-from">
      <div className="form-control">
        <label for="">Task</label>
        <input type="text" placeholder="Add Task" />
      </div>
      <div className="form-control">
        <label for="">Day</label>
        <input type="text" placeholder="Add Task" />
      </div>
      <div className="form-control form-control-check">
        <label for="">Set Reminder</label>
        <input type="checkbox" />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
