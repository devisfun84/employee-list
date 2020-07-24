import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeGridComponent } from './components/employee-grid/employee-grid.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeGridComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeDashboardRoutingModule { }
