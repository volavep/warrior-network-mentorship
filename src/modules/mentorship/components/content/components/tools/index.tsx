"use client";

import { Grid, Paper } from "@mantine/core";
import { ToolsList } from "./components";

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
        <Grid.Col span={6}>Hello</Grid.Col>
      </Grid>
    </Paper>
  );
};

export { Tools };
