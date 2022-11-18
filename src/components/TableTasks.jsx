import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import styled from "styled-components";

const StyledTable = styled(Table)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTh = styled(Th)`
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTd = styled(Td)`
  width: 600px;
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
`;
export const TableTasks = ({ taskItems }) => {
  return (
    <StyledTable>
      <Thead>
        <Tr>
          <StyledTh letterSpacing="5px" color="#FF0080" fontSize="22px" fontWeight="bold">
            Tasks
          </StyledTh>
        </Tr>
      </Thead>
      <Tbody>
        {taskItems.map((task) => (
          <Tr key={task.name}>
            <StyledTd>{task.name}</StyledTd>
          </Tr>
        ))}
      </Tbody>
    </StyledTable>
  );
};
