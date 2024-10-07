import { VoidComponent } from "@/types/common";
import { Card, Stack, Title } from "@mantine/core";
import { List } from "./components";

const History: VoidComponent = () => {
  return (
    <Card p="lg" mah="100%">
      <Stack gap="xl">
        <Title order={2}>Mentorship History</Title>
        <List />
      </Stack>
    </Card>
  );
};

export { History };
