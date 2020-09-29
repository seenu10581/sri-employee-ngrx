import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { deleteEmployee } from '../../../store/actions/employee.actions';
import { Employee } from '../../../store/models/employee';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {  
  employeesdata = [];
  employees$: Observable<Employee[]>;
  constructor(public router: Router, public store: Store<{ employees: Employee[] }>){    
    this.employees$ = store.pipe(select('employees'));
  }

  deleteEmployee(id: String, name: String) : void {
      this.store.dispatch(deleteEmployee(id));
  }
  editEmployee(id) {
    this.router.navigate(['/edit-employee', { id: id }]);
  }
  redirectToAddEmployee() {
    this.router.navigate(['/add-employee']);
  }
}
