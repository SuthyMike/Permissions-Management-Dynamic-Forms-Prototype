import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ButtonService } from '../../button/button.service';

@Component({
  selector: 'flix-generic-modal',
  templateUrl: './generic-modal.component.html',
})
export class GenericModalComponent implements AfterViewInit {

  private formChanges: any;
  @Input() modalElements: any;
  @Input() form!: FormGroup;
  @Input() display: boolean = false;

  constructor(private buttonService: ButtonService) { }

  ngAfterViewInit(): void {
    this.formValueChanges();
  }

  public handleButtonClicked(): void {
    this.buttonService.buttonClicked(this.formChanges);
    this.display = false;
  }

  private formValueChanges(): void {
    this.form.valueChanges.subscribe(changes =>  {
      this.formChanges = changes;
      console.log('GenericModalComponent: Form Changes', changes);
    });
  }
}
