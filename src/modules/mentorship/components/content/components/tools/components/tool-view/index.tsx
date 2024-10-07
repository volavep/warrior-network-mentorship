import { Center, Stack, Text, Title } from "@mantine/core";
import { useToolsStore } from "../../store";
import { useMemo } from "react";
import { MainObjective, Sessions, Tasks } from "./components";

const ToolView = () => {
  const { activeTool } = useToolsStore();

  const renderTool = useMemo(() => {
    if (activeTool?.name === "Main Objective") return <MainObjective />;
    if (activeTool?.name === "Sessions") return <Sessions />;
    if (activeTool?.name === "Tasks") return <Tasks />;

    return (
      <Center h="100%">
        <Stack align="center">
          <Title order={2} fw={500}>
            Select a tool to config
          </Title>
          <Text size="sm" c="gray">
            Select a tool from the list to configure its settings
          </Text>
        </Stack>
      </Center>
    );
  }, [activeTool]);

  return (
    <Stack p="xl" h="100%">
      {renderTool}
    </Stack>
  );
};

export { ToolView };
