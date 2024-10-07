import {
  Button,
  Card,
  Group,
  Radio,
  Stack,
  Switch,
  Text,
  TextInput,
} from "@mantine/core";
import { BsStars } from "react-icons/bs";
import { TasksList } from "./components/task-list";
import { Task } from "@/types/task";
import { Fragment, useState } from "react";
import { useEditor, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { RichTextEditor, Link } from "@mantine/tiptap";
import Placeholder from "@tiptap/extension-placeholder";
import toast from "react-hot-toast";
import { LeonidasGeneratedTasks } from "./components/task-list/components/leonidas-generated-tasks";
import { useDisclosure } from "@mantine/hooks";

const Tasks = () => {
  const [task, setTask] = useState<string>("");
  const [evidenceNeeded, setEvidenceNeeded] = useState<boolean>(false);
  const [opened, { open, close }] = useDisclosure(false);

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      task: "Read nodejs documentation",
      description: "Read the documentation to understand the basics of nodejs",
      evidenceNeeded: true,
      status: "pending",
    },
    {
      id: 2,
      task: "See this video",
      description: "Read the documentation to understand the basics of nodejs",
      evidenceNeeded: true,
      status: "completed",
      evidence: "https://www.youtube.com/watch?v=QgMQeLymAdU",
    },
  ]);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link,
      Placeholder.configure({
        placeholder: "Describe the task in detail.",
      }),
    ],
  });

  const addTask = () => {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        task,
        description: editor?.getHTML() || "",
        evidenceNeeded,
        status: "pending",
      },
    ]);
    setTask("");
    editor?.commands.clearContent();
    setEvidenceNeeded(false);
  };

  const emulateGeneration = () => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        editor?.commands.setContent("Task generated with Leonidas");
        resolve();
      }, 1000);
    });
  };

  const completeWithLeonidas = () => {
    if (!task || task.length === 0) {
      toast.error("First set a name for the task");
      return;
    }

    toast.promise(emulateGeneration(), {
      loading: "Leonidas is thinking...",
      success: "Task generated!",
      error: "Failed to generate",
    });
  };

  return (
    <Fragment>
      <Stack gap="xl">
        <Card radius="md" p={0}>
          <Group bg="#6C727526" p="md" justify="space-between">
            <Text size="sm" fw={700}>
              Add Task
            </Text>
            <Group>
              <Button
                onClick={open}
                leftSection={<BsStars />}
                variant="transparent"
              >
                Generate with Leonidas
              </Button>
              <Switch size="xs" defaultChecked label="Required" />
            </Group>
          </Group>
          <Stack p="md">
            <TextInput
              placeholder="Task"
              value={task}
              onChange={(event) => setTask(event.target.value)}
            />
            <RichTextEditor editor={editor}>
              {editor && (
                <BubbleMenu editor={editor}>
                  <RichTextEditor.ControlsGroup>
                    <RichTextEditor.Bold />
                    <RichTextEditor.Italic />
                    <RichTextEditor.Link />
                  </RichTextEditor.ControlsGroup>
                </BubbleMenu>
              )}
              <RichTextEditor.Content />
            </RichTextEditor>
            <Radio.Group
              name="favoriteFramework"
              label="Is it necessary to attach evidence to complete the task?"
              value={evidenceNeeded ? "yes" : "no"}
              onChange={(event) => setEvidenceNeeded(event === "yes")}
            >
              <Group mt="xs">
                <Radio value="yes" label="Yes" />
                <Radio value="no" label="No" />
              </Group>
            </Radio.Group>
            <Group justify="end">
              <Button
                onClick={completeWithLeonidas}
                leftSection={<BsStars />}
                variant="transparent"
              >
                Describe with Leonidas
              </Button>
              <Button onClick={addTask}>Save</Button>
            </Group>
          </Stack>
        </Card>
        <Card radius="md" p={0}>
          <Group bg="#6C727526" p="md" justify="space-between">
            <Text size="sm" fw={700}>
              Tasks
            </Text>
          </Group>
          <Stack p="md">
            <TasksList tasks={tasks} />
          </Stack>
        </Card>
      </Stack>
      <LeonidasGeneratedTasks opened={opened} close={close} />
    </Fragment>
  );
};

export { Tasks };
