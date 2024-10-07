"use client";
import { UserInfo } from "@/components";
import {
  Badge,
  Button,
  Card,
  Group,
  Stack,
  Title,
  Tooltip,
} from "@mantine/core";
import classes from "./mentorship-card.module.css";
import { Mentorship } from "@/types/mentorship";
import { VoidComponent } from "@/types/common";
import { useMentorshipStore } from "@/modules/mentorship/store";

type MentorshipCardProps = {
  mentorship: Mentorship;
};

const MentorshipCard: VoidComponent<MentorshipCardProps> = ({ mentorship }) => {
  const languageLabel = mentorship.language === "en" ? "English" : "Spanish";
  const languageFlag = mentorship.language === "en" ? "🇺🇸" : "🇪🇸";

  const { activeMentorship, setActiveMentorship } = useMentorshipStore();

  const handleMentorshipClick = (mentorship: Mentorship) => {
    setActiveMentorship(mentorship);
  };

  return (
    <Card
      bg="#2F313A"
      classNames={classes}
      className={activeMentorship?.id === mentorship.id ? classes.active : ""}
      radius="8px"
      onClick={() => handleMentorshipClick(mentorship)}
    >
      <Stack>
        <Group justify="space-between">
          <Title order={4} fw={600}>
            {mentorship.skill} {mentorship.id}
          </Title>
          <Tooltip label={languageLabel}>
            <Title style={{ cursor: "help" }} order={3} fw={600}>
              {languageFlag}
            </Title>
          </Tooltip>
        </Group>
        <UserInfo user={mentorship.mentee} />
        {mentorship.status === "in-progress" ? (
          <Button>Finish Mentorship</Button>
        ) : (
          <Badge
            size="xl"
            style={{
              padding: "7px 10px !important",
            }}
            styles={{
              label: {
                textTransform: "none",
                fontWeight: 400,
                fontSize: 13,
              },
            }}
            color="green"
            variant="light"
          >
            Mentorship Finished
          </Badge>
        )}
      </Stack>
    </Card>
  );
};

export { MentorshipCard };
