/**
 * Derived class representing the control for a clarity datagrid column
 */
import { ControlTypes } from './control-types.enum';
import { GenericFormControl } from './generic-form-control';

export class DatagridColumn extends GenericFormControl<string> {
  override controlType = ControlTypes.DATAGRID_COLUMN;
}
