import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'flix-generic-input',
  templateUrl: './generic-input.component.html',
})
export class GenericInputComponent implements OnInit {

  @Input() form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
