import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'flix-generic-button',
  templateUrl: 'generic-button.component.html',
})
export class GenericButtonComponent {
  @Output() buttonClicked: EventEmitter<any> = new EventEmitter();
  @Input() buttonOptions!: any;
  @Input() form!: FormGroup;

  constructor() {}

  public handleButtonClick() {
    this.buttonClicked.next(null);
  }
}
