import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeEditComponent } from './employee/edit/employee-edit.component';
import { EmployeeListComponent } from './employee/view/employee-list/employee-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/view-employees', pathMatch: 'full' },
  { path: 'add-employee', component: EmployeeEditComponent },
  { path: 'edit-employee', component: EmployeeEditComponent },
  { path: 'view-employees', component: EmployeeListComponent }, 
  { path: '**', redirectTo: '/view-employees', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
