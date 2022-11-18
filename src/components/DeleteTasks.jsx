import { Button } from "@chakra-ui/react";

export const DeleteTasks = ({ deleteAllTasks }) => {
  const handleDelete = () => {
    let data = JSON.parse(localStorage.getItem("tasks"));
    if (!data.length) return;
    if (window.confirm("Desea eliminar las tareas?")) {
      deleteAllTasks();
    }
  };

  return (
    <Button
      _hover={{
				bgGradient:"linear(to-l, #7928CA, #FF0080)",
  bgClip:"text",
					fontWeight:"bold"
      }}
      color="#fafafa"
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      onClick={handleDelete}
    >
      Delete Tasks
    </Button>
  );
};
