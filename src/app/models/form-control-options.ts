import { ValidatorFn } from "@angular/forms";

/**
 * Generic model for Form Control Options
 */
export interface FormControlOptions<V, O> {
  key: string;
  value?: V;
  typeOptions?: O;
  disabled?: boolean;
  required?: boolean;
  validators?: Array<ValidatorFn>;
  controlType?: string;
  label: string;
}
