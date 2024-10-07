import { Stack } from "@mantine/core";
import { SessionItem } from "./components";
import { Session } from "@/types/session";
import { VoidComponent } from "@/types/common";

type SessionHistoryListProps = {
  sessions: Session[];
};

const SessionHistoryList: VoidComponent<SessionHistoryListProps> = ({
  sessions,
}) => {
  return (
    <Stack>
      {sessions
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Ordena por fecha descendente
        .map((session, index) => (
          <SessionItem key={index} session={session} />
        ))}
    </Stack>
  );
};

export { SessionHistoryList };
