import { Component, Input, OnInit } from '@angular/core';
import { CheckboxElement } from 'src/app/models/checkbox-element';

@Component({
  selector: 'flix-checkbox',
  templateUrl: './checkbox.component.html',
})
export class CheckboxComponent implements OnInit {
  @Input() public checkboxElement?: CheckboxElement;
  constructor() { }

  ngOnInit(): void {
  }

}
