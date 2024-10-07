import { VoidComponent } from "@/types/common";
import { User } from "@/types/user";
import { Avatar, Group, Stack, Text } from "@mantine/core";

type UserInfoProps = {
  user?: User;
};

const UserInfo: VoidComponent<UserInfoProps> = ({
  user = {
    name: "Randy O'Connell",
    photo:
      "https://s3-alpha-sig.figma.com/img/39ed/38bb/abcbe267f7d705a4c21ed17bbd48ca1c?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UOnOr~8mEz4oRkdTdnhUXRqw6JfvsGP9GhPdpY5HZilfP~8i9PwFH96D8bc~yQtCq1Jn3wgvM9f91IMHo1Y-n-zZpLVa1kX3M9hf4bxyDSB72T5waJfFYUbtisQycsLbOpr0sQWI4N~gTeZBzyCDABIOdZmsKOlo35LTvW1bkk5Khhqc48APcqdKVc9d21s8xWSdQo1A4FW3BtWA~hbGLRdIYbKnH8pS3a-luseVNTwFXdy8FwMIqU3uTpOizHmgraHvbcDyc8Veg6eTN010ZXaiEQ3FMMgn3y0maOQNaFU-1HSj6vbrPH2MtABMO~Cj~IA~m9eiKELk7X5LkYWNBw__",
  },
}) => {
  return (
    <Group gap="xs">
      <Avatar
        size="40px"
        radius="xl"
        src="https://s3-alpha-sig.figma.com/img/39ed/38bb/abcbe267f7d705a4c21ed17bbd48ca1c?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UOnOr~8mEz4oRkdTdnhUXRqw6JfvsGP9GhPdpY5HZilfP~8i9PwFH96D8bc~yQtCq1Jn3wgvM9f91IMHo1Y-n-zZpLVa1kX3M9hf4bxyDSB72T5waJfFYUbtisQycsLbOpr0sQWI4N~gTeZBzyCDABIOdZmsKOlo35LTvW1bkk5Khhqc48APcqdKVc9d21s8xWSdQo1A4FW3BtWA~hbGLRdIYbKnH8pS3a-luseVNTwFXdy8FwMIqU3uTpOizHmgraHvbcDyc8Veg6eTN010ZXaiEQ3FMMgn3y0maOQNaFU-1HSj6vbrPH2MtABMO~Cj~IA~m9eiKELk7X5LkYWNBw__"
        alt="User avatar"
      />
      <Stack gap={0}>
        <Text fw={600}>{user.name}</Text>
        <Text size="sm" c="gray">
          Mentee
        </Text>
      </Stack>
    </Group>
  );
};

export { UserInfo };
