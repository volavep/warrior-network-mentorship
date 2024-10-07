export type Session = {
  id: number;
  date: Date;
  time: string;
  subject: string;
  meetingLink: string;
  description: string;
  status: "scheduled" | "finished" | "canceled";
};
