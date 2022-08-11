import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormControlService } from './form-control.service';
import { DatagridColumn } from './models/datagrid-column';

@Component({
  selector: 'flix-permissions-datagrid',
  templateUrl: './permissions-datagrid.component.html',
})
export class PermissionsDatagridComponent implements OnInit, AfterViewInit {

  public form!: FormGroup;
  public displayNewRoleModal: boolean = false;
  @Input() public datagridColumns: any = [];

  constructor(private formControlService: FormControlService) {
  }

  ngOnInit() {
    this.form = this.formControlService.createFormGroup(this.datagridColumns as DatagridColumn[]);
    console.log('form', this.form);
  }

  ngAfterViewInit(): void {
    this.getFormUpdates();
  }

  public handleButtonClicked(): void {
    this.displayNewRoleModal = true;
  }

  public getFormUpdates(): void {
    this.formControlService.getFormControlAddedEvent()
    .subscribe(
      control => {
        console.log('controllaa', control);
        this.datagridColumns.push(control);
        this.form.addControl(control.key, new FormControl(control.value || ''));
        console.log('updated form', this.form.controls);
      }
    );
  }
}
