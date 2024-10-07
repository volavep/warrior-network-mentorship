"use client";
import { Button, Card, Group, Stack, Text, Textarea } from "@mantine/core";
import { useState } from "react";
import toast from "react-hot-toast";
import { BsStars } from "react-icons/bs";

const MainObjective = () => {
  const [mainObjective, setMainObjective] = useState("");

  const emulateSave = () => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log("Saved");
        resolve();
      }, 1000);
    });
  };

  const emulateLeonidasGeneration = () => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setMainObjective(
          "Incidunt qui saepe rem voluptatum dolores et saepe dolorem veritatis at veniam labore non soluta. Eius non earum rem voluptas optio. Sit et pariatur ipsa est dolores expedita blanditiis. Laborum rerum neque alias accusamus facere et rerum dolor totam et eveniet. Enim velit unde nemo tenetur et voluptatem minus et molestias provident vel quisquam ullam. Quae sint adipisci et ratione sit. Est veritatis exercitationem perspiciatis qui vel velit repudiandae."
        );
        resolve();
      }, 1000);
    });
  };

  const generate = () => {
    toast.promise(emulateLeonidasGeneration(), {
      loading: "Leonidas is thinking...",
      success: "Ready!",
      error: "Failed to generate",
    });
  };

  const save = () => {
    if (!mainObjective) {
      toast.error("Main objective is required");
      return;
    }

    toast.promise(emulateSave(), {
      loading: "Saving...",
      success: "Saved",
      error: "Failed to save",
    });
  };

  return (
    <Stack gap="xl">
      <Card withBorder radius="md" p={0}>
        <Stack>
          <Group bg="#6C727526" p="md">
            <Text size="sm" fw={700}>
              Main Objective
            </Text>
          </Group>
          <Stack px="md" pb="md">
            <Text>
              Describe the main objective of the mentorship, based on the
              objectives to be met by the mentee.
            </Text>
            <Textarea
              value={mainObjective}
              onChange={(event) => setMainObjective(event.currentTarget.value)}
              placeholder="Leave a description"
              rows={5}
            />
            <Group justify="end">
              <Button
                onClick={generate}
                variant="transparent"
                leftSection={<BsStars />}
              >
                Complete with Leonidas
              </Button>
              <Button onClick={save} variant="light">
                Save
              </Button>
            </Group>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  );
};

export { MainObjective };
