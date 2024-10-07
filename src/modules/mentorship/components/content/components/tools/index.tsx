"use client";

import { Grid, Paper } from "@mantine/core";
import { ToolsList } from "./components";
import { ToolView } from "./components/tool-view";

const Tools = () => {
  return (
    <Paper style={{ overflow: "hidden" }}>
      <Grid>
        <Grid.Col
          span={6}
          style={{
            borderRight: "2px solid #343839",
          }}
        >
          <ToolsList />
        </Grid.Col>
        <Grid.Col span={6}>
          <ToolView />
        </Grid.Col>
      </Grid>
    </Paper>
  );
};

export { Tools };
