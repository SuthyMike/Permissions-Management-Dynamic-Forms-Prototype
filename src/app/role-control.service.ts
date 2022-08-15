import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ButtonElement } from './models/button-element';
import { CheckboxElement } from './models/checkbox-element';
import { DatagridCell } from './models/datagrid-cell';
import { DatagridColumn } from './models/datagrid-column';
import { DatagridRow } from './models/datagrid-row';
import { FormControlOptions } from './models/form-control-options';
import { GenericFormElement } from './models/generic-form-element';

/**
 * Responsible for creating role form controls
 */
 @Injectable({ providedIn: 'root' })
 export class RoleControlService {

  /**
   * Replace with service that builds and returns GenericFormElements
   */
  public roleFormElements: GenericFormElement<string, any>[] = [
    new DatagridColumn({
      key: 'actionColumn',
      label: '',
      typeOptions: { actionColumn: true}
    }),
    new DatagridColumn({
      key: 'showManager',
      label: 'Show Manager',
    }),
    new DatagridColumn({
      key: 'advancedUser',
      label: 'Advanced User',
    }),
    new DatagridColumn({
      key: 'regularUser',
      label: 'Regular User',
    }),
    new DatagridColumn({
      key: 'viewOnlyUser',
      label: 'View Only User',
    }),
    new DatagridRow({
      key: 'browseShowsRow',
      label: '',
      typeOptions: {datagridCells: [
        new DatagridCell({
          key: 'browseShowsActionCell',
          label: 'Browse Shows',
          typeOptions: {actionCell: true}
        }),
        new DatagridCell({
          key: 'showManagerCheckboxCell',
          label: '',
          typeOptions: { checkbox: new CheckboxElement({
            key: 'showManagerCheckboxElement',
            label: ''
          })}
        }),
        new DatagridCell({
          key: 'advancedUserCheckboxCell',
          label: '',
          typeOptions: { checkbox: new CheckboxElement({
            key: 'advancedUserCheckboxElement',
            label: ''
          })}
        }),
        new DatagridCell({
          key: 'regularUserCheckboxCell',
          label: '',
          typeOptions: { checkbox: new CheckboxElement({
            key: 'regularUserCheckboxElement',
            label: ''
          })}
        }),
        new DatagridCell({
          key: 'viewOnlyUserCheckboxCell',
          label: '',
          typeOptions: { checkbox: new CheckboxElement({
            key: 'viewOnlyUserCheckboxElement',
            label: ''
          })}
        }),
      ]}
    }),
    new DatagridRow({
      key: 'editShowsRow',
      label: '',
      typeOptions: {datagridCells: [
        new DatagridCell({
          key: 'editShowsActionCell',
          label: 'Edit Shows',
          typeOptions: {actionCell: true}
        }),
      ]}
    }),
    new ButtonElement({
      key: 'newRole',
      label: 'New Role',
    })
  ];

  // TODO: get roles from server
  public getRoleFormControls(): Observable<GenericFormElement<string, FormControlOptions<any, any>>[]> {
    return of(this.roleFormElements);
  }
}
