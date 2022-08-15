/**
 * Derived class representing a clarity datagrid column
 */
import { ControlTypes } from './control-types.enum';
import { DatagridColumnOptions } from './datagrid-column-options';
import { GenericFormElement } from './generic-form-element';

export class DatagridColumn extends GenericFormElement<string, DatagridColumnOptions> {
  override controlType = ControlTypes.DATAGRID_COLUMN;

  constructor(options: GenericFormElement<string, DatagridColumnOptions>) {
    super(options);
 }
}
