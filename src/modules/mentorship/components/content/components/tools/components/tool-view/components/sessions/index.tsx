import {
  ActionIcon,
  Button,
  Card,
  Group,
  rem,
  Stack,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { DateInput, TimeInput } from "@mantine/dates";
import { useRef, useState } from "react";
import { BiCalendar } from "react-icons/bi";
import { FaRegClock } from "react-icons/fa";
import { SessionHistoryList } from "./components";
import { Session } from "@/types/session";
import toast from "react-hot-toast";

const Sessions = () => {
  const ref = useRef<HTMLInputElement>(null);

  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [subject, setSubject] = useState<string>("");
  const [meetingLink, setMeetingLink] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const [scheduledSessions, setScheduleSessions] = useState<Session[]>([
    {
      id: 1,
      date: new Date("2024-10-01"),
      time: "14:30",
      subject: "Knowledge Control",
      description: "Description",
      meetingLink: "https://meet.google.com/abc-def-ghi",
      status: "finished",
    },
    {
      id: 1,
      date: new Date(),
      time: "10:00",
      subject: "Introductory Mentorship Meeting",
      description: "Description",
      meetingLink: "https://meet.google.com/abc-def-ghi",
      status: "canceled",
    },
  ]);

  const addSession = () => {
    if (date && time && subject && meetingLink) {
      setScheduleSessions([
        ...scheduledSessions,
        {
          id: scheduledSessions.length + 1,
          date,
          time,
          subject,
          meetingLink,
          description,
          status: "scheduled",
        },
      ]);
      setDate(null);
      setTime(null);
      setSubject("");
      setMeetingLink("");
      setDescription("");
    } else {
      toast.error("Please fill all the fields");
    }
  };

  return (
    <Stack gap="xl">
      <Card radius="md" p={0}>
        <Stack>
          <Group bg="#6C727526" p="md">
            <Text size="sm" fw={700}>
              Sessions
            </Text>
          </Group>
        </Stack>
        <Stack px="md" py="md">
          <Text size="16px" fw={600}>
            Select the date you want to schedule
          </Text>
          <Group grow>
            <DateInput
              value={date}
              onChange={setDate}
              placeholder="Select date"
              rightSection={<BiCalendar color="white" />}
            />
            <TimeInput
              value={time ?? ""}
              onChange={(event) => setTime(event.currentTarget.value)}
              ref={ref}
              placeholder="Select time"
              rightSection={
                <ActionIcon
                  variant="subtle"
                  color="gray"
                  onClick={() => ref.current?.showPicker()}
                >
                  <FaRegClock style={{ width: rem(16), height: rem(16) }} />
                </ActionIcon>
              }
            />
          </Group>
          <TextInput
            value={subject}
            onChange={(event) => setSubject(event.currentTarget.value)}
            placeholder="Subject of the session"
          />
          <TextInput
            value={meetingLink}
            onChange={(event) => setMeetingLink(event.currentTarget.value)}
            placeholder="Meeting Link"
          />
          <Textarea
            value={description}
            onChange={(event) => setDescription(event.currentTarget.value)}
            placeholder="Leave a description (Optional)"
            rows={5}
          />
          <Button onClick={addSession}>Manual Scheduling</Button>
        </Stack>
      </Card>
      <Card radius="md" p={0}>
        <Stack>
          <Group bg="#6C727526" p="md">
            <Text size="sm" fw={700}>
              Sessions History
            </Text>
          </Group>
        </Stack>
        <Stack px="md" py="md">
          <SessionHistoryList sessions={scheduledSessions} />
        </Stack>
      </Card>
    </Stack>
  );
};

export { Sessions };
