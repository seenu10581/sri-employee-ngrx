import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { addEmployee, updateEmployee } from '../../store/actions/employee.actions';
import { Employee } from '../../store/models/employee';

@Component({
  selector: 'employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent {

  employeeForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    salary: new FormControl(''),
  });
  
  employeeId: String;
  employeesData: Employee[] = [];
  employeeLength = 0;
  
  constructor(
    private route: ActivatedRoute, 
    public router: Router, 
    private store: Store<{ employees: Employee[] }>
    ){
      store.pipe(select('employees')).subscribe( (employees) => {
        this.employeesData = employees;
      }
    );
  };

  ngOnInit() {
    this.employeeId = this.route.snapshot.params['id'];
    if (this.employeeId){
      for(let i = 0; i < this.employeesData.length; i++){
        if(this.employeeId === this.employeesData[i].id){
          this.employeeForm.patchValue({
            name: [this.employeesData[i].name],                      
            age: [this.employeesData[i].age],                      
            salary: [this.employeesData[i].salary],                      
          });
          break;
        }
      }
    }
  }
  onSubmit() {
    if (this.employeeId){
      let updateEmployeeData = {id: this.employeeId, ...this.employeeForm.value};
      this.store.dispatch(updateEmployee(updateEmployeeData));
      this.router.navigate(['/view-employees']);
    }else{
      let newEmployee = {id: new Date().toJSON(), ...this.employeeForm.value};
      this.store.dispatch(addEmployee(newEmployee));
      this.router.navigate(['/view-employees']);
    }
  }

  redirectToViewPage() {
    this.router.navigate(['/view-employees']);
  }
 
}