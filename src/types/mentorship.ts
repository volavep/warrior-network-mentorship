import { User } from "./user";

export type Mentorship = {
  id: number;
  skill: string;
  mentor: User;
  mentee: User;
  objective: string;
  previousKnowledge: string;
  language: "en" | "es";
  status: "in-progress" | "finished";
};
