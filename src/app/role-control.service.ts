import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DatagridColumn } from './models/datagrid-column';
import { GenericFormControl } from './models/generic-form-control';

/**
 * Responsible for creating role form controls
 */
 @Injectable({ providedIn: 'root' })
 export class RoleControlService {

  /**
   * Replace with service that builds and returns a RoleColumn item
   */
  public roleFormControls: GenericFormControl<string>[] = [
    new DatagridColumn({
      key: 'showmanager',
      label: 'Show Manager',
      hasKebab: false,
    }),
    new DatagridColumn({
      key: 'advancedUser',
      label: 'Advanced User',
      hasKebab: false,
    }),
    new DatagridColumn({
      key: 'regularUser',
      label: 'Regular User',
      hasKebab: false,
    }),
    new DatagridColumn({
      key: 'viewOnlyUser',
      label: 'View Only User',
      hasKebab: false,
    }),
  ];

  // TODO: get roles from server
  public getRoleFormControls(): Observable<GenericFormControl<string>[]> {
    return of(this.roleFormControls.sort((a, b) => a.order - b.order));
  }
}
