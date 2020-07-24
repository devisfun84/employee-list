import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeGridComponent } from './components/employee-grid/employee-grid.component';
import { EmployeeDashboardRoutingModule } from './employee-dashboard-routing.module';


@NgModule({
  declarations: [EmployeeGridComponent],
  imports: [
    CommonModule,
    EmployeeDashboardRoutingModule
  ]
})
export class EmployeeDashboardModule { }
