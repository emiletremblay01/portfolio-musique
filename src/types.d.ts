type achievementType = "employe" | "contractor" | "award" | "formation";

export type Achievement = {
  type: achievementType | string;
  name: string;
  description: string;
  year: number;
  startYear?: number;
  hyperlink?: string;
  article?: string;
};
