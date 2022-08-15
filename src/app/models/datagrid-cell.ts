/**
 * Derived class representing a clarity datagrid Cell
 */
 import { ControlTypes } from './control-types.enum';
import { DatagridCellOptions } from './datagrid-cell-options';
import { GenericFormElement } from './generic-form-element';

 export class DatagridCell extends GenericFormElement<string, DatagridCellOptions> {
   override controlType = ControlTypes.DATAGRID_CELL;

   constructor(options: GenericFormElement<string, DatagridCellOptions>) {
     super(options);
  }
 }
