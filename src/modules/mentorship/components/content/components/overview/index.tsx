"use client";
import { UserInfo } from "@/components";
import { useMentorshipStore } from "@/modules/mentorship/store";
import { Badge, Card, Grid, Group, Stack, Text, Title } from "@mantine/core";

const Overview = () => {
  const { activeMentorship } = useMentorshipStore();

  return (
    <Card bg="primary" p="xl" c="white">
      <Grid>
        <Grid.Col span={6}>
          <Stack>
            <Group>
              <Title order={4}>{activeMentorship?.skill}</Title>
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
                c="#FF8E5C"
                color="#493645"
              >
                {activeMentorship?.language === "en" ? "English" : "Spanish"}
              </Badge>
            </Group>
            <UserInfo user={activeMentorship?.mentee} />
          </Stack>
        </Grid.Col>
        <Grid.Col span={6}>
          <Stack>
            <Stack gap="0">
              <Text size="sm" fw={700}>
                Objective:
              </Text>
              <Text size="sm">{activeMentorship?.objective}</Text>
            </Stack>
            <Stack gap="0">
              <Text size="sm" fw={700}>
                Previous Knowledges:
              </Text>
              <Text size="sm">{activeMentorship?.previousKnowledge}</Text>
            </Stack>
          </Stack>
        </Grid.Col>
      </Grid>
    </Card>
  );
};

export { Overview };
