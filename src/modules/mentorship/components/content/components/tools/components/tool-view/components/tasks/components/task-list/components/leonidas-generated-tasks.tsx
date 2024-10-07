import { VoidComponent } from "@/types/common";
import { Task } from "@/types/task";
import {
  Accordion,
  Button,
  Group,
  Loader,
  Modal,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { TaskItem } from "./task-item";

type LeonidasGeneratedTasksProps = {
  opened: boolean;
  close: () => void;
};

const LeonidasGeneratedTasks: VoidComponent<LeonidasGeneratedTasksProps> = ({
  opened,
  close,
}) => {
  const [loading, setLoading] = useState(true);

  const [tasks] = useState<Task[]>([
    {
      id: 1,
      task: "Read Node.js documentation",
      description:
        "Understand the basics of Node.js, including modules, event-driven architecture, and the HTTP module.",
      evidenceNeeded: true,
      status: "pending",
    },
    {
      id: 2,
      task: "Build a simple API with Express.js",
      description:
        "Create a basic REST API using Express.js. Include routes for CRUD operations (Create, Read, Update, Delete).",
      evidenceNeeded: true,
      status: "pending",
    },
    {
      id: 3,
      task: "Learn React basics",
      description:
        "Go through the official React documentation and understand concepts like components, state, and props.",
      evidenceNeeded: false,
      status: "pending",
    },
    {
      id: 4,
      task: "Create a frontend for your API",
      description:
        "Use React to build a frontend for the API created in Task 2. Focus on fetching data from your API and displaying it in a user-friendly way.",
      evidenceNeeded: true,
      status: "pending",
    },
    {
      id: 5,
      task: "Learn about MongoDB",
      description:
        "Read the MongoDB documentation and create a sample database. Understand how to insert, update, and query data.",
      evidenceNeeded: true,
      status: "pending",
    },
    {
      id: 6,
      task: "Deploy your fullstack app",
      description:
        "Deploy the API and frontend to a platform like Heroku or Vercel. Make sure the app is accessible online.",
      evidenceNeeded: true,
      status: "pending",
    },
  ]);

  const emulateGeneration = () => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setLoading(false);
        resolve();
      }, 3000);
    });
  };

  useEffect(() => {
    if (opened) {
      emulateGeneration();
    }
  }, [opened]);

  return (
    <Modal opened={opened} onClose={close} centered size="lg">
      {loading ? (
        <Stack p="xl" gap="md" align="center">
          <Loader size={48} />
          <Stack gap={0} align="center">
            <Title order={3}>Generating Tasks</Title>
            <Text size="sm" c="gray">
              Leonidas is generating tasks based on your mentorship plan...
            </Text>
          </Stack>
        </Stack>
      ) : (
        <Stack pt="lg">
          <Stack gap="xs">
            <Title order={2}>Leonidas Recommended Tasks</Title>
            <Text size="sm">
              Based in the information provided about the mentorship, Leonidas
              recommends the following tasks to be added to the mentorship plan.
            </Text>
          </Stack>
          <Accordion defaultValue={tasks[0].id.toString()}>
            {tasks.map((task, index) => (
              <TaskItem key={index} task={task} />
            ))}
          </Accordion>
          <Space h="lg" />
          <Group justify="end">
            <Button variant="light" onClick={close}>
              Cancel
            </Button>
            <Button onClick={close}>Set on my mentorship</Button>
          </Group>
        </Stack>
      )}
    </Modal>
  );
};

export { LeonidasGeneratedTasks };
