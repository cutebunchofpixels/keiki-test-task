import { extend } from "vee-validate";
import { required, max, min, regex } from "vee-validate/dist/rules";
import type { ValidationRule } from "vee-validate/dist/types/types";

const usedRules: Record<string, ValidationRule> = {
  required,
  min,
  max,
  regex,
};

Object.keys(usedRules).forEach((ruleName) =>
  extend(ruleName, usedRules[ruleName])
);
