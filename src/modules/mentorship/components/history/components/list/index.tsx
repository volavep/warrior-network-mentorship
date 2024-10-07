import { Stack } from "@mantine/core";
import { MentorshipCard } from "./components/mentorship-card";

const List = () => {
  return (
    <Stack>
      <MentorshipCard />
      <MentorshipCard />
      <MentorshipCard />
      <MentorshipCard />
    </Stack>
  );
};

export { List };
