import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputElement } from '../../models/input-element';

@Component({
  selector: 'flix-generic-input',
  templateUrl: './generic-input.component.html',
})
export class GenericInputComponent implements OnInit {

  @Input() public form!: FormGroup;
  @Input() public inputElement!: InputElement;

  constructor() { }

  ngOnInit(): void {
  }

}
