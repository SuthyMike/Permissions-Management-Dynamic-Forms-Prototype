import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PermissionsDatagridComponent } from './permissions-datagrid.component';
import { RoleFormComponent } from './role-form.component';
import { ClarityModule } from '@clr/angular';
import { GenericButtonComponent } from './components/button/generic-button.component';
import { NewRoleModalComponent } from './components/new-role-modal/new-role-modal.component';
import { GenericInputComponent } from './generic-input/generic-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [ BrowserModule, ReactiveFormsModule, ReactiveFormsModule, ClarityModule, BrowserAnimationsModule ],
  declarations: [ AppComponent, PermissionsDatagridComponent, RoleFormComponent, GenericButtonComponent, NewRoleModalComponent, GenericInputComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {
  }
}
