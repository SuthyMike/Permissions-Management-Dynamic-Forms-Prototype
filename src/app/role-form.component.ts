import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlService } from './form-control.service';
import { ButtonControl } from './models/button-control';
import { DatagridColumn } from './models/datagrid-column';
import { GenericFormControl } from './models/generic-form-control';

@Component({
  selector: 'flix-role-form',
  templateUrl: './role-form.component.html'
})
export class RoleFormComponent implements OnInit {
  public newRoleButtonControl!: ButtonControl;
  @Input() datagridColumns!: GenericFormControl<string>[];
  @Input() datagridCells!: GenericFormControl<string>[];
  @Input() form!: FormGroup;

  constructor() {
  }

  public ngOnInit(): void {
    console.log('form in role component', this.form);
    // this.newRoleButtonControl = new ButtonControl({ key: 'newRoleButton', label: 'New Role' });
    // this.formControlService.addFormControl(this.newRoleButtonControl);
  }
}
