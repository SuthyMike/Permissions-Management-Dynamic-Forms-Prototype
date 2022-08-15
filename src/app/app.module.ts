import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PermissionsManagementComponent } from './components/permissions-management/permissions-management.component';
import { PermissionsTableComponent } from './components/permissions-table/permissions-table.component';
import { ClarityModule } from '@clr/angular';
import { GenericButtonComponent } from './components/button/generic-button.component';
import { GenericInputComponent } from './components/generic-input/generic-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GenericModalComponent } from './components/modals/generic-modal/generic-modal.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';

@NgModule({
  imports: [ BrowserModule, ReactiveFormsModule, ReactiveFormsModule, ClarityModule, BrowserAnimationsModule ],
  declarations: [
    AppComponent,
    PermissionsManagementComponent,
    PermissionsTableComponent,
    GenericButtonComponent,
    GenericInputComponent,
    GenericModalComponent,
    CheckboxComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {
  }
}
