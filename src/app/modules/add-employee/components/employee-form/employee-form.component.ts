import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { EmployeeService } from 'src/app/modules/core/employee-service/employee-service.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  employeeForm: FormGroup;

  constructor(private fb: FormBuilder, private empService: EmployeeService) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      id: ['', Validators.required],
      age: ['', Validators.required],
      salary: ['', Validators.required],
      department: ['', Validators.required],
    }, { updateOn: 'blur' });
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      console.log(this.employeeForm.value);
      this.empService.addEmployee(this.employeeForm.value);
    }
  }

  shouldShowError(fieldName: string): boolean {
    return this.getControl(fieldName).touched && this.getControl(fieldName).dirty
      && !! this.getControl(fieldName).errors;
  }

  getControl(fieldName: string): AbstractControl {
    return this.employeeForm.get(fieldName)
  }



}
