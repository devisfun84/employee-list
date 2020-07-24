import { Component, OnInit } from '@angular/core';

import { EmployeeService } from './../../../core/employee-service/employee-service.service';
import { Employee } from 'src/app/modules/shared/models/employee.models';

@Component({
  selector: 'app-employee-grid',
  templateUrl: './employee-grid.component.html',
  styleUrls: ['./employee-grid.component.scss']
})
export class EmployeeGridComponent implements OnInit {

  employees: Employee[];

  constructor( private empService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployeeList();
  }

  private getEmployeeList(): void {
    this.employees = this.empService.getEmployeeList();
  }

}
