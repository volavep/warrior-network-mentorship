import { VoidComponent } from "@/types/common";
import { Task } from "@/types/task";
import { Accordion } from "@mantine/core";
import { TaskItem } from "./components";

type TasksListProps = {
  tasks: Task[];
};

const TasksList: VoidComponent<TasksListProps> = ({ tasks }) => {
  return (
    <Accordion defaultValue={tasks[0].id.toString()}>
      {tasks.reverse().map((task, index) => (
        <TaskItem key={index} task={task} />
      ))}
    </Accordion>
  );
};

export { TasksList };
