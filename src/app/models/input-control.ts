import { ControlTypes } from './control-types.enum';
import { GenericFormControl } from './generic-form-control';

export class InputControl extends GenericFormControl<string> {
  override controlType = ControlTypes.INPUT_CONTROL;
}
