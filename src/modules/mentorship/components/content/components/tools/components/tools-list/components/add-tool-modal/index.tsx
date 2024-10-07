import { VoidComponent } from "@/types/common";
import { Modal, Stack, Text, Title } from "@mantine/core";
import { Tool } from "../tool";

type AddToolModalProps = {
  opened: boolean;
  close: () => void;
};

const AddToolModal: VoidComponent<AddToolModalProps> = ({ opened, close }) => {
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
          <Tool />
          <Tool />
          <Tool />
          <Tool />
          <Tool />
          <Tool />
        </Stack>
      </Stack>
    </Modal>
  );
};

export { AddToolModal };
