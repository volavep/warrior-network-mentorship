import { Tool } from "@/types/tool";

const availableToolsList: Tool[] = [
  {
    id: 3,
    name: "Objectives",
    description: "The objectives of the mentoring session.",
    mandatory: false,
  },
  {
    id: 4,
    name: "Resources",
    description: "The resources used during the mentoring session.",
    mandatory: false,
  },
  {
    id: 5,
    name: "Tasks",
    description: "The tasks to be completed during the mentoring session.",
    mandatory: false,
  },
  {
    id: 6,
    name: "Feedback Hub",
    description: "The feedback hub for the mentoring session.",
    mandatory: false,
  },
  {
    id: 7,
    name: "Final Project",
    description: "The notes taken during the mentoring session.",
    mandatory: false,
  },
];

export { availableToolsList };
