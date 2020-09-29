import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class EmployeeService {

  employeesList:any = [];
  configUrl = "http://localhost:3000/";

  constructor(private http: HttpClient) { }
  
  getEmployees() {
    return this.http.get(this.configUrl+"employees").pipe(
      map( (data)=>{
        this.employeesList = data;
        return data;
      })
     
    );
  }

  getEmployee(id) {
    return this.http.get(this.configUrl+"employees/"+id);
  }

  addEmployee(employee) {
    return this.http.post(this.configUrl+"employees", employee);
  }

  updateEmployee(id, employee) {
    return this.http.put(this.configUrl+"employees/"+id, employee);
  }

  deleteEmployee(id) {
    return this.http.delete(this.configUrl+"employees/"+id);
  }

}
