import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { RestApiService } from 'src/app/services/rest-api.service';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css'],
})
export class EmployeeAddComponent implements OnInit {
  employee: Employee;
  btnDisabled: boolean = false;
  url = 'http://localhost:3000/api/v1/accounts';

  constructor(private rest: RestApiService, private data: DataService) {
    this.employee = new Employee();
  }

  ngOnInit() {}

  validate() {
    return true;
  }
  save() {
    this.btnDisabled = true;
    if (this.validate()) {
      this.rest
        .post(this.url, this.employee)
        .then((data) => {
          this.data.success('Employee was saved');
          this.btnDisabled = false;
        })
        .catch((error) => {
          this.data.error(error['message']);
          this.btnDisabled = false;
        });
    }
  }
}
