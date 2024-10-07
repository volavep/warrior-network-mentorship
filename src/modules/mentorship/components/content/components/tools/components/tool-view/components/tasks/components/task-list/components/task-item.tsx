import { VoidComponent } from "@/types/common";
import { Task } from "@/types/task";
import {
  Accordion,
  Button,
  Checkbox,
  Divider,
  Group,
  Rating,
  Stack,
  Text,
  Textarea,
} from "@mantine/core";
import { FaRegFileLines } from "react-icons/fa6";

type TaskItemProps = {
  task: Task;
};

const TaskItem: VoidComponent<TaskItemProps> = ({ task }) => {
  return (
    <Accordion.Item
      value={task.id.toString()}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <Accordion.Control>
        <Group>
          <Checkbox
            onChange={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            checked={task.status === "completed"}
          />
          <Stack>
            <Text fw={600}>{task.task}</Text>
          </Stack>
        </Group>
      </Accordion.Control>
      <Accordion.Panel>
        <Stack>
          <div dangerouslySetInnerHTML={{ __html: task.description }} />
          <Divider variant="dashed" />
          <Group justify="space-between">
            <Group>
              <Text size="sm" c="gray">
                Rate:{" "}
              </Text>
              <Rating defaultValue={2} />
            </Group>

            {task.evidenceNeeded ? (
              task.evidence ? (
                <Button variant="light" leftSection={<FaRegFileLines />}>
                  Evidence
                </Button>
              ) : (
                <Text size="sm" c="primary">
                  No Evidence
                </Text>
              )
            ) : null}
          </Group>
          <Textarea placeholder="Add your feedback (Optional)" />
          <Group justify="end">
            <Button>Save</Button>
          </Group>
        </Stack>
      </Accordion.Panel>
    </Accordion.Item>
  );
};

export { TaskItem };
