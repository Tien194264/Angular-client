import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProjectListComponent } from './components/project-list/project-list.component';

const routes: Routes = [
  { path: 'employee-add', component: EmployeeAddComponent },
  { path: '', component: HomeComponent },
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'employee-edit/:id', component: EmployeeEditComponent },
  { path: 'login', component: LoginComponent },
  { path: 'project-list', component: ProjectListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
