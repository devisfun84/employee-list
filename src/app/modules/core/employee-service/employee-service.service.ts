import { Injectable } from '@angular/core';

import { Employee } from '../../shared/models/employee.models';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  private employeeList: Employee[] = [];

  constructor() { }

  getEmployeeList(): Employee[] {
    return this.employeeList;
  }

  getEmployeeById(id: string): Employee {
    return this.employeeList.find(emp => emp.id === id);
  }

  deleteEmployee(id: string): void {
    this.employeeList = this.employeeList.filter(emp => emp.id === id);
  }

  addEmployee(emp: Employee): void {
    if (!this.ifEmployeeExists(emp.id)) {
      this.employeeList.push();
    } else {
      console.log("Employee with same ID already exist");
    }    
  }

  updateEmployee(emp: Employee): void {
    const index = this.employeeList.indexOf(emp);
    this.employeeList.splice(index, 1, emp);
  }

  private ifEmployeeExists(id: string): boolean {
    return this.employeeList.findIndex(emp => emp.id === id) > -1;
  }
}
