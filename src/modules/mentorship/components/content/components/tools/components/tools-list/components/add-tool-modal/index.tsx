import { availableToolsList } from "@/data/available-tools-list";
import { VoidComponent } from "@/types/common";
import { Modal, Stack, Text, Title } from "@mantine/core";
import { Tool } from "../tool";
import { useToolsStore } from "../../../../store";

type AddToolModalProps = {
  opened: boolean;
  close: () => void;
};

const AddToolModal: VoidComponent<AddToolModalProps> = ({ opened, close }) => {
  const { mentorshipTools, addTool, removeTool } = useToolsStore();

  const isToolSelected = (toolId: number) => {
    return mentorshipTools.some((tool) => tool.id === toolId);
  };

  return (
    <Modal opened={opened} onClose={close} centered size="lg">
      <Stack pt="lg">
        <Stack gap="xs">
          <Title order={2}>Add Tools</Title>
          <Text size="sm">
            Select the support tools you want to integrate into your mentoring.
          </Text>
        </Stack>
        <Stack>
          {availableToolsList.map((tool) => (
            <Tool
              key={tool.id}
              tool={tool}
              selected={isToolSelected(tool.id)}
              onClick={() => {
                if (tool.mandatory) {
                  return;
                }

                if (isToolSelected(tool.id)) {
                  removeTool(tool);
                } else {
                  addTool(tool);
                }
              }}
            />
          ))}
        </Stack>
      </Stack>
    </Modal>
  );
};

export { AddToolModal };
