import { Stack } from "@mantine/core";
import { MentorshipCard } from "./components/mentorship-card";
import { metorshipsList } from "@/data/mentorships-list";

const List = () => {
  return (
    <Stack>
      {metorshipsList.map((mentorship, index) => (
        <MentorshipCard key={index} mentorship={mentorship} />
      ))}
    </Stack>
  );
};

export { List };
