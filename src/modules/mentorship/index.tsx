"use client";
import { Grid, GridCol } from "@mantine/core";
import { Content, History } from "./components";
import { useMentorshipStore } from "./store";

const Mentorship = () => {
  const { activeMentorship } = useMentorshipStore();

  return (
    <Grid p="xl" gutter="xl" mah="100vh">
      <GridCol span={4}>
        <History />
      </GridCol>
      <GridCol span={8}>{activeMentorship && <Content />}</GridCol>
    </Grid>
  );
};

export default Mentorship;
