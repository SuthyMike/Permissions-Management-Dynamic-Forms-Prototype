import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DatagridColumn } from 'src/app/models/datagrid-column';
import { DatagridRow } from 'src/app/models/datagrid-row';

@Component({
  selector: 'flix-permissions-table',
  templateUrl: './permissions-table.component.html'
})
export class PermissionsTableComponent implements OnInit {
  public newRoleButtonControl!: any;
  @Input() datagridColumns!: DatagridColumn[];
  @Input() datagridRows!: DatagridRow[];
  @Input() form!: FormGroup;

  constructor() {
  }

  public ngOnInit(): void {
  }
}
