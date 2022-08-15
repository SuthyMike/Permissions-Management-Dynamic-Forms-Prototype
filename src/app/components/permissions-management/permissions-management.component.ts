import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ButtonElement } from 'src/app/models/button-element';
import { ControlTypes } from 'src/app/models/control-types.enum';
import { DatagridColumn } from 'src/app/models/datagrid-column';
import { DatagridRow } from 'src/app/models/datagrid-row';
import { GenericFormElement } from 'src/app/models/generic-form-element';
import { InputElement } from 'src/app/models/input-element';
import { FormControlService } from '../../form-control.service';
import { ButtonService } from '../button/button.service';

@Component({
  selector: 'flix-permissions-management',
  templateUrl: './permissions-management.component.html',
})
export class PermissionsManagementComponent implements OnInit, AfterViewInit {

  public form!: FormGroup;
  public displayNewRoleModal!: boolean;
  public buttonElement!: ButtonElement;
  public modalElements!: GenericFormElement<string, any>[];
  public datagridColumns!: DatagridColumn[];
  public datagridRows!: DatagridRow[];
  @Input() public formElements: any = [];

  constructor(
    private formControlService: FormControlService,
    private buttonService: ButtonService,
    ) {
  }

  ngOnInit() {
    this.listenForButtonClicks();
    /**
     * Set up the elements which will populate the new role modal
     */
    this.modalElements = [
      new InputElement({
        key: 'roleInput',
        label: '',
        typeOptions: { placeholder: 'Please enter a role...'}
      }),
      new ButtonElement({
        key: 'confirm',
        label: 'Confirm',
      }),
    ];

    this.buttonElement = this.formElements
    .filter((el: GenericFormElement<any, any>) => el.controlType === ControlTypes.BUTTON_CONTROL)[0];

    this.datagridColumns = this.formElements
    .filter((el: GenericFormElement<any, any>) => el.controlType === ControlTypes.DATAGRID_COLUMN);

    this.datagridRows = this.formElements
    .filter((el: GenericFormElement<any, any>) => el.controlType === ControlTypes.DATAGRID_ROW);

    this.form = this.formControlService.createFormGroup(this.formElements.concat(this.modalElements));
    console.log('PermissionsManagement: form created', this.form);
  }

  ngAfterViewInit(): void {
    this.getFormUpdates();
  }

  public handleButtonClicked(): void {
    this.displayNewRoleModal = true;
    console.log('PermissionsManagement: displayNewRoleModal', this.displayNewRoleModal);
  }

  public getFormUpdates(): void {
    this.formControlService.getFormControlAddedEvent()
    .subscribe(
      control => {
        console.log('PermissionsManagement: form control added', control);
        this.datagridColumns.push(control as DatagridColumn);
        this.form.addControl(control.key, new FormControl(control.value || ''));
        console.log('PermissionsManagement: updated form controls', this.form.controls);
      }
    );
  }

  private listenForButtonClicks(): void {
    this.buttonService.getButtonClickStream()
    // filter on type here perhaps, we only want form value changes - button service is not a good solution though
    .subscribe(values => {
      if (values.roleInput && values.roleInput.length) {
        const newRoleControl =  new DatagridColumn({
          key: values.roleInput.replace(/\s+/g, ''),
          label: values.roleInput,
        });
        this.formControlService.addFormControl(newRoleControl);
      }
    });
  }
}
