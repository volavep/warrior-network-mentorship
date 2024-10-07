"use client";
import { UserInfo } from "@/components";
import { Badge, Card, Grid, Group, Stack, Text, Title } from "@mantine/core";

const Overview = () => {
  return (
    <Card bg="primary" p="xl" c="white">
      <Grid>
        <Grid.Col span={6}>
          <Stack>
            <Group>
              <Title order={4}>Fullstack development</Title>
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
                English
              </Badge>
            </Group>

            <UserInfo />
          </Stack>
        </Grid.Col>
        <Grid.Col span={6}>
          <Stack>
            <Stack gap="0">
              <Text size="sm" fw={700}>
                Objective:
              </Text>
              <Text size="sm">
                Learn to code and become a Web Developer in 2023 with HTML, CSS,
                Javascript, React, Node.js, Machine Learning and more!
              </Text>
            </Stack>
            <Stack gap="0">
              <Text size="sm" fw={700}>
                Previous Knowledges:
              </Text>
              <Text size="sm">No previous knowledge.</Text>
            </Stack>
          </Stack>
        </Grid.Col>
      </Grid>
    </Card>
  );
};

export { Overview };
