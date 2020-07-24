import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { AddEmployeeRoutingModule } from './add-employee-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EmployeeFormComponent],
  imports: [
    CommonModule,
    AddEmployeeRoutingModule,
    ReactiveFormsModule
  ]
})
export class AddEmployeeModule { }
