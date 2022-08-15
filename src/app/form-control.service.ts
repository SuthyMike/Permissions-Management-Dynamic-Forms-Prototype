import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { FormControlOptions } from './models/form-control-options';
import { GenericFormElement } from './models/generic-form-element';
/**
 * Service to group a set of form controls
 */
@Injectable({ providedIn: 'root' })
export class FormControlService {
  constructor() { }

  private formControlAddedStream: Subject<GenericFormElement<string, FormControlOptions<any, any>>> = new Subject();

  public createFormGroup(formControl: GenericFormElement<string, FormControlOptions<any, any>>[]) {
    const group: any = {};

    formControl.forEach(control => {
      group[control.key] = new FormControl(control.value || '');
    });
    return new FormGroup(group);
  }

  public addFormControl(formControl: any): void { //GenericFormElement<string, FormControlOptions<any, any>>): void {
    // const newFormControl = new FormControl(formControl.key || '');
    this.formControlAddedStream.next(formControl);
  }

  public getFormControlAddedEvent(): Observable<GenericFormElement<string, FormControlOptions<any, any>>> {
    return this.formControlAddedStream.asObservable();
  }
}
