export type Tone = "brass" | "ruby" | "emerald" | "sapphire" | "neutral";
export type Choice = { value: string; label: string; disabled?: boolean };
export type FieldDetails = {
  label: string;
  description?: string;
  error?: string;
};
