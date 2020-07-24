import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'employee-dashboard', pathMatch: 'full'    
  },
  {
    path: 'employee-dashboard',
    loadChildren: () => import('./modules/employee-dashboard/employee-dashboard.module').then(m => m.EmployeeDashboardModule)
  },
  {
    path: 'add-employee',
    loadChildren: () => import('./modules/add-employee/add-employee.module').then(m => m.AddEmployeeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
