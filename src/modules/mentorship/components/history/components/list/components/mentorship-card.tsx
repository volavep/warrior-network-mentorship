"use client";
import { UserInfo } from "@/components";
import { Button, Card, Group, Stack, Title, Tooltip } from "@mantine/core";
import classes from "./mentorship-card.module.css";

const MentorshipCard = () => {
  return (
    <Card bg="#2F313A" classNames={classes} radius="8px">
      <Stack>
        <Group justify="space-between">
          <Title order={4} fw={600}>
            Fullstack development
          </Title>
          <Tooltip label="Spanish">
            <Title style={{ cursor: "help" }} order={3} fw={600}>
              🇪🇸
            </Title>
          </Tooltip>
        </Group>
        <UserInfo />
        <Button>Finish Mentorship</Button>
      </Stack>
    </Card>
  );
};

export { MentorshipCard };
