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
import { Tool as ToolT } from "@/types/tool";
import { VoidComponent } from "@/types/common";
import { useToolsStore } from "../../../../store";

type ToolProps = {
  tool: ToolT;
  selected?: boolean;
  onClick?: () => void;
};

const Tool: VoidComponent<ToolProps> = ({
  tool,
  selected = false,
  onClick,
}) => {
  const { activeTool, setActiveTool } = useToolsStore();

  const handleToolClick = () => {
    setActiveTool(tool);
  };

  return (
    <Card
      bg="#2F313A"
      classNames={classes}
      radius="8px"
      className={activeTool?.id === tool.id || selected ? classes.active : ""}
      onClick={onClick ? onClick : handleToolClick}
    >
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
                {tool.name}
              </Title>
              {tool.mandatory && (
                <Tooltip label="Mandatory">
                  <Box style={{ cursor: "help" }}>
                    <FaLock size={12} color="white" />
                  </Box>
                </Tooltip>
              )}
            </Group>

            <Text size="xs">{tool.description}</Text>
          </Stack>
        </Grid.Col>
      </Grid>
    </Card>
  );
};

export { Tool };
