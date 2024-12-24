import { ValidationRule } from "@/types/vee-validate/Rules";

export const nameInputErrorMessages: Record<ValidationRule, string> = {
  [ValidationRule.Required]: "Enter your name",
  [ValidationRule.Min]: "Your name must be at least 3 characters long",
  [ValidationRule.Max]: "Your name must not be longer than 15 characters long",
  [ValidationRule.Regex]: "Your name must consist of latin characters only",
};
