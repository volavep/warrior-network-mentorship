import { VoidComponent } from "@/types/common";
import { Session } from "@/types/session";
import { Anchor, Badge, Button, Group, Stack, Text } from "@mantine/core";
import dayjs from "dayjs";

type SessionItemProps = {
  session: Session;
};

const SessionItem: VoidComponent<SessionItemProps> = ({ session }) => {
  const statusColor =
    session.status === "finished"
      ? "green"
      : session.status === "canceled"
      ? "red"
      : "blue";

  return (
    <Group justify="space-between">
      <Stack gap="xs">
        <Group>
          <Anchor c="#FF8E5C">{session.subject}</Anchor>
          <Badge color={statusColor} variant="light">
            {session.status}
          </Badge>
        </Group>
        <Text size="sm">
          {dayjs(session.date).format("dddd, MMMM D, YYYY")} · {session.time}
        </Text>
      </Stack>
      {session.status === "scheduled" && (
        <Button variant="transparent">Cancel Session</Button>
      )}
    </Group>
  );
};

export { SessionItem };
