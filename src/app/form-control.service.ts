import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { GenericFormControl } from './models/generic-form-control';

/**
 * Service to group a set of form controls
 */
@Injectable({ providedIn: 'root' })
export class FormControlService {
  constructor() { }

  private formControlAddedStream: Subject<GenericFormControl<string>> = new Subject();

  public createFormGroup(formControl: GenericFormControl<string>[]) {
    const group: any = {};

    formControl.forEach(control => {
      group[control.key] = new FormControl(control.value || '');
    });
    return new FormGroup(group);
  }

  public addFormControl(formControl: GenericFormControl<string>): void {
    // const newFormControl = new FormControl(formControl.key || '');
    this.formControlAddedStream.next(formControl);
  }

  public getFormControlAddedEvent(): Observable<GenericFormControl<string>> {
    return this.formControlAddedStream.asObservable();
  }
}
