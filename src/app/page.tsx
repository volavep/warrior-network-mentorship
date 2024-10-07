import { Button, Card, Paper, Text, Title } from "@mantine/core";

export default function Home() {
  return (
    <div>
      <Title>Home</Title>
      <Text>Welcome to the Warrior Network!</Text>
      <Paper withBorder p="lg">
        <Card>
          <Text>Hello</Text>
        </Card>
      </Paper>

      <Button>Hello Mantine!</Button>
    </div>
  );
}
