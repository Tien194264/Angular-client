import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MessageComponent } from './components/message/message.component';
import { DataService } from './services/data.service';
import { RestApiService } from './services/rest-api.service';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';
import { HomeComponent } from './components/home/home.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { LoginComponent } from './components/login/login.component';
import { ProjectAddComponent } from './components/project-add/project-add.component';
import { ProjectEditComponent } from './components/project-edit/project-edit.component';
import { ProjectListComponent } from './components/project-list/project-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    EmployeeAddComponent,
    HomeComponent,
    EmployeeListComponent,
    EmployeeEditComponent,
    LoginComponent,
    ProjectAddComponent,
    ProjectEditComponent,
    ProjectListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [RestApiService, DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
