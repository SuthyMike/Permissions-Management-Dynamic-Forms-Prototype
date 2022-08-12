import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlService } from 'src/app/form-control.service';
import { DatagridColumn } from 'src/app/models/datagrid-column';

@Component({
  selector: 'flix-new-role-modal',
  templateUrl: './new-role-modal.component.html',
})
export class NewRoleModalComponent implements OnInit {

  @Input() public display!: boolean;
  @Input() public modalElements!: any;
  @Input() public form!: FormGroup;

  constructor(private formControlService: FormControlService) { }

  ngOnInit(): void {
  }

  public addRole(role: string): void {
    const newRoleControl = new DatagridColumn({key: role.replace(/\s+/g, ''), label: role});
    this.formControlService.addFormControl(newRoleControl);
    this.display = false;
  }

}
