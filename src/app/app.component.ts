import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EmployeeModel } from './model/Employee'; 
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'employee-project';

  employeeForm: FormGroup = new FormGroup({}) ;
  employeeObj: EmployeeModel = new EmployeeModel();
  employees: EmployeeModel[] = [];

  constructor(){
    this.createForm();
  }

  createForm(){
    this.employeeForm = new FormGroup({
      ename: new FormControl(this.employeeObj.ename),
      designation: new FormControl(this.employeeObj.designation),
      salary: new FormControl(this.employeeObj.salary),
      
    })
  }

  onSave(){
    if (this.employeeForm.valid){
      const newEmployee: EmployeeModel = this.employeeForm.value;
      console.log('Selected Designation: ',newEmployee.designation);
      this.employees.push(newEmployee);
      this.employeeForm.reset();

    }else{
      console.log('Form is invalid');
    }

  }

  deleteEmployee(index: number){
    this.employees.splice(index,1);
  }

  editEmployee(index: number){
    const employeeToEdit = this.employees[index];
    this.employeeForm.patchValue({
      ename: employeeToEdit.ename,
      designation: employeeToEdit.designation,
      salary: employeeToEdit.salary,

    })
  }

}


