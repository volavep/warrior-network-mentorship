import { Mentorship } from "@/types/mentorship";

const metorshipsList: Mentorship[] = [
  {
    id: 1,
    skill: "Fullstack development",
    mentor: {
      name: "John Doe",
      photo: "https://randomuser.me/api/portraits",
    },
    mentee: {
      name: "Jane Doe",
      photo: "https://randomuser.me/api/portraits",
    },
    objective: "Learn how to build a fullstack application",
    previousKnowledge: "Basic understanding of programming",
    language: "en",
    status: "in-progress",
  },
  {
    id: 2,
    skill: "No code / low code development",
    mentor: {
      name: "John Doe",
      photo: "https://randomuser.me/api/portraits",
    },
    mentee: {
      name: "Jane Doe",
      photo: "https://randomuser.me/api/portraits",
    },
    objective: "Learn how to build a frontend application",
    previousKnowledge: "Basic understanding of programming",
    language: "en",
    status: "in-progress",
  },
  {
    id: 3,
    skill: "Backend development",
    mentor: {
      name: "John Doe",
      photo: "https://randomuser.me/api/portraits",
    },
    mentee: {
      name: "Jane Doe",
      photo: "https://randomuser.me/api/portraits",
    },
    objective: "Learn how to build a backend application",
    previousKnowledge: "Basic understanding of programming",
    language: "es",
    status: "finished",
  },
];

export { metorshipsList };
