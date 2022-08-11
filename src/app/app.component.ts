import { Component } from '@angular/core';
import { RoleControlService } from './role-control.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public columns: any;

  constructor(roleService: RoleControlService) {
    this.columns = roleService.getRoleFormControls();
  }
}
