import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ButtonControl } from '../../models/button-control';

@Component({
  selector: 'generic-button',
  templateUrl: 'generic-button.component.html',
})
export class GenericButtonComponent {
  @Output() buttonClicked: EventEmitter<any> = new EventEmitter();
  @Input() buttonControl!: ButtonControl;
  @Input() form!: FormGroup;

  constructor() {}


  public handleButtonClick() {
    this.buttonClicked.next(null);
  }
}
