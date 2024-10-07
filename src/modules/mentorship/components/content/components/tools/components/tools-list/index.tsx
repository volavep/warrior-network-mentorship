import { Button, Stack, Text, Title } from "@mantine/core";
import { AddToolModal, Tool } from "./components";
import { BsPlusCircle } from "react-icons/bs";
import { Fragment } from "react";
import { useDisclosure } from "@mantine/hooks";

const ToolsList = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Fragment>
      <Stack p="xl" gap="xl">
        <Stack gap="xs">
          <Title order={2}>Tools</Title>
          <Text>
            Add the support tools you want to integrate into your mentoring.
          </Text>
        </Stack>
        <Stack>
          <Tool />
          <Tool />
          <Button onClick={open} color="#343839" leftSection={<BsPlusCircle />}>
            Add Tool
          </Button>
        </Stack>
      </Stack>
      <AddToolModal opened={opened} close={close} />
    </Fragment>
  );
};

export { ToolsList };
