import { useEffect, useState } from "react";

export const useTask = () => {
  const [taskItems, setTaskItems] = useState([]);

  function createNewTask(task) {
    if (!taskItems.find((taskName) => taskName.name === task)) {
      setTaskItems([...taskItems, { name: task }]);
    }
  }

  useEffect(() => {
    let localData = localStorage.getItem("tasks");
    if (localData) {
      setTaskItems(JSON.parse(localData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  const deleteAllTasks = () => {
    setTaskItems([]);
  };

	return {taskItems,deleteAllTasks,createNewTask}
}
