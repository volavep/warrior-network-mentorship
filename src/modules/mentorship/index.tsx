import { Grid, GridCol } from "@mantine/core";
import { Content, History } from "./components";

const Mentorship = () => {
  return (
    <Grid p="xl" gutter="xl" mah="100vh">
      <GridCol span={4}>
        <History />
      </GridCol>
      <GridCol span={8}>
        <Content />
      </GridCol>
    </Grid>
  );
};

export default Mentorship;
