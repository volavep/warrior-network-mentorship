import { Tool } from "@/types/tool";
import { create } from "zustand";

type ToolsState = {
  mentorshipTools: Tool[];
  activeTool: Tool | null;
};

type ToolsActions = {
  addTool: (tool: Tool) => void;
  removeTool: (tool: Tool) => void;
  setActiveTool: (tool: Tool) => void;
};

type ToolsStore = ToolsState & ToolsActions;

export const useToolsStore = create<ToolsStore>((set) => ({
  mentorshipTools: [
    {
      id: 1,
      name: "Main Objective",
      description: "The main objective of the mentoring session.",
      mandatory: true,
    },
    {
      id: 2,
      name: "Sessions",
      description: "The number of sessions the mentorship will have.",
      mandatory: true,
    },
  ],
  activeTool: null,
  addTool: (tool) =>
    set((state) => ({ mentorshipTools: [...state.mentorshipTools, tool] })),
  removeTool: (tool) =>
    set((state) => ({
      mentorshipTools: state.mentorshipTools.filter((t) => t.id !== tool.id),
    })),
  setActiveTool: (tool) => set({ activeTool: tool }),
}));
