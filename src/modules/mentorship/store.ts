import { Mentorship } from "@/types/mentorship";
import { create } from "zustand";

type MentorshipState = {
  activeMentorship: Mentorship | null;
};

type MentorshipActions = {
  setActiveMentorship: (mentorship: Mentorship) => void;
};

type MentorshipStore = MentorshipState & MentorshipActions;

export const useMentorshipStore = create<MentorshipStore>((set) => ({
  activeMentorship: null,
  setActiveMentorship: (mentorship) => set({ activeMentorship: mentorship }),
}));
