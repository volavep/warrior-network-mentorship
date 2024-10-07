"use client";
import {
  Box,
  Card,
  Grid,
  Group,
  Stack,
  Text,
  Title,
  Tooltip,
} from "@mantine/core";
import { IoBookOutline } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import classes from "./tool.module.css";

const Tool = () => {
  return (
    <Card bg="#2F313A" classNames={classes} radius="8px">
      <Grid gutter="xl" align="center">
        <Grid.Col span={1}>
          <Box
            bg="#493645"
            style={{
              width: 40,
              height: 40,
              borderRadius: 50,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #FF8E5C",
            }}
          >
            <IoBookOutline size={20} color="#FF8E5C" />
          </Box>
        </Grid.Col>
        <Grid.Col span={10}>
          <Stack gap="4px" pl="xs">
            <Group gap="xs">
              <Title order={4} fw={600}>
                Main Objective
              </Title>
              <Tooltip label="Mandatory">
                <Box style={{ cursor: "help" }}>
                  <FaLock size={12} color="white" />
                </Box>
              </Tooltip>
            </Group>

            <Text size="xs">
              Main objective of the mentorship defined by the mentor and
              according to the mentee&apos;s objectives.
            </Text>
          </Stack>
        </Grid.Col>
      </Grid>
    </Card>
  );
};

export { Tool };
