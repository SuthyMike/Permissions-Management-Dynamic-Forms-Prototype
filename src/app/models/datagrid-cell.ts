import { ControlTypes } from './control-types.enum';
import { GenericFormControl } from './generic-form-control';

export class DatagridCell extends GenericFormControl<string> {
  override controlType = ControlTypes.DATAGRID_CELL;
}
