export type Task = {
  id: number;
  task: string;
  description: string;
  evidenceNeeded: boolean;
  status: "pending" | "completed";
  rate?: number;
  evidence?: string;
  feedback?: string;
};
