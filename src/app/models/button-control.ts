import { ControlTypes } from './control-types.enum';
import { GenericFormControl } from './generic-form-control';

export class ButtonControl extends GenericFormControl<string> {
  override controlType = ControlTypes.BUTTON_CONTROL;
}
