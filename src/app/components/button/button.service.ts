import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ButtonService {
  private buttonClick = new Subject<any>();

  buttonClicked(value: any) {
    console.log('ButtonService: value', value);
    this.buttonClick.next(value);
  }

  getButtonClickStream(): Observable<any> {
    return this.buttonClick.asObservable();
  }
}
