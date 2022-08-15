import { ValidatorFn } from "@angular/forms";
import { FormControlOptions } from "./form-control-options";

/**
 * Generic Form Element implementing the generic Form Control Options model
 * V - Generic Value
 * O - Generic Options
 */
export class GenericFormElement<V,O> implements FormControlOptions<V,O>{
  key!: string;
  value?: V;
  typeOptions?: O;
  disabled?: boolean;
  required?: boolean;
  validators?: ValidatorFn[] | [];
  controlType?: string;
  label!: string;


  constructor(options: FormControlOptions<V,O>) {
      this.value = options.value;
      this.key = options.key;
      this.required = options.required;
      this.typeOptions = options.typeOptions;
      this.validators = options.validators;
      this.disabled = options.disabled || false;
      this.label = options.label;
  }
}
