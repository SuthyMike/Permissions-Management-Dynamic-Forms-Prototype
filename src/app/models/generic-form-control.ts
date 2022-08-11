/**
 * Base class representing a Form Control model
 */
export class GenericFormControl<T> {
  value: T|undefined;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  type: string;
  hasKebab: boolean;
  clrIcon: string | null;

  constructor(options: {
      value?: T;
      key?: string;
      label?: string;
      required?: boolean;
      order?: number;
      controlType?: string;
      type?: string;
      options?: {key: string, value: string}[];
      hasKebab?: boolean;
      clrIcon?: string | null;
    } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.hasKebab = options.hasKebab || false;
    this.clrIcon = options.clrIcon || null;
  }
}
