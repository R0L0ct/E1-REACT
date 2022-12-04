import { Button, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import styled from "styled-components";
import { useTask } from "../hooks/useTask";
import { DeleteTasks } from "./DeleteTasks";
import { TableTasks } from "./TableTasks";

const StyledDiv = styled.div`
  width: 600px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const StyledForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const TaskContainerStyled = styled.div`
width: 100%;
height: 600px;
display: flex;
justify-content: center;
align-items: center;
`

export const Tasks = () => {
  const [newTask, setNewTask] = useState("");

  const { taskItems, deleteAllTasks, createNewTask } = useTask();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask.length) return;
    createNewTask(newTask);
    setNewTask("");
  };

  return (
    <>
		<TaskContainerStyled>
      <StyledDiv>
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="30px"
          fontWeight="extrabold"
        >
          To-Do-List
        </Text>
        <StyledForm onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Enter a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <Button
            _hover={{
              bgGradient: "linear(to-l, #7928CA, #FF0080)",
              bgClip: "text",
              fontWeight: "bold",
            }}
            color="#fafafa"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            type="submit"
          >
            Save Task
          </Button>
        </StyledForm>
        <TableTasks taskItems={taskItems} />
        <DeleteTasks deleteAllTasks={deleteAllTasks} />
      </StyledDiv>
</TaskContainerStyled>
    </>
  );
};
