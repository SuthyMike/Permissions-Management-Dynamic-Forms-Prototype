/**
 * Derived class representing a clarity datagrid Cell
 */
import { ControlTypes } from './control-types.enum';
import { DatagridRowOptions } from './datagrid-row-options';
import { GenericFormElement } from './generic-form-element';

 export class DatagridRow extends GenericFormElement<string, DatagridRowOptions> {
   override controlType = ControlTypes.DATAGRID_ROW;

   constructor(options: GenericFormElement<string, DatagridRowOptions>) {
     super(options);
  }
 }
